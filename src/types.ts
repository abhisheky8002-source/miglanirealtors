export interface Property {
  id: string;
  title: string;
  location: string;
  locality: "South City" | "Malibu Town" | "Sushant Lok" | "Nirvana Country" | "Golf Course Road" | string;
  price: string;
  numericPriceCr: number; // For clean filtering if needed
  beds: number;
  baths: number;
  sizeSqFt: number;
  propertyType: "Premium Villa" | "Luxury Builder Floor" | "Exclusive Penthouse" | "Bespoke Residence" | string;
  mainImage: string;
  highlightTag: string;
  amenities: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDesc: string;
  iconName: string;
}

export interface AreaSpecialization {
  id: string;
  name: string;
  description: string;
  highlight: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  feedback: string;
  rating: number;
  image: string;
}
