"use client";

import ImageWithFallback from "./ImageWithFallback";

const DivingIntoDreamsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/thumbnail_image5.jpg"
                alt="Person swimming in infinity pool overlooking city skyline"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/Iota (4).png"
                alt="Yellow inflatable raft with straw hat floating in pool"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Designing Backyard Retreats{" "}
                <span className="text-blue-600 inline-flex items-center">
                  The SK Pool Way
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 text-red-500"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                At SK Pool, every backyard transformation begins with a conversation.
                We listen first, then translate your wish list into a custom design
                that celebrates Canadian craftsmanship and maximizes every inch of
                your outdoor space.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From engineered fiberglass shells to curated lighting, water features,
                and hardscapes, our team manages every step with precision. The result
                is a true backyard retreat where every gathering feels relaxed, refined,
                and unmistakably yours.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/learn-more"
                className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                tabIndex={0}
              >
                Explore Our Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivingIntoDreamsSection;

