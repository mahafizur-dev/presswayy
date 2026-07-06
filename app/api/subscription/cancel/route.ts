import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // ক্যানসেল করলে ডেডিকেটেড ক্যানসেল পেইজে রিডাইরেক্ট করা
    return NextResponse.redirect(`${baseUrl}/subscription-cancel`, 303);
  } catch (error) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/subscription`, 303);
  }
}
