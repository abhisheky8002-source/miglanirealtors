import { Property, Service, AreaSpecialization, Testimonial } from "./types";

// Curated luxury properties in premium Gurgaon sectors
export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Regal Villa-Manor",
    location: "Malibu Town, Sector 47, Gurugram",
    locality: "Malibu Town",
    price: "₹8.75 Cr",
    numericPriceCr: 8.75,
    beds: 5,
    baths: 6,
    sizeSqFt: 5400,
    propertyType: "Premium Villa",
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Exclusive Listing",
    amenities: ["Private Swimming Pool", "Terrace Garden", "VRV Air-Conditioning", "Gated Security", "Staff Quarters", "Vaastu Compliant"],
    description: "An architectural masterpiece situated in Gurgaon's premium American-style gated township. This bespoke corner villa offers sweeping manicured gardens, automated smart home automation, high-ceiling lounges, Italian marble flooring throughout, and unparalleled safety within Malibu Town."
  },
  {
    id: "prop-2",
    title: "Zenith Signature Floor",
    location: "South City 1, Block M, Gurugram",
    locality: "South City",
    price: "₹4.60 Cr",
    numericPriceCr: 4.60,
    beds: 4,
    baths: 5,
    sizeSqFt: 3600,
    propertyType: "Luxury Builder Floor",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Stilt + 4 Floors",
    amenities: ["Private Elevator", "Modular Kitchen", "Large Balconies", "3 Car Parkings", "Dual Power Backup", "Dedicated Study"],
    description: "Ultra-luxury modern builder floor on a wide premium sector-road. Designed with high-performance German double-glazed windows, customized wardrobe fittings, bespoke light installations, and an air-conditioned family den. Experience low-density privacy with first-rate structural stability."
  },
  {
    id: "prop-3",
    title: "The Nirvana Estate Manor",
    location: "Aspen Greens, Nirvana Country, Gurugram",
    locality: "Nirvana Country",
    price: "₹12.50 Cr",
    numericPriceCr: 12.50,
    beds: 6,
    baths: 7,
    sizeSqFt: 6800,
    propertyType: "Premium Villa",
    mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Bespoke Collection",
    amenities: ["Home Gymnasium", "Solar Panel Array", "Barbecue Deck", "Clubhouse Access", "Double Height Vestibule", "4-Car Garage"],
    description: "Nestled within the high-class biosphere of Nirvana Country, this expansive villa exemplifies eco-conscious luxury. Features include a solar electrical grid setup, private elevator, fully automated luxury home salon room, expansive home theater lounge, and master bedrooms with modular walk-in wardrobes."
  },
  {
    id: "prop-4",
    title: "The Imperial Duplex Floor",
    location: "Sushant Lok 1, Golf Course Road Corridor, Gurugram",
    locality: "Sushant Lok",
    price: "₹6.15 Cr",
    numericPriceCr: 6.15,
    beds: 4,
    baths: 4,
    sizeSqFt: 4200,
    propertyType: "Luxury Builder Floor",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Brand New Construction",
    amenities: ["Private Lift Lobby", "Rooftop Terrace", "Premium Sanitaryware", "Chef's Pantry", "Gated Security Yard", "Electric Vehicle Charger"],
    description: "A gorgeous luxury builder floor featuring high-end architecture, bespoke natural oak wood doors, modular walk-in wardrobes, false ceiling coves, and ultra-wide sunlit terraces. Situated a brief walk from the premium commercial hub of Golf Course Road."
  },
  {
    id: "prop-5",
    title: "The Emerald Penthouse Block",
    location: "Malibu Town Gated Towers, Gurugram",
    locality: "Malibu Town",
    price: "₹7.25 Cr",
    numericPriceCr: 7.25,
    beds: 4,
    baths: 5,
    sizeSqFt: 4800,
    propertyType: "Exclusive Penthouse",
    mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Panoramas of Gurgaon",
    amenities: ["Rooftop Jacuzzi", "Wraparound Balcony", "Premium Kitchen Appliance", "Concierge Assist", "3 Covered Car Parks", "100% Power Backup"],
    description: "Commanding stellar skyline views overlooking the lush cover of Malibu Town, this penthouse offers an incredible private rooftop deck, an elegant indoor-outdoor fireplace lounge, and curated European kitchen amenities."
  },
  {
    id: "prop-6",
    title: "The South City Elite Duplex",
    location: "South City 2, Ivy Estates, Gurugram",
    locality: "South City",
    price: "₹5.40 Cr",
    numericPriceCr: 5.40,
    beds: 4,
    baths: 5,
    sizeSqFt: 3900,
    propertyType: "Bespoke Residence",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    highlightTag: "Park Facing Corner",
    amenities: ["Park view corner balcony", "Imported Onyx Marble", "Dedicated Gym Studio", "Premium VRF Class HVAC", "Modular Dry Kitchen", "State-of-art Fireplace"],
    description: "The epitome of modern aesthetic elegance, this premium corner-duplex residence presents a bespoke stone fireplace, imported backlit Onyx marble partitions, modular floor heating, and unmatched natural light facing a community park."
  }
];

