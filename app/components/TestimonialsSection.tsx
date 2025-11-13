"use client";

import ImageWithFallback from "./ImageWithFallback";
import { UserRound } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  backgroundImage?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Nice job. I'm happy! Friendly, reliable and thorough service. Would definitely recommend for anyone looking for a pool.",
    author: "Alishaan Deol",
    backgroundImage: "/images/Epsilon (4).png",
  },
  {
    quote: "Exceptional service from start to finish. The team was professional, attentive, and delivered exactly what we envisioned.",
    author: "Sarah Johnson",
    backgroundImage: "/images/thumbnail_image3.jpg",
  },
  {
    quote: "Our pool is absolutely beautiful! SK Pool made the entire process stress-free and the result exceeded our expectations.",
    author: "Michael Chen",
    backgroundImage: "/images/Iota (4).png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Our Clients Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {testimonial.backgroundImage && (
                <div className="relative h-48">
                  <ImageWithFallback
                    src={testimonial.backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <UserRound aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

