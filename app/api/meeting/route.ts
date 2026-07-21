import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const store = await cookies();
    const session = await verifySessionToken(store.get(SESSION_COOKIE)?.value);

    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    if (!session.isPaid) {
      return NextResponse.json(
        { success: false, error: "Onboarding payment is required before scheduling a meeting." },
        { status: 403 },
      );
    }

    const body = await req.json();
    const { date, time } = body;

    // The phone number is taken from the verified session, never from the
    // request body, so a caller cannot book a meeting under someone else's number.
    const phone = session.phone;

    // 1. Validate required fields
    if (!date || !time) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (date, time)",
        },
        { status: 400 },
      );
    }

    // 2. Fetch Base URL from environment variables
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      console.error("Missing NEXT_PUBLIC_API_URL in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    // 3. Construct the Webhook URL
    const N8N_WEBHOOK_URL = `${baseUrl}/schedule-meeting`;

    // 4. Send data to n8n webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: phone,
        meeting_date: date,
        meeting_time: time,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n responded with status: ${response.status}`);
    }

    // 5. Return success response
    return NextResponse.json({
      success: true,
      message: "Meeting scheduled successfully",
    });
  } catch (error) {
    console.error("Meeting API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
