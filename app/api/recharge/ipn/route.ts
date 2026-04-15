import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const val_id = formData.get("val_id") as string;
    const status = formData.get("status") as string;

    if (!val_id) {
      return NextResponse.json(
        { error: "Invalid IPN Request" },
        { status: 400 },
      );
    }

    if (status !== "VALID") {
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

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
        // 💡 আপডেট করা পেলোড: n8n-এ পাঠানোর জন্য প্রয়োজনীয় সব ইনফরমেশন যোগ করা হলো
        const ipnPayload = {
          client_id: verifyData.value_a,
          amount: verifyData.amount,
          tran_id: verifyData.tran_id,
          payment_status: "Paid",
          source: "Recharge",

          // ইউজারের বিস্তারিত তথ্য (যেটা আমরা init ফাইল থেকে পাঠিয়েছিলাম)
          cus_name: verifyData.cus_name || "N/A",
          cus_email: verifyData.cus_email || "N/A",
          cus_phone: verifyData.cus_phone || "N/A",

          // ব্যাংকের ট্রানজেকশন তথ্য (হিসাব রাখার জন্য)
          bank_tran_id: verifyData.bank_tran_id || "N/A",
          card_type: verifyData.card_type || "N/A", // বিকাশ, নগদ, নাকি কার্ড তা বোঝার জন্য
          tran_date: verifyData.tran_date || "N/A",
          store_amount: verifyData.store_amount || verifyData.amount, // SSLCommerz ফি কাটার পর আপনার অ্যাকাউন্টে যে টাকাটা ঢুকবে
          currency: verifyData.currency || "BDT",
        };

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const webhookUrl = `${apiUrl}/sslcommerz-ipn`;

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ipnPayload),
        });
      } catch (webhookError) {
        console.error("Webhook forwarding error:", webhookError);
      }

      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Validation Failed" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
