// Signs and verifies the httpOnly "session" cookie with HMAC-SHA256 so it
// cannot be forged by client-side JavaScript (e.g. from the browser console).
// Uses Web Crypto (available in both the Node.js route runtime and the Edge
// middleware runtime) instead of a JWT library, since we only need a single
// signed-and-timestamped payload.

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const SESSION_COOKIE = "session";
const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface SessionPayload {
  phone: string;
  userName: string;
  businessName?: string;
  isPaid: boolean;
  meetingStatus: string;
  meetingDesc?: string;
  exp: number;
}

function base64url(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlToBytes(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded.padEnd(padded.length + ((4 - (padded.length % 4)) % 4), "="));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function getSigningKey(): Promise<CryptoKey> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET is not set. Add it to .env.local before issuing sessions.",
    );
  }
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createSessionToken(
  payload: Omit<SessionPayload, "exp">,
  ttlSeconds: number = DEFAULT_TTL_SECONDS,
): Promise<string> {
  const full: SessionPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const body = base64url(encoder.encode(JSON.stringify(full)));
  const key = await getSigningKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  return `${body}.${base64url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(
  token: string | undefined | null,
): Promise<SessionPayload | null> {
  if (!token) return null;
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  try {
    const key = await getSigningKey();
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      base64urlToBytes(signature) as BufferSource,
      encoder.encode(body) as BufferSource,
    );
    if (!valid) return null;

    const payload = JSON.parse(decoder.decode(base64urlToBytes(body))) as SessionPayload;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE };
