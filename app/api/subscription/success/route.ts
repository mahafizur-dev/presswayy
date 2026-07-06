import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const amount = formData.get("amount");
    const tran_id = formData.get("tran_id");
    const client_id = formData.get("value_a");
    const plan = formData.get("value_b");

    console.log("Subscription Payment Success for Client:", client_id);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    return NextResponse.redirect(
      `${baseUrl}/subscription-success?tran_id=${tran_id}&client_id=${client_id}&amount=${amount}&plan=${plan}`,
      303,
    );
  } catch (error) {
    console.error("Subscription Success API Error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/subscription?payment=error`, 303);
  }
}
