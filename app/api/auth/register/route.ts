import { NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, password, name, email, businessName, address } = body;

    if (!phone || !password || !name) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const upstream = await fetch(`${API_URL}/user-register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password, name, email, businessName, address }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { success: false, message: "Signup failed." },
        { status: 400 },
      );
    }

    const token = await createSessionToken({
      phone,
      userName: name,
      businessName,
      isPaid: false,
      meetingStatus: "Pending",
      meetingDesc: "",
    });

    const response = NextResponse.json({
      success: true,
      userName: name,
      businessName,
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
    console.error("Register route error:", error);
    return NextResponse.json(
      { success: false, message: "Signup failed. Please try again." },
      { status: 500 },
    );
  }
}
