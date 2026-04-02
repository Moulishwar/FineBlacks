export interface ProductGrade {
  name: string;
  description: string;
  applications: string[];
  image: string;
}

export interface ProductSpec {
  property: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  theme: "eco" | "carbon" | "gray";
  features: ProductFeature[];
  grades: ProductGrade[];
  specs?: ProductSpec[];
}

export const heroTags = ["Carbon Black", "Recycling", "Sustainability"];

export const productCategories: ProductCategory[] = [
  {
    id: "recycled-cb",
    title: "Recycled Carbon Black",
    shortTitle: "Recycled CB",
    subtitle: "Circular Economy Champion",
    description:
      "Our Recycled Carbon Black is derived from end-of-life tires through advanced pyrolysis technology. It delivers excellent performance while significantly reducing your carbon footprint compared to virgin alternatives.",
    theme: "eco",
    features: [
      {
        title: "Low Footprint",
        description:
          "Up to 80% lower CO₂ emissions compared to conventional carbon black production.",
        icon: "leaf",
      },
      {
        title: "Circular Economy",
        description:
          "Fully compliant with circular economy standards and waste-to-resource initiatives.",
        icon: "recycle",
      },
      {
        title: "Pyrolysis Origin",
        description:
          "Sourced from advanced tire pyrolysis processes ensuring consistent quality.",
        icon: "factory",
      },
    ],
    grades: [
      {
        name: "R220",
        description:
          "High Abrasion Furnace grade recycled carbon black delivering exceptional wear resistance and reinforcement for tire tread and high-performance rubber applications.",
        applications: [
          "High-wear rubber goods",
          "Conveyor belts",
          "Automotive parts"
        ],
        image:
          "https://placehold.co/600x400/111/10B981?text=R220+Grade",
      },
      {
        name: "R330",
        description:
          "High Abrasion Furnace grade recycled carbon black providing excellent reinforcement and processing characteristics for general-purpose rubber and tire applications.",
        applications: [
          "General rubber goods",
          "Hoses and tubes",
          "Footwear"
        ],
        image:
          "https://placehold.co/600x400/111/10B981?text=R330+Grade",
      },
      {
        name: "R430",
        description:
          "Fast Extrusion Furnace grade recycled carbon black optimized for extrusion processes and applications requiring smooth processing and good surface finish.",
        applications: [
          "Extruded profiles",
          "Wire and cable",
          "Hose manufacturing"
        ],
        image:
          "https://placehold.co/600x400/111/10B981?text=R430+Grade",
      },
    ],
  },
  {
    id: "virgin-cb",
    title: "Virgin Carbon Black",
    shortTitle: "Virgin CB",
    subtitle: "Purity & Performance",
    description:
      "Our Virgin Carbon Black portfolio offers the highest purity grades manufactured to exacting industrial standards. Designed for applications where uncompromising quality and consistency are paramount.",
    theme: "carbon",
    features: [
      {
        title: "High Purity",
        description:
          "Ultra-refined carbon black with minimal ash content and maximum tinting strength.",
        icon: "diamond",
      },
      {
        title: "Specific Grades",
        description:
          "Tailored particle sizes and surface areas to meet precise application requirements.",
        icon: "settings",
      },
      {
        title: "Industrial Standard",
        description:
          "Certified to international quality standards including ISO and ASTM specifications.",
        icon: "certificate",
      },
    ],
    grades: [
      {
        name: "N110",
        description:
          "Very high reinforcement with maximum abrasion resistance and tensile strength — ideal for demanding rubber applications.",
        applications: ["Tires", "Off-road tire tread"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N110+Grade",
      },
      {
        name: "N220",
        description:
          "High abrasion resistance and balanced strength with moderate processability; a widely used reinforcing grade.",
        applications: ["Belts", "Truck & car tire tread"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N220+Grade",
      },
      {
        name: "N330",
        description:
          "Medium reinforcement and good dispersion offering balanced strength, wear resistance, and flexibility.",
        applications: ["Molded components", "Passenger car tire tread"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N330+Grade",
      },
      {
        name: "N440",
        description:
          "Moderate tensile strength and flexibility, suitable where a balance between durability and pliability is needed.",
        applications: ["Extrusions", "Rubber extrusions (e.g., profiles)"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N440+Grade",
      },
      {
        name: "N550",
        description:
          "Lower surface area, good dispersion, and moderate reinforcement with smoother processing properties.",
        applications: ["Hoses", "Inner liners"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N550+Grade",
      },
      {
        name: "N660",
        description:
          "Lower reinforcement with easy processing and good elasticity for general rubber goods.",
        applications: ["Tubing", "Inner tubes"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N660+Grade",
      },
      {
        name: "N750",
        description:
          "Semi-reinforcing grade with relatively low surface area and moderate reinforcement, offering flexible properties similar to N770.",
        applications: ["Belts", "General rubber products"],
        image:
          "https://placehold.co/600x400/111/FFF?text=N750+Grade",
      },
    ],
  },
  {
    id: "master-batch",
    title: "Carbon Black Masterbatch",
    shortTitle: "Masterbatch",
    subtitle: "Application Excellence",
    description:
      "Our Carbon Black Masterbatch products provide superior dispersion and processing convenience. Pre-dispersed in carrier resins, they eliminate handling issues and ensure consistent coloring in your plastic applications.",
    theme: "gray",
    features: [
      {
        title: "High Dispersion",
        description:
          "Pre-dispersed formulations ensure uniform color distribution without agglomerates.",
        icon: "droplets",
      },
      {
        title: "Custom Formulation",
        description:
          "Bespoke concentrations and carrier resin options to match your exact processing needs.",
        icon: "flask",
      },
      {
        title: "Plastic Filler Specialist",
        description:
          "Optimized for injection molding, blow molding, and film extrusion applications.",
        icon: "layers",
      },
    ],
    grades: [
      {
        name: "LDPE Carbon Black Masterbatch",
        description:
          "A pelletized concentrate of carbon black dispersed in an LDPE carrier, used to impart deep black colour, UV protection, and uniform dispersion in plastics.",
        applications: [
          "Film",
          "Garbage bag film"
        ],
        image:
          "https://placehold.co/600x400/2A2A2A/FFF?text=LDPE+Masterbatch",
      },
      {
        name: "PP Carbon Black Masterbatch",
        description:
          "Carbon black masterbatch formulated with a polypropylene-compatible carrier to colour PP resins and enhance UV stability and mechanical performance.",
        applications: [
          "Containers",
          "Automotive trims"
        ],
        image:
          "https://placehold.co/600x400/2A2A2A/FFF?text=PP+Masterbatch",
      },
      {
        name: "Conductive Carbon Black Masterbatch",
        description:
          "A specialised masterbatch using conductive carbon black grades that enables electrical conductivity or static dissipation in otherwise insulating plastics.",
        applications: [
          "ESD",
          "Antistatic packaging"
        ],
        image:
          "https://placehold.co/600x400/2A2A2A/FFF?text=Conductive+Masterbatch",
      },
    ],
  },
];

export const productInterestOptions = [
  "Recycled Carbon Black",
  "Virgin Carbon Black",
  "Carbon Black Masterbatch",
];
