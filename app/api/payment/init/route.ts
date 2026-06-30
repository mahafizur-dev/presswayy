import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, client_id, name, phone } = body;

    if (!plan || !client_id) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (plan, client_id)" },
        { status: 400 },
      );
    }

    let amount = 0;
    if (plan === "monthly") {
      amount = 3000;
    } else if (plan === "yearly") {
      amount = 29500;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid plan selected" },
        { status: 400 },
      );
    }

    // Updated to match your .env file
    const store_id = process.env.SSL_STORE_ID;
    const store_passwd = process.env.SSL_STORE_PASSWD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const n8nApiUrl = process.env.API_URL;

    // Updated to match your .env file
    const is_live = process.env.SSL_IS_LIVE === "true";

    if (!store_id || !store_passwd || !baseUrl || !n8nApiUrl) {
      console.error("Missing SSLCommerz Credentials in .env.local");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    // Fallbacks: use whatever the client sent in body first,
    // then overwrite with fetched info if available
    let cusName = name || "Presswayy Client";
    let cusEmail = "client@presswayy.com";
    let cusPhone = phone || "01700000000";

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

        console.log("✅ Client data fetched successfully:", clientData);
      } else {
        console.warn("⚠️ Client info fetch failed, using fallback data.");
      }
    } catch (infoError) {
      console.error(
        "❌ Error fetching client info, using fallback data.",
        infoError,
      );
    }

    if (!cusPhone) {
      return NextResponse.json(
        { success: false, error: "Phone number missing for this client" },
        { status: 400 },
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
      cus_name: cusName,
      cus_email: cusEmail,
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: cusPhone,
      cus_fax: cusPhone,
      ship_name: cusName,
      ship_add1: "Dhaka",
      ship_city: "Dhaka",
      ship_postcode: "1000",
      ship_country: "Bangladesh",
      value_a: client_id,
    };

    const data = new URLSearchParams(payload as Record<string, string>);

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
