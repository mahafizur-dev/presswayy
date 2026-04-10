import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // SSLCommerz থেকে আসা ডেটা রিসিভ করা
    const tran_id = formData.get("tran_id");
    const amount = formData.get("amount");

    // আমরা init API তে value_a এবং value_b তে এই ডেটাগুলো পাঠিয়েছিলাম
    const client_id = formData.get("value_a");
    const plan_choice = formData.get("value_b");

    console.log("Payment Success for Client:", client_id, "Plan:", plan_choice);

    // ==========================================
    // 💡 এখানে আপনার ডাটাবেজ আপডেট করার লজিক বসাবেন
    // উদাহরণ: await db.user.updatePlan(client_id, plan_choice, amount)
    // ==========================================

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // পেমেন্ট সফল হওয়ার পর ইউজারকে ফ্রন্টএন্ডের যে পেজে পাঠাতে চান
    // বিঃদ্রঃ POST রিকোয়েস্ট থেকে ফ্রন্টএন্ডে রিডাইরেক্ট করতে '303' স্ট্যাটাস কোড ব্যবহার করতে হয়
    return NextResponse.redirect(
      `${baseUrl}/recharge-success?tran_id=${tran_id}&plan=${plan_choice}`,
      303,
    );
  } catch (error) {
    console.error("Success API Error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/recharge?payment=error`, 303);
  }
}
