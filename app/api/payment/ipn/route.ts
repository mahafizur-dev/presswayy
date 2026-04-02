import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const val_id = formData.get("val_id") as string;
    const status = formData.get("status") as string;

    if (!val_id) {
      return NextResponse.json(
        { error: "Invalid IPN Request: No val_id" },
        { status: 400 },
      );
    }

    if (status !== "VALID") {
      console.log(`IPN Ignored: Transaction status is ${status}`);
      return NextResponse.json(
        { message: `Ignored status: ${status}` },
        { status: 200 },
      );
    }

    const store_id = process.env.SSL_STORE_ID as string;
    const store_passwd = process.env.SSL_STORE_PASSWD as string;
    const is_live = process.env.SSL_IS_LIVE === "true";


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
          source: "IPN", 
        };

        const N8N_DB_WEBHOOK_URL =
          "https://server.presswayy.com/webhook/payment-success";

        await fetch(N8N_DB_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentPayload),
        });

        console.log("✅ IPN Processed: Payment Data successfully sent to n8n.");
      } catch (dbError) {
        console.error("IPN Database save error:", dbError);
      }

      return NextResponse.json(
        { message: "IPN Processed Successfully" },
        { status: 200 },
      );
    } else {
      console.error("IPN Validation Failed (Fraud Attempt):", verifyData);
      return NextResponse.json({ error: "Validation Failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("IPN Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
