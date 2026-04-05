export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const WEBHOOK_ENDPOINT = `${API_BASE_URL}/subscription-form`;

export const FORM_OPTIONS = {
  BUSINESS_TYPES: [
    "E-commerce",
    "F-commerce",
    "Service Based",
    "Restaurants",
    "Others",
    "Test",
  ],
  SUBSCRIPTIONS: ["TRIAL", "PAYG", "Custom"],
  SALES_CHANNELS: ["Social Media", "Direct", "Referral"],
  ACCOUNT_MANAGERS: ["Ruman Sarder", "Rayhan Islam"],
  SALES_PERSONS: [
    "Raihan Islam",
    "Ruman Sarder",
    "Bilkis Khatun",
    "Sadia Afroz",
    "Jannatul Nuria Mohona",
  ],
  INTEGRATORS: [
    "Ruman Sarder",
    "Atikur Rahman",
    "Jerin Mukta",
    "Sabikun Nahar",
    "Md Sakib Hasan Rabbi",
    "Hamim Kazi",
    "Md Mahafizur Rahman",
  ],
};