// Premium Real Estate Services
export const SERVICES: Service[] = [
  {
    id: "srv-buy",
    title: "Luxury Home Buying",
    description: "Helping clients discover and purchase exclusive, high-value primary residences.",
    longDesc: "We provide comprehensive buyers' advisory to match your lifestyle and family goals with top-tier Gurgaon locations like South City, Malibu Town, and Golf Course Road. Benefit from private client access to unlisted properties, off-market builder floors, and premium luxury villas with clean digital titles.",
    iconName: "Home"
  },
  {
    id: "srv-sell",
    title: "Luxury Property Selling",
    description: "Professional guidance and high-converting marketing representation for premium properties.",
    longDesc: "Listing a million-dollar property requires bespoke positioning. Miglani Realtors provides professional staging consulting, high-impact cinema tours, high-definition digital promotion, and exposure to verified high-net-worth investors (HNIs) for successful sales transactions.",
    iconName: "Key"
  },
  {
    id: "srv-portfolio",
    title: "Portfolio Management",
    description: "Strategic real estate asset planning to ensure recurring yields and massive capital growth.",
    longDesc: "Whether managing a single trophy asset or a custom collection of multiple builder floors and commercial shops, we design optimized exit plans, leasing frameworks, and yield models focused on maximised ROIs in the Gurugram economic corridor.",
    iconName: "Briefcase"
  },
  {
    id: "srv-builder-floors",
    title: "Premium Builder Floors & Villas",
    description: "Curating low-density residential spaces with extreme privacy and outstanding structural specifications.",
    longDesc: "Enjoy the luxury of standalone residential floors, individual elevator foyers, multiple parking bays, and private terraces. We screen builders for stellar grade history, construction material quality, and architectural standards.",
    iconName: "Layers"
  },
  {
    id: "srv-advisory",
    title: "Investment Advisory",
    description: "Data-backed advisory pointing you toward undervalued premium pockets with rapid growth.",
    longDesc: "We analyze regulatory progress, commercial growth, infrastructural projects (like the Southern Peripheral Road extensions and Golf Course Extension Road), and masterplan layouts to secure low-risk capital placements.",
    iconName: "TrendingUp"
  },
  {
    id: "srv-expertise",
    title: "Gurgaon Area Expertise",
    description: "Hyper-localized market intelligence across Gurugram’s most coveted gated townships.",
    longDesc: "Deep structural relationships with resident associations, municipal authorities, and community networks within South City, Malibu Town, Sushant Lok, and Nirvana Country. We provide accurate pricing benchmarks to prevent overpaying.",
    iconName: "MapPin"
  }
];

// Gurgaon Area Specializations
export const AREAS: AreaSpecialization[] = [
  {
    id: "area-malibu",
    name: "Malibu Town",
    description: "An American-style luxury gated township on Sohna Road, known for multi-layered security, green spaces, and high-status independent villas.",
    highlight: "Amit Lather's base location",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
    tags: ["American Masterplan", "Gated Township", "Lush Eco-Parks", "Top-tier Security"]
  },
  {
    id: "area-southcity",
    name: "South City",
    description: "A premium and incredibly central neighborhood split into South City 1 and 2, showcasing some of Gurgaon's finest designer builder floors and low-rise elite duplex homes.",
    highlight: "Premium low-density living",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    tags: ["Central Hub", "Elite Schools Vicinity", "Luxury Builder Floors", "Wide Sector Roads"]
  },
  {
    id: "area-nirvana",
    name: "Nirvana Country",
    description: "A world-class eco-conscious residential estate with sprawling leafy avenues, customized clubhouses, state-of-the-art tennis academies, and massive private mansions.",
    highlight: "Prestige address segment",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000",
    tags: ["Eco-friendly Biosphere", "Superb Clubs", "Prestige Villa Neighborhood", "Secure Gated Living"]
  },
  {
    id: "area-sushantlok",
    name: "Sushant Lok",
    description: "Spanned across sectors 43, 55, and 56 near Golf Course Road. Combines premium metropolitan ease with massive quiet lanes perfect for luxury multi-story developer units.",
    highlight: "Vibrant Golf Road Connectivity",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000",
    tags: ["Metro Connectivity", "Golf Course Access", "Spacious Duplexes", "High Appreciation"]
  }
];

// Rich Premium Local Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajiv Malhotra",
    role: "Managing Director, Global FinTech",
    location: "Malibu Town, Gurugram",
    feedback: "Amit Lather is the absolute master of the Malibu Town housing market. His advisory on villa structural verification, legal clearances, and pricing benchmark was remarkably precise. We ended up buying our dream villa and could not be happier. Extremely professional and highly trustworthy!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "test-2",
    name: "Simran Ahluwalia",
    role: "Venture Capital Partner",
    location: "South City 1, Gurugram",
    feedback: "As HNIs investment professionals, we demand data-rooted answers. Amit provided detailed appreciation charts, builder history scores, and local municipal plans before presenting South City properties. He managed our luxury builder floor portfolio with top-tier yield setups. Exceptional service!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "test-3",
    name: "Dr. Vikram Sethi",
    role: "Senior Consultant Cardiologist",
    location: "Nirvana Country, Gurugram",
    feedback: "Miglani Realtors operates with transparency that is exceedingly rare in Gurgaon's real estate market. Amit answered all our difficult queries about sewage systems, title verification, and terrace allocation for our Nirvana Country home with absolute stellar clarity. His focus is on long-term trust.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  }
];
