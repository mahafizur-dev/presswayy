import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/session";

export async function GET() {
  const store = await cookies();
  const session = await verifySessionToken(store.get(SESSION_COOKIE)?.value);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    userName: session.userName,
    userPhone: session.phone,
    businessName: session.businessName,
    isPaid: session.isPaid,
    meetingStatus: session.meetingStatus,
    meetingDesc: session.meetingDesc,
  });
}
