"use client";

import ImageWithFallback from "./ImageWithFallback";

type Service = {
  title: string;
  image: string;
  alt: string;
  comingSoon?: boolean;
  href?: string;
};

const services: Service[] = [
  {
    title: "Inground Fiberglass Pools",
    image: "/images/Gamma (8).jpeg",
    alt: "Infinity pool by the sea",
  },
  {
    title: "Above-Ground Fiberglass Pools",
    image: "/images/above-ground.webp",
    alt: "Above ground pool in a sunny backyard",
    href: "/above-ground-pools",
  },
  {
    title: "Pool Maintenance",
    image: "/images/Square Spa (7).jpg",
    alt: "Person working on pool equipment",
  },
  {
    title: "Equipment Install",
    image: "/images/thumbnail_image3.jpg",
    alt: "Circular pool with lounge chairs",
  },
  {
    title: "Pool Opening",
    image: "/images/pool-photo.webp",
    alt: "Technician removing a pool cover in spring",
  },
  {
    title: "Pool Closing",
      image: "/images/closing.webp",
    alt: "Backyard pool prepared for winter",
  },
  {
    title: "Vinyl Liner Replacement",
    image: "/images/Upsilon (2).jpg",
    alt: "Crew installing a new vinyl pool liner",
  },
  {
    title: "Fiberglass Hot Tubs",
    image: "/images/Square Spa (4).jpg",
    alt: "Modern fiberglass hot tub on a deck",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Light blue background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Each backyard is different. We can customize your service to fit your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {services.map((service, index) => {
            const cardContent = (
              <>
                <div className="relative h-64">
                  {service.comingSoon && (
                    <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-sky-500 px-4 py-1 text-sm font-semibold text-white shadow">
                      Coming soon
                    </span>
                  )}
                  <ImageWithFallback
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
              </>
            );
            const cardClassName =
              "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow";
            return service.href ? (
              <a
                key={index}
                href={service.href}
                className={`block ${cardClassName} focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2`}
              >
                {cardContent}
              </a>
            ) : (
              <div key={index} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            With SK Pool, your dream pool is closer than ever – no stress, no delays, 
            just pure enjoyment!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

