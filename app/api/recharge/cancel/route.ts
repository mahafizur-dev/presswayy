import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // ক্যানসেল করলে রিচার্জ পেইজে ক্যানসেল মেসেজ সহ রিডাইরেক্ট করা
    return NextResponse.redirect(`${baseUrl}/recharge?payment=cancel`, 303);
  } catch (error) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/recharge`, 303);
  }
}
