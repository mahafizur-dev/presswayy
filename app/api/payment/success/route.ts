import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ১. SSLCommerz থেকে আসা POST ডেটা রিসিভ করা
    const formData = await req.formData();
    const val_id = formData.get("val_id") as string;
    const status = formData.get("status") as string;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // যদি স্ট্যাটাস VALID না হয়, তাহলে ফেইল পেজে পাঠিয়ে দিবো
    if (status !== "VALID") {
      return NextResponse.redirect(`${baseUrl}/dashboard?payment=failed`, 303);
    }

    // ২. .env.local থেকে ক্রেডেনশিয়াল নেওয়া
    const store_id = process.env.SSL_STORE_ID as string;
    const store_passwd = process.env.SSL_STORE_PASSWD as string;
    const is_live = process.env.SSL_IS_LIVE === "true";

    // ৩. Validation API URL নির্ধারণ
    const validationUrl = is_live
      ? "https://securepay.sslcommerz.com/validator/api/validationserverAPI.php"
      : "https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php";

    // ৪. SSLCommerz এর সার্ভারকে ভেরিফাই করতে বলা
    const verifyResponse = await fetch(
      `${validationUrl}?val_id=${val_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`,
    );

    const verifyData = await verifyResponse.json();

    // ৫. ভেরিফিকেশন সাকসেসফুল হলে ডাটাবেসে সেভ করা এবং ড্যাশবোর্ডে পাঠানো
    if (verifyData.status === "VALID" || verifyData.status === "VALIDATED") {
      // 💡 DATABASE SAVE LOGIC: n8n ওয়েবহুকে ডেটা পাঠানো
      try {
        // init/route.ts এ আমরা value_a তে ইউজারের phone নাম্বার পাঠিয়েছিলাম
        // সেটি এখানে রিসিভ করে ডাটাবেসে ইউজারের প্রোফাইল আপডেট করবো
        const paymentPayload = {
          tran_id: verifyData.tran_id,
          amount: verifyData.amount,
          phone: verifyData.value_a, // ইউজারের ফোন নাম্বার (যাতে ডাটাবেসে তাকে চেনা যায়)
          bank_tran_id: verifyData.bank_tran_id,
          card_type: verifyData.card_type,
          payment_status: "Paid",
          date: verifyData.tran_date,
        };

        // TODO: n8n এ 'payment-success' নামের একটি ওয়েবহুক বানিয়ে তার URL এখানে বসাবেন
        const N8N_DB_WEBHOOK_URL =
          "https://server.presswayy.com/webhook/payment-success";

        await fetch(N8N_DB_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentPayload),
        });

        console.log(
          "✅ Payment Data successfully sent to n8n Database Webhook.",
        );
      } catch (dbError) {
        // ডাটাবেসে সেভ হতে সমস্যা হলেও ইউজারকে সাকসেস পেজে পাঠাবো
        console.error("Database save error:", dbError);
      }

      // ইউজারকে সাকসেস মেসেজসহ ড্যাশবোর্ডে রিডাইরেক্ট করে দিচ্ছি
      return NextResponse.redirect(`${baseUrl}/dashboard?payment=success`, 303);
    } else {
      // কেউ যদি ফেক রিকোয়েস্ট পাঠায়, তবে সে এখানে ধরা খাবে
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
