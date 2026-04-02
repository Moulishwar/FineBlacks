import Link from "next/link";

interface HeroCardProps {
  title: string;
  description: string;
  href: string;
  accent: "eco" | "carbon" | "gray";
  image: string;
}

export default function HeroCard({
  title,
  description,
  href,
  accent,
  image,
}: HeroCardProps) {
  const accentColors = {
    eco: "bg-eco",
    carbon: "bg-carbon",
    gray: "bg-gray-500",
  };

  return (
    <Link
      href={href}
      className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-card p-4 lg:p-5 hover:bg-white/20 transition-all duration-500 group"
    >
      {/* IMAGE PLACEHOLDER */}
      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm lg:text-base font-semibold text-white">
            {title}
          </h3>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-eco group-hover:text-white transition-colors duration-300 flex-shrink-0">
            <span aria-hidden="true" className="text-xs">↗</span>
          </span>
        </div>
        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
