import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { client_id, amount } = body;

    if (!client_id || !amount) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (client_id, amount)",
        },
        { status: 400 },
      );
    }

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
      product_name: "Presswayy Wallet Recharge", // ফিক্সড নাম দিয়ে দিলাম
      product_category: "Recharge",
      product_profile: "general",
      cus_name: "Presswayy Client",
      cus_email: "client@presswayy.com",
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01700000000",
      value_a: client_id, // শুধু client_id টাই রাখলাম
    };

    const data = new URLSearchParams(payload);
    const apiUrl = is_live
      ? "https://securepay.sslcommerz.com/gwprocess/v4/api.php"
      : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });

    const apiResponse = await response.json();

    if (apiResponse?.status === "SUCCESS" && apiResponse?.GatewayPageURL) {
      return NextResponse.json({
        success: true,
        redirect: apiResponse.GatewayPageURL,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: apiResponse.failedreason || "Payment init failed",
        },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
