import Image from "next/image";

const applications = [
  {
    name: "Rubber Manufacturing",
    image: "/images/Rubber_BG.png",
  },
  {
    name: "Plastic Processing",
    image: "/images/plastic_BG.png",
  },
  {
    name: "Tire Production",
    image: "/images/Tire_BG.png",
  },
  {
    name: "Hose & Cable Manufacturing",
    image: "/images/cable_BG.png",
  },
  {
    name: "Inks, Paints & Coatings",
    image: "/images/paint_BG.png",
  },
];

export default function Applications() {
  return (
    <section className="px-4 sm:px-6 py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto">
          <span className="inline-block text-sm text-gray-500 mb-3 tracking-wide">
            [ Applications ]
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-carbon leading-snug">
            <span className="font-bold">Powering Industries Worldwide</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
            Our carbon black solutions drive performance and <span className="text-eco font-bold">sustainability</span> across diverse manufacturing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {applications.map((app) => (
            <div
              key={app.name}
              className="bg-white rounded-card p-6 lg:p-8 border-2 border-eco hover:border-eco hover:shadow-soft hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 relative mb-4 flex-shrink-0">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  sizes="(max-width: 639px) 80px, (max-width: 1023px) 96px, 112px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-carbon">
                {app.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
