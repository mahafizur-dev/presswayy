import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const amount = formData.get("amount");
    const tran_id = formData.get("tran_id");
    const client_id = formData.get("value_a");
    const page_name = formData.get("value_c");

    console.log("Onboarding Payment Success for Client:", client_id);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    return NextResponse.redirect(
      `${baseUrl}/onboarding-success?tran_id=${tran_id}&client_id=${client_id}&amount=${amount}&page_name=${encodeURIComponent(
        (page_name as string) || "",
      )}`,
      303,
    );
  } catch (error) {
    console.error("Onboarding Success API Error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/onboarding?payment=error`, 303);
  }
}
