// lib/data.ts

export const INITIAL_STEPS = [
  {
    key: "payment",
    label: "Payment",
    desc: "Subscription payment confirmed & activated",
    time: "Action required",
    detail:
      "Choose your plan below and complete payment via SSLCommerz to activate your account.",
    status: "active",
  },
  {
    key: "meeting",
    label: "Initial Meeting",
    desc: "Discovery call — understanding your business & needs",
    time: "After payment",
    detail: "Your onboarding call will be scheduled once payment is confirmed.",
    status: "pending",
  },
  {
    key: "inventory",
    label: "Inventory",
    desc: "Audit of your tools, data sources & existing workflows",
    time: "Estimated: Apr 4–7, 2026",
    detail:
      "After the initial meeting, our team will conduct a full audit of your tech stack and business workflows.",
    status: "pending",
  },
  {
    key: "setup",
    label: "Setup",
    desc: "Building and configuring your automation workflows",
    time: "Estimated: Apr 8–25, 2026",
    detail: "Complete automation setup per your requirements.",
    status: "pending",
  },
  {
    key: "testing",
    label: "Testing",
    desc: "QA, feedback round & final adjustments",
    time: "Estimated: Apr 26–May 5",
    detail: "Multi-phase testing across all automation channels.",
    status: "pending",
  },
  {
    key: "live",
    label: "🎉 LIVE",
    desc: "Your AI automation is fully operational!",
    time: "Estimated: May 10, 2026",
    detail:
      "Full launch with handover session and 30 days of Presswayy support.",
    status: "upcoming",
  },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const TIMES = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];
