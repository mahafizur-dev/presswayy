import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const tran_id = formData.get("tran_id");
    const client_id = formData.get("value_a");

    console.log(
      `Subscription Payment Failed for Client: ${client_id}, Transaction: ${tran_id}`,
    );

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // ফেইল হলে ইউজারকে সাবস্ক্রিপশন ফেইল পেইজে পাঠানো
    return NextResponse.redirect(
      `${baseUrl}/subscription-fail?tran_id=${tran_id}`,
      303,
    );
  } catch (error) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/subscription?payment=error`, 303);
  }
}
