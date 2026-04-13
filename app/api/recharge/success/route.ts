import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const tran_id = formData.get("tran_id");
    const client_id = formData.get("value_a");

    console.log("Payment Success for Client:", client_id);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // plan=... প্যারামিটারটি ইউআরএল থেকে বাদ দিয়ে দিলাম
    return NextResponse.redirect(
      `${baseUrl}/recharge-success?tran_id=${tran_id}`,
      303,
    );
  } catch (error) {
    console.error("Success API Error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/recharge?payment=error`, 303);
  }
}
