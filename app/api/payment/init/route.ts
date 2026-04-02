import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, name, phone } = body;

    if (!plan || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (plan, phone)" },
        { status: 400 },
      );
    }

    let amount = 0;
    if (plan === "monthly") {
      amount = 10;
    } else if (plan === "yearly") {
      amount = 29500;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid plan selected" },
        { status: 400 },
      );
    }

    const store_id = process.env.SSL_STORE_ID;
    const store_passwd = process.env.SSL_STORE_PASSWD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const is_live = process.env.SSL_IS_LIVE === "true";

    if (!store_id || !store_passwd || !baseUrl) {
      console.error("Missing SSLCommerz Credentials in .env.local");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    const tran_id = `PWY_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const payload = {
      store_id: store_id,
      store_passwd: store_passwd,
      total_amount: amount.toString(),
      currency: "BDT",
      tran_id: tran_id,
      success_url: `${baseUrl}/api/payment/success`,
      fail_url: `${baseUrl}/api/payment/fail`,
      cancel_url: `${baseUrl}/api/payment/cancel`,
      ipn_url: `${baseUrl}/api/payment/ipn`,
      shipping_method: "No",
      product_name: `Presswayy ${plan === "monthly" ? "Monthly" : "Yearly"} Plan`,
      product_category: "Software Subscription",
      product_profile: "general",
      cus_name: name || "Presswayy Client",
      cus_email: "client@presswayy.com",
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: phone,
      cus_fax: phone,
      ship_name: name || "Presswayy Client",
      ship_add1: "Dhaka",
      ship_city: "Dhaka",
      ship_postcode: "1000",
      ship_country: "Bangladesh",
      value_a: phone, // 💡 Custom value হিসেবে ফোন নম্বর পাঠানো হলো
    };

    const data = new URLSearchParams(payload);

    const apiUrl = is_live
      ? "https://securepay.sslcommerz.com/gwprocess/v4/api.php" // Live API
      : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"; // Sandbox API

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

    const apiResponse = await response.json();

    if (apiResponse?.status === "SUCCESS" && apiResponse?.GatewayPageURL) {
      // 💡 ফ্রন্টএন্ডের জন্য success: true পাঠানো হলো
      return NextResponse.json({
        success: true,
        url: apiResponse.GatewayPageURL,
      });
    } else {
      console.error("SSLCommerz Init Error:", apiResponse);
      return NextResponse.json(
        {
          success: false,
          error:
            apiResponse.failedreason ||
            "Failed to generate SSLCommerz payment URL",
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Payment API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
