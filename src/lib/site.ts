import {
  Briefcase,
  Globe2,
  MonitorSmartphone,
  Palette,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Central company info: everything on the site (header, footer, contact page,
 * metadata, structured data) reads from here.
 */

// No domain yet: set NEXT_PUBLIC_SITE_URL once one is bought. On Vercel the
// production URL is picked up automatically until then.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Branding Korner Global Consult Limited",
  shortName: "Branding Korner",
  tagline: "Your brand, business and ambitions, ready for the world.",
  description:
    "Branding Korner Global Consult Limited is a Lagos-based consultancy for branding, digital marketing, global documentation, business advisory, web solutions, recruitment and international trade support.",
  url: siteUrl.replace(/\/$/, ""),
  rcNumber: "9589873",
  incorporated: "4 June 2026",
  city: "Lagos, Nigeria",
  email: "brandingkorner@gmail.com",
  phone: "+234 806 240 6168",
  whatsapp: "2348062406168", // international format, digits only
  hours: "Mon – Sat · 8:00 – 18:00 WAT",
  // Add profile URLs here; empty ones are hidden from the footer.
  socials: {
    instagram: "",
    linkedin: "",
    x: "",
    facebook: "",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  items: string[];
  /** Short label and hashtags for overview cards */
  category: string;
  tags: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

export const images = {
  hero: img("1531482615713-2afd69097998"),
  about: img("1551836022-d5d88e9218df"),
  travel: img("1530521954074-e64f6810b32d"),
  wing: img("1436491865332-7a61a109cc05"),
  docs: img("1454165804606-c3d57bc86b40"),
  team: img("1600880292203-757bb62b4baf"),
};

export const services: Service[] = [
  {
    slug: "branding-marketing",
    category: "Creative",
    tags: ["Identity", "Video", "Social"],
    title: "Branding & Digital Marketing",
    short: "Identities, campaigns and content that travel well across markets.",
    description:
      "We build brands that look credible in Lagos, London or Toronto: from logo and identity systems to video content, social campaigns and corporate image making.",
    icon: Palette,
    image: img("1611095973763-414019e72400"),
    items: [
      "Brand identity & logo design",
      "Graphics design & print collateral",
      "Video marketing & content production",
      "Social media & digital marketing",
      "Corporate & personal branding",
      "Corporate gift items & event branding",
    ],
  },
  {
    slug: "global-documentation",
    category: "Global",
    tags: ["CV", "SOP", "References"],
    title: "Global Documentation Support",
    short: "Study, work and travel documents prepared to international standards.",
    description:
      "Professionally written, properly formatted documents for applications abroad, with guidance on what embassies, universities and employers expect to see.",
    icon: Globe2,
    image: img("1530521954074-e64f6810b32d"),
    items: [
      "CVs & résumés (international formats)",
      "Statements of Purpose (SOP)",
      "Reference & recommendation letters",
      "Investment certificate support",
      "Proof-of-funds documentation guidance & verification support",
      "Application document review",
    ],
  },
  {
    slug: "business-consultancy",
    category: "Advisory",
    tags: ["Strategy", "E-invoice", "Finance"],
    title: "Business Consultancy & E-Invoicing",
    short: "Advisory, financial documentation and compliance support.",
    description:
      "Practical guidance for founders, SMEs and organisations on business development, administration and financial documentation, including e-invoice setup and facilitation.",
    icon: Briefcase,
    image: img("1454165804606-c3d57bc86b40"),
    items: [
      "Business development advisory",
      "Financial documentation support",
      "E-invoice documentation & facilitation",
      "Business representation & liaison",
      "Project facilitation",
      "Feasibility studies",
    ],
  },
  {
    slug: "web-tech",
    category: "Digital",
    tags: ["Websites", "E-commerce", "IT"],
    title: "Web Design & Tech Solutions",
    short: "Websites, e-commerce, hosting and dependable IT support.",
    description:
      "Fast, modern websites and online stores, plus the hardware, repairs and connectivity your team needs to keep running.",
    icon: MonitorSmartphone,
    image: img("1488590528505-98d2b5aba04b"),
    items: [
      "Website design & development",
      "E-commerce stores",
      "Domain & web hosting",
      "Computer & laptop sales",
      "Hardware/software repairs & data recovery",
      "Wireless & network setup",
    ],
  },
  {
    slug: "recruitment-training",
    category: "People",
    tags: ["Hiring", "Training", "HR"],
    title: "Recruitment & Training",
    short: "Talent sourcing and capacity building, in Nigeria and abroad.",
    description:
      "We recruit, train and equip people for organisations within and outside Nigeria, and run training programmes for individuals, companies and public institutions.",
    icon: Users,
    image: img("1542744173-8e7e53415bb0"),
    items: [
      "Recruitment & talent sourcing",
      "Corporate training programmes",
      "Outsourcing & HR support",
      "Facility & janitorial services",
      "Management consulting",
      "Organisational advisory",
    ],
  },
  {
    slug: "trade-procurement",
    category: "Trade",
    tags: ["Import", "Export", "Sourcing"],
    title: "Trade, Procurement & Logistics",
    short: "Import, export, sourcing and supplies, coordinated end to end.",
    description:
      "From office equipment to general merchandise, we source, procure and coordinate delivery, connecting you with suppliers at home and abroad.",
    icon: Truck,
    image: img("1556761175-5973dc0f32e7"),
    items: [
      "Import & export facilitation",
      "Procurement & sourcing",
      "Logistics coordination",
      "Office equipment & furniture supply",
      "General contracts & supplies",
      "Event management",
    ],
  },
];

export const greetings = [
  "Hello",
  "Ẹ n lẹ",
  "Bonjour",
  "Sannu",
  "Hola",
  "Ndewo",
  "Hallo",
  "Jambo",
  "Olá",
  "Ciao",
  "مرحبا",
  "你好",
  "Namaste",
  "こんにちは",
  "Привет",
  "Merhaba",
  "Akwaaba",
];

export const cities = [
  { city: "Lagos", tz: "Africa/Lagos", home: true },
  { city: "London", tz: "Europe/London" },
  { city: "New York", tz: "America/New_York" },
  { city: "Toronto", tz: "America/Toronto" },
  { city: "Dubai", tz: "Asia/Dubai" },
  { city: "Sydney", tz: "Australia/Sydney" },
];

export const regions = [
  "West Africa",
  "United Kingdom & Europe",
  "United States",
  "Canada",
  "Middle East",
  "Asia & Oceania",
];
