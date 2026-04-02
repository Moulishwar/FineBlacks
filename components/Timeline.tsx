import { TimelineStep } from "@/data/company";

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={step.year}
            className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
              !isEven ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-px h-8 bg-gray-200" />
            )}

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-card overflow-hidden">
                {/* IMAGE PLACEHOLDER */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 lg:h-64 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-sm text-eco font-semibold mb-2">
                {step.year}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-carbon mb-3">
                {step.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
