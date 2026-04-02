import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import { aboutSections, timeline, stats, companyInfo } from "@/data/company";

export default function AboutPage() {
  return (
    <>
      {/* Hero / intro */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="About Us"
            title="FineBlacks International"
            align="center"
          />

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon leading-snug">
              From tire pyrolysis to{" "}
              <span className="text-eco font-bold">premium pigment power</span>
              . We transform{" "}
              <span className="font-bold">waste into resource.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Company history */}
      <section className="bg-gray-50 px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                label="01"
                title={aboutSections.history.title}
              />
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {aboutSections.history.content}
              </p>
            </div>
            <div className="rounded-card overflow-hidden bg-neutral-950 h-full min-h-[320px]">
              <img
                src="/images/About/OS.png"
                alt="FineBlacks global reach and partnerships"
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1 rounded-card overflow-hidden bg-neutral-950 h-full min-h-[320px]">
              <img
                src="/images/About/SM.png"
                alt="FineBlacks sustainability mission emblem"
                className="block h-full w-full object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                label="02"
                title={aboutSections.sustainability.title}
              />
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {aboutSections.sustainability.content}
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* The FineBlacks Process - Timeline */}
      <section className="bg-gray-50 px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="03"
            title={aboutSections.process.title}
            description={aboutSections.process.content}
            align="center"
          />

          <Timeline steps={timeline} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
            Discover how FineBlacks International can supply the sustainable
            carbon solutions your business needs.
          </p>
          <Button href="/contact">
            Contact Us <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </section>
    </>
  );
}
