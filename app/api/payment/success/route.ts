import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const val_id = formData.get("val_id") as string;
    const status = formData.get("status") as string;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (status !== "VALID") {
      return NextResponse.redirect(`${baseUrl}/dashboard?payment=failed`, 303);
    }

    // Updated to match your .env file
    const store_id = process.env.NEXT_PUBLIC_SSL_STORE_ID as string;
    const store_passwd = process.env.NEXT_PUBLIC_SSL_STORE_PASSWD as string;
    const is_live = process.env.NEXT_PUBLIC_SSL_IS_LIVE === "true";

    const validationUrl = is_live
      ? "https://securepay.sslcommerz.com/validator/api/validationserverAPI.php"
      : "https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php";

    const verifyResponse = await fetch(
      `${validationUrl}?val_id=${val_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`,
    );

    const verifyData = await verifyResponse.json();

    if (verifyData.status === "VALID" || verifyData.status === "VALIDATED") {
      try {
        const paymentPayload = {
          tran_id: verifyData.tran_id,
          amount: verifyData.amount,
          phone: verifyData.value_a,
          bank_tran_id: verifyData.bank_tran_id,
          card_type: verifyData.card_type,
          payment_status: "Paid",
          date: verifyData.tran_date,
        };

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error(
            "Missing NEXT_PUBLIC_API_URL in environment variables.",
          );
        }

        const N8N_DB_WEBHOOK_URL = `${apiUrl}/payment-success`;

        const n8nResponse = await fetch(N8N_DB_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentPayload),
        });

        if (!n8nResponse.ok) {
          throw new Error(`n8n responded with status: ${n8nResponse.status}`);
        }

        console.log(
          "✅ Payment Data successfully sent to n8n Database Webhook.",
        );
      } catch (dbError) {
        console.error("Database save error (n8n Issue):", dbError);
      }

      return NextResponse.redirect(`${baseUrl}/dashboard?payment=success`, 303);
    } else {
      console.error("Payment Validation Failed (Fraud Attempt):", verifyData);
      return NextResponse.redirect(`${baseUrl}/dashboard?payment=failed`, 303);
    }
  } catch (error) {
    console.error("Success Route Error:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?payment=failed`,
      303,
    );
  }
}
