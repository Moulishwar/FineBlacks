import Button from "./Button";
import { companyInfo, stats } from "@/data/company";

export default function AboutTeaser() {
  return (
    <section className="px-4 sm:px-6 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label + description */}
          <div>
            <h2 className="text-sm font-semibold text-carbon mb-2">
              About FineBlacks
            </h2>
            <p className="mt-8 text-base md:text-lg text-gray-500 leading-relaxed">
              {companyInfo.aboutTeaserSub}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-medium text-carbon">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: large quote */}
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon leading-snug">
              Discover how FineBlacks transforms{" "}
              <span className="font-bold">end-of-life tires</span> into
              powerful,{" "}
              <span className="text-eco font-bold">eco-friendly</span> carbon
              pigments for a{" "}
              <span className="font-bold">sustainable future.</span>
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
              <span className="w-10 h-10 rounded-full bg-eco flex items-center justify-center text-white">
                <span aria-hidden="true" className="text-sm">↗</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
