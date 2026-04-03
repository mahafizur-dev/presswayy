// types/index.ts
export interface PricingTierProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

export interface ProfileData {
  type: "profile";
  name: string;
  title: string;
  image: string;
}

export interface TestimonialData {
  type: "testimonial";
  text: string;
  logo: string;
  logoStyle: string;
}

export interface StatData {
  type: "stat";
  title: string;
  text: string;
  bgColor: string;
  dividerColor: string;
  textColor: string;
}

// Discriminated union for mixed array types
export type CardData = ProfileData | TestimonialData | StatData;

export interface SectionData {
  id: string;
  cards: CardData[];
}

// Omit the 'type' literal for the actual component props
export type ProfileCardProps = Omit<ProfileData, "type">;
export type TestimonialCardProps = Omit<TestimonialData, "type">;
export type StatCardProps = Omit<StatData, "type">;