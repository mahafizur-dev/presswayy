// app/api/meeting/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, date, time } = body;


    const N8N_WEBHOOK_URL =
      "https://server.presswayy.com/webhook/schedule-meeting";

    // n8n এ ডেটা পাঠানো
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: phone,
        meeting_date: date,
        meeting_time: time,
        timestamp: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ success: true, message: "Meeting scheduled" });
  } catch (error) {
    console.error("Meeting API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
