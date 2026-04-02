import { type ReactNode } from "react";
import { ProductCategory } from "@/data/products";
import SectionHeader from "./SectionHeader";
import SpecTable from "./SpecTable";

interface ProductSectionProps {
  category: ProductCategory;
  index: number;
}

const featureIcons: Record<string, ReactNode> = {
  leaf: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
    </svg>
  ),
  recycle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  factory: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0v-3m-14 3H3m2 0v-3m4-12h4m-4 4h4m-4 4h4" />
    </svg>
  ),
  diamond: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l8 8-8 8-8-8 8-8z" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  certificate: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  droplets: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a8 8 0 008-8c0-3.5-3-7-8-11-5 4-8 7.5-8 11a8 8 0 008 8z" />
    </svg>
  ),
  flask: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v6l-4 8h14l-4-8V3M9 3h6" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

const themeAccent: Record<string, string> = {
  eco: "bg-eco text-white",
  carbon: "bg-carbon text-white",
  gray: "bg-gray-500 text-white",
};

const themeFeatureCard: Record<string, string> = {
  eco: "bg-gray-50 hover:bg-eco-subtle",
  carbon: "bg-gray-50 hover:bg-gray-100",
  gray: "bg-gray-50 hover:bg-gray-100",
};

/** Shared black cards; theme shows only in grade shadow + hover border (FBArrowIcon tones). */
const gradeCardBase =
  "bg-carbon-dark text-white shadow-lg shadow-black/35 border border-white/[0.08]";

const gradeCardHover: Record<ProductCategory["theme"], string> = {
  eco: "group-hover:border-eco/50",
  carbon: "group-hover:border-white/35",
  gray: "group-hover:border-gray-500/55",
};

const gradeWatermarkClass: Record<ProductCategory["theme"], string> = {
  eco: "text-eco/55",
  carbon: "text-gray-500/55",
  gray: "text-gray-500/55",
};

const gradeApplicationPillClass: Record<ProductCategory["theme"], string> = {
  eco: "border border-eco/50 bg-eco/15 text-eco",
  carbon: "border border-white/25 bg-white/[0.08] text-white/95",
  /** Same hue as grade shadow (gray-500/55); higher fill + border opacity so pills read on black. */
  gray: "border border-gray-500/70 bg-gray-500/40 text-gray-400",
};

export default function ProductSection({
  category,
  index,
}: ProductSectionProps) {
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";

  return (
    <section id={category.id} className={`${bgClass} scroll-mt-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <SectionHeader
          label={`0${index + 1}`}
          title={category.title}
          description={category.description}
        />

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {category.features.map((feature) => (
            <div
              key={feature.title}
              className={`${themeFeatureCard[category.theme]} p-8 rounded-card transition-all duration-500 group`}
            >
              <div
                className={`w-10 h-10 rounded-full ${themeAccent[category.theme]} flex items-center justify-center mb-4`}
              >
                {featureIcons[feature.icon] || (
                  <span className="text-sm">●</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-carbon mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product Grades */}
        <h3 className="text-xl md:text-2xl font-semibold text-carbon mb-8">
          Available Grades
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.grades.map((grade) => (
            <article
              key={grade.name}
              className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-card transition-all duration-500 hover:shadow-soft hover:scale-105 ${gradeCardBase} ${gradeCardHover[category.theme]}`}
            >
              <div className="relative shrink-0 overflow-hidden px-6 pt-6 pb-1">
                <div className="relative z-10 inline-block max-w-full">
                  <span
                    className={`pointer-events-none absolute left-0.5 top-0.5 text-2xl font-bold leading-tight tracking-tight sm:left-1 sm:top-1 sm:text-3xl ${gradeWatermarkClass[category.theme]}`}
                    aria-hidden
                  >
                    {grade.name}
                  </span>
                  <h4 className="relative text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                    {grade.name}
                  </h4>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col border-t border-white/10 px-6 pb-6 pt-5">
                <p className="text-sm leading-relaxed text-gray-300">
                  {grade.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {grade.applications.map((app) => (
                    <span
                      key={app}
                      className={`rounded-button border px-2.5 py-1 text-xs ${gradeApplicationPillClass[category.theme]}`}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Spec table for Virgin CB */}
        {category.specs && <SpecTable specs={category.specs} />}
      </div>
    </section>
  );
}
