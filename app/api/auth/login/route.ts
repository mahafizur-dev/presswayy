import { NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  try {
    const { phone, password } = await req.json();

    if (!phone || !password) {
      return NextResponse.json(
        { success: false, message: "Phone and password are required." },
        { status: 400 },
      );
    }

    const upstream = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });
    const data = await upstream.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "Incorrect password." },
        { status: 401 },
      );
    }

    const token = await createSessionToken({
      phone,
      userName: data.userName,
      businessName: data.businessName,
      isPaid: data.paymentStatus === "Paid",
      meetingStatus: data.meetingStatus || "Pending",
      meetingDesc: data.meetingDesc || "",
    });

    const response = NextResponse.json({
      success: true,
      userName: data.userName,
      businessName: data.businessName,
    });

    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { success: false, message: "Login failed. Please try again." },
      { status: 500 },
    );
  }
}
