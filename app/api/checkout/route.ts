// app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, email, phone, address, plan, billingCycle } = body;

    const amount = billingCycle === "yearly" ? 29500 : 3000;

    const store_id = process.env.SSL_STORE_ID;
    const store_passwd = process.env.SSL_STORE_PASSWORD;
    const is_live = process.env.SSL_IS_LIVE === "true"; 

    if (!store_id || !store_passwd) {
      throw new Error(
        "SSLCommerz credentials are not configured in environment variables.",
      );
    }

    const formData = new URLSearchParams();
    formData.append("store_id", store_id);
    formData.append("store_passwd", store_passwd);
    formData.append("total_amount", amount.toString());
    formData.append("currency", "BDT");
    formData.append("tran_id", `TXN_${Date.now()}`);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    formData.append("success_url", `${baseUrl}/api/payment/success`);
    formData.append("fail_url", `${baseUrl}/api/payment/fail`);
    formData.append("cancel_url", `${baseUrl}/api/payment/cancel`);

    formData.append("cus_name", firstName);
    formData.append("cus_email", email);
    formData.append("cus_add1", address || "Dhaka");
    formData.append("cus_city", "Dhaka");
    formData.append("cus_postcode", "1000");
    formData.append("cus_country", "Bangladesh");
    formData.append("cus_phone", phone);

    formData.append("shipping_method", "NO");
    formData.append("product_name", plan);
    formData.append("product_category", "Software");
    formData.append("product_profile", "non-physical-goods");

    // API Call to SSLCommerz
    const sslUrl = `https://${is_live ? "securepay" : "sandbox"}.sslcommerz.com/gwprocess/v4/api.php`;

    const sslRes = await fetch(sslUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const sslData = await sslRes.json();

    if (sslData?.status === "SUCCESS" && sslData?.GatewayPageURL) {
      return NextResponse.json({ url: sslData.GatewayPageURL });
    } else {
      console.error("SSLCommerz Error:", sslData);
      return NextResponse.json(
        { error: sslData?.failedreason || "SSLCommerz Initialization Failed" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Checkout process error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
