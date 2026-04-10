import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // আমাদের রিচার্জ ফ্রন্টএন্ড থেকে এই ডেটাগুলো আসছে
    const { client_id, amount, plan_choice } = body;

    if (!client_id || !amount) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (client_id, amount)",
        },
        { status: 400 },
      );
    }

    // আপনার .env ফাইল থেকে Credentials নেওয়া হচ্ছে
    const store_id = process.env.NEXT_PUBLIC_SSL_STORE_ID;
    const store_passwd = process.env.NEXT_PUBLIC_SSL_STORE_PASSWD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const is_live = process.env.NEXT_PUBLIC_SSL_IS_LIVE === "true";

    if (!store_id || !store_passwd || !baseUrl) {
      console.error("Missing SSLCommerz Credentials in .env.local");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    // রিচার্জের জন্য ইউনিক ট্রানজেকশন আইডি
    const tran_id = `PWY_RCH_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const payload = {
      store_id: store_id,
      store_passwd: store_passwd,
      total_amount: amount.toString(),
      currency: "BDT",
      tran_id: tran_id,
      success_url: `${baseUrl}/api/recharge/success`,
      fail_url: `${baseUrl}/api/recharge/fail`,
      cancel_url: `${baseUrl}/api/recharge/cancel`,
      ipn_url: `${baseUrl}/api/recharge/ipn`,
      shipping_method: "No",
      product_name: `Presswayy Recharge - ${plan_choice}`,
      product_category: "Recharge",
      product_profile: "general",
      cus_name: "Presswayy Client",
      cus_email: "client@presswayy.com",
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01700000000",
      // value_a তে client_id রেখে দিচ্ছি, যাতে পেমেন্ট সাকসেস হলে আপনি বুঝতে পারেন কার রিচার্জ হলো
      value_a: client_id,
      value_b: plan_choice,
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
      // ফ্রন্টএন্ড কোডের সাথে ম্যাচ করার জন্য 'redirect' ব্যবহার করা হয়েছে
      return NextResponse.json({
        success: true,
        redirect: apiResponse.GatewayPageURL,
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
