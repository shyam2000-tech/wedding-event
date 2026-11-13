export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  category: string;
  enquiryMessage: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: 'calendar' | 'sparkles' | 'gem' | 'heart';
}
