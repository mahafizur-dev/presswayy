import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, date, time } = body;

    if (!phone || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (phone, date, time)",
        },
        { status: 400 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      console.error("Missing NEXT_PUBLIC_API_URL in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    const N8N_WEBHOOK_URL = `${baseUrl}/schedule-meeting`;

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
