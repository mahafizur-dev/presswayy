// টাইপ ডিফাইন করে দেওয়া হলো যাতে ভুল না হয়
export interface LinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: LinkItem[] = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/#resources" },
  { label: "Pricing", href: "/#pricing" }, // 👈 3 রিমুভ করা হয়েছে
];

export const COMPANY_LINKS: LinkItem[] = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/#resources" },
];

export const LEGAL_LINKS: LinkItem[] = [
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Privacy Policy", href: "/#privacy" },
  { label: "Terms & Conditions", href: "/#terms" },
];
