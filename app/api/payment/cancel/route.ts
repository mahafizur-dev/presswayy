import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const redirectUrl = new URL(
    "/dashboard?payment=cancelled",
    process.env.NEXT_PUBLIC_BASE_URL,
  );
  return NextResponse.redirect(redirectUrl, 303);
}
