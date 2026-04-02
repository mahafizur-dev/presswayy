// lib/mail.ts
import nodemailer from "nodemailer";

interface LeadData {
  firstName: string;
  email: string;
  phone: string;
  address: string;
  businessName: string;
  plan: string;
  amount: number;
  orderMethod: string;
  courier: string;
  additionalNotes: string;
}

export async function sendLeadEmail(data: LeadData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Connection Request from ${data.businessName}`,
    text: `
      New Lead Details:
      -----------------
      Name: ${data.firstName}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}
      Business: ${data.businessName}
      Plan: ${data.plan}
      Amount: ${data.amount} BDT
      Order Method: ${data.orderMethod}
      Courier: ${data.courier}
      Notes: ${data.additionalNotes}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("Email sending failed:", err);
    return false;
  }
}
