import Link from "next/link";
import Image from "next/image";
import FBArrowIcon from "./FBArrowIcon";

interface ProductShowcaseItem {
  title: string;
  description: string;
  href: string;
  image: string;
  accent: "eco" | "carbon" | "gray";
  /** Visual scale inside the logo box (1 = default). VCB: larger to match CMB. RCB: slightly smaller as a soft mitigation for a tight bottom crop until the PNG is re-exported with padding. */
  logoScale?: number;
}

const products: ProductShowcaseItem[] = [
  {
    title: "Recycled Carbon Black",
    description:
      "Eco-friendly carbon black derived from tire pyrolysis for sustainable manufacturing and circular economy compliance.",
    href: "/products#recycled-cb",
    image: "/images/RCB.png",
    accent: "eco",
    logoScale: 0.94,
  },
  {
    title: "Virgin Carbon Black",
    description:
      "Ultra-pure carbon black grades manufactured to exacting industrial standards for uncompromising performance.",
    href: "/products#virgin-cb",
    image: "/images/VCB.png",
    accent: "carbon",
    logoScale: 1.24,
  },
  {
    title: "Master Batch",
    description:
      "Pre-dispersed carbon black formulations in carrier resins for plastics, fillers, and specialty applications.",
    href: "/products#master-batch",
    image: "/images/CMB.png",
    accent: "gray",
  },
];

const cardBg: Record<string, string> = {
  eco: "bg-eco-subtle",
  carbon: "bg-carbon text-white",
  gray: "bg-gray-200",
};

const cardBorder: Record<string, string> = {
  eco: "border-eco/20 group-hover:border-eco",
  carbon: "border-carbon-light group-hover:border-white/30",
  gray: "border-gray-300 group-hover:border-gray-400",
};

const titleColor: Record<string, string> = {
  eco: "text-carbon",
  carbon: "text-white",
  gray: "text-carbon",
};

const descColor: Record<string, string> = {
  eco: "text-gray-600",
  carbon: "text-gray-300",
  gray: "text-gray-500",
};


export default function ProductShowcase() {
  return (
    <section className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto">
          <span className="inline-block text-sm text-gray-500 mb-3 tracking-wide">
            [ Our Products ]
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon leading-snug">
            <span className="text-eco font-bold">Sustainable</span> <span className="font-bold">Carbon Solutions</span> 
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
            From recycled pigments to high-purity industrial grades — discover the carbon black products powering a greener tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className={`group relative rounded-card p-8 lg:p-10 border-2 hover:shadow-soft hover:scale-105 transition-all duration-500 flex flex-col items-center text-center ${cardBg[product.accent]} ${cardBorder[product.accent]}`}
            >
              {/* Product logo */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 relative mb-6 flex-shrink-0 overflow-visible">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 639px) 112px, (max-width: 1023px) 128px, 144px"
                  className="object-contain origin-center"
                  style={{
                    transform: `scale(${product.logoScale ?? 1})`,
                    transformOrigin: "center",
                  }}
                />
              </div>

              {/* Content */}
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${titleColor[product.accent]}`}>
                {product.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${descColor[product.accent]}`}>
                {product.description}
              </p>

              {/* Animated FB → Arrow icon */}
              <FBArrowIcon accent={product.accent} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
