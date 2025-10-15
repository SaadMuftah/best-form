
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Coach {
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
