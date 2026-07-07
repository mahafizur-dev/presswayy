import { NextResponse } from "next/server";

// ── One-time onboarding fee (must match the frontend) ──
const ONBOARDING_FEE = 3000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      client_id,
      name,
      contact_person,
      contact_person_number,
      business_type,
      business_email,
      page_link,
    } = body;

    // ── Validate required fields (page_link is optional) ──
    const missing: string[] = [];
    if (!client_id) missing.push("client_id");
    if (!name) missing.push("name");
    if (!contact_person) missing.push("contact_person");
    if (!contact_person_number) missing.push("contact_person_number");
    if (!business_type) missing.push("business_type");
    if (!business_email) missing.push("business_email");

    if (missing.length) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const amount = ONBOARDING_FEE;

    const store_id = process.env.NEXT_PUBLIC_SSL_STORE_ID;
    const store_passwd = process.env.NEXT_PUBLIC_SSL_STORE_PASSWD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const is_live = process.env.NEXT_PUBLIC_SSL_IS_LIVE === "true";

    if (!store_id || !store_passwd || !baseUrl) {
      console.error("Missing Environment Variables");
      return NextResponse.json(
        { success: false, error: "Server configuration missing" },
        { status: 500 },
      );
    }

    const tran_id = `PWY_ONB_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const payload = {
      store_id: store_id,
      store_passwd: store_passwd,
      total_amount: amount.toString(),
      currency: "BDT",
      tran_id: tran_id,
      success_url: `${baseUrl}/api/onboarding/success`,
      fail_url: `${baseUrl}/api/onboarding/fail`,
      cancel_url: `${baseUrl}/api/onboarding/cancel`,
      ipn_url: `${baseUrl}/api/onboarding/ipn`,
      shipping_method: "No",
      product_name: "Presswayy Onboarding Fee",
      product_category: "Onboarding",
      product_profile: "general",
      // Customer details come straight from the onboarding form
      cus_name: contact_person,
      cus_email: business_email,
      cus_phone: contact_person_number,
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      value_a: client_id,
      value_b: "onboarding",
      value_c: page_link || "",
      // Extra company fields that SSLCommerz doesn't carry natively
      value_d: JSON.stringify({ name, business_type }),
    };

    const data = new URLSearchParams(payload as Record<string, string>);

    const sslUrl = is_live
      ? "https://securepay.sslcommerz.com/gwprocess/v4/api.php"
      : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

    // SSLCommerz-এ রিকোয়েস্ট পাঠানো
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
    console.error("Onboarding API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
