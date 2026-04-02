import { companyInfo } from "@/data/company";
import { heroTags } from "@/data/products";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 pt-28 pb-8">
      <div className="relative max-w-7xl mx-auto rounded-hero overflow-hidden min-h-hero lg:min-h-hero-lg flex flex-col">
        <img
          src="/images/Hero/Hero.png"
          alt="FineBlacks recycled carbon black — tire in carbon black"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-10 lg:p-14">
          {/* Top tags */}
          <div className="flex flex-wrap gap-2 mb-auto">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-xs sm:text-sm text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-button"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <div className="mt-auto max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight">
              {companyInfo.tagline}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              {companyInfo.heroSubheadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
