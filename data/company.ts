export interface TimelineStep {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const companyInfo = {
  name: "FineBlacks International",
  tagline: "Redefining the Future with Sustainable Carbon.",
  heroSubheadline:
    "Leading the circular economy with premium Recycled and Virgin Carbon Black solutions.",
  aboutTeaser:
    "From tire pyrolysis to premium pigment power. We transform waste into resource.",
  aboutTeaserSub:
    "At FineBlacks International, we specialize in converting end-of-life tires into high-quality carbon black pigments, creating clean, sustainable material solutions for a brighter tomorrow.",
  email: "Info.fineblacks@gmail.com",
  phone: "+91 75388 63253",
  address: "No 33, Pasumai Thayagam Street, Podigai nager, Navarkulam, Puducherry, 605 008",
  /** Google Maps pin (decimal degrees) */
  mapLat: 11.961485495882329,
  mapLng: 79.80904005786721,
  proprietor: "Prithivirajan Subramaniyane",
  /** Shown on the contact page */
  officeHours: [
    "Mon–Fri: 9:00 AM – 6:00 PM IST",
    "Saturday: By appointment",
    "Sunday: By appointment",
  ],
  inquirySteps: [
    "We review your message within one business day.",
    "Our team may follow up for technical or volume details.",
    "You receive next steps or a tailored proposal.",
  ],
};

export const stats: StatItem[] = [
  { value: "500+", label: "Tonnes Produced Annually" },
  { value: "80%", label: "Lower CO₂ vs Virgin CB" },
  { value: "30+", label: "Countries Served" },
];

export const aboutSections = {
  history: {
    title: "Our Story",
    content:
      "FineBlacks International is built on a foundation of strategic alliances with Good Manufacturing Practice (GMP) certified suppliers. By partnering exclusively with facilities that meet the highest international quality standards and regulatory compliance, we ensure that every carbon black product we trade delivers uncompromising quality and reliability. Our commitment to excellence begins at the source, enabling us to provide sustainable carbon solutions that meet the most demanding industrial requirements while advancing the circular economy through responsible sourcing and distribution.",
  },
  sustainability: {
    title: "Sustainability Mission",
    content:
      "Sustainability isn't just part of our strategy — it is our strategy. Every tonne of Recycled Carbon Black we produce diverts end-of-life tires from landfills and incinerators, reducing greenhouse gas emissions by up to 80% compared to conventional production. We're not just making pigments; we're closing the carbon loop and building a cleaner industrial future.",
  },
  process: {
    title: "The FineBlacks Process",
    content:
      "Our proprietary pyrolysis technology heats end-of-life tires in an oxygen-free environment, breaking them down into their constituent materials. The recovered carbon is then refined, milled, and pelletized to produce high-quality carbon black that meets the most demanding industrial specifications.",
  },
};

export const timeline: TimelineStep[] = [
  {
    year: "Step 01",
    title: "Collection & Sorting",
    description:
      "End-of-life tires are collected from authorized recycling facilities and sorted by type and condition for optimal processing.",
    image: "/images/About/Storing.png",
  },
  {
    year: "Step 02",
    title: "Shredding & Preparation",
    description:
      "Tires are shredded into uniform chips and steel is magnetically separated, preparing the rubber for the pyrolysis reactor.",
    image: "/images/About/shredding.png",
  },
  {
    year: "Step 03",
    title: "Pyrolysis",
    description:
      "Rubber chips enter our proprietary pyrolysis reactors where they are thermally decomposed in an oxygen-free environment at controlled temperatures.",
    image: "/images/About/Pyro.png",
  },
  {
    year: "Step 04",
    title: "Refining & Milling",
    description:
      "Raw char is refined through multiple stages of milling and classification to achieve the desired particle size and surface area specifications.",
    image: "/images/About/Ref.png",
  },
  {
    year: "Step 05",
    title: "Quality Control & Packaging",
    description:
      "Every batch undergoes rigorous laboratory testing before being pelletized and packaged for shipment to customers worldwide.",
    image: "/images/About/Pack.png",
  },
];

export const footerLinks = {
  products: [
    { label: "Recycled Carbon Black", href: "/products#recycled-cb" },
    { label: "Virgin Carbon Black", href: "/products#virgin-cb" },
    { label: "Carbon Black Masterbatch", href: "/products#master-batch" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Contact", href: "/contact" },
  ],
};
