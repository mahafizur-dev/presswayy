import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { client_id, amount } = body;

    if (!client_id || !amount) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: client_id or amount",
        },
        { status: 400 },
      );
    }

    const store_id = process.env.NEXT_PUBLIC_SSL_STORE_ID;
    const store_passwd = process.env.NEXT_PUBLIC_SSL_STORE_PASSWD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const n8nApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const is_live = process.env.NEXT_PUBLIC_SSL_IS_LIVE === "true";

    if (!store_id || !store_passwd || !baseUrl || !n8nApiUrl) {
      console.error("Missing Environment Variables");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    let cusName = "Presswayy Client";
    let cusEmail = "client@presswayy.com";
    let cusPhone = "01700000000";

    try {
      const clientInfoUrl = `${n8nApiUrl}/get-client-info`;

      const infoResponse = await fetch(clientInfoUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: client_id }),
      });

      if (infoResponse.ok) {
        const clientData = await infoResponse.json();

        if (clientData.name) cusName = clientData.name;
        if (clientData.email) cusEmail = clientData.email;
        if (clientData.phone) cusPhone = clientData.phone;

        console.log(
          "✅ Client data fetched successfully :",
          clientData,
        );
      } else {
        console.warn("⚠️fallback data error.");
      }
    } catch (infoError) {
      console.error(
        "❌ Error fetching client info , using fallback data.",
        infoError,
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
      product_name: "Presswayy Wallet Recharge",
      product_category: "Recharge",
      product_profile: "general",
      cus_name: cusName,
      cus_email: cusEmail,
      cus_phone: cusPhone,
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      value_a: client_id,
    };

    const data = new URLSearchParams(payload as Record<string, string>);

    const sslUrl = is_live
      ? "https://securepay.sslcommerz.com/gwprocess/v4/api.php"
      : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

    // ৫. SSLCommerz-এ রিকোয়েস্ট পাঠানো
    const response = await fetch(sslUrl, {
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
      console.error("SSLCommerz Init Error:", apiResponse);
      return NextResponse.json(
        {
          success: false,
          error: apiResponse.failedreason || "Payment init failed",
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
