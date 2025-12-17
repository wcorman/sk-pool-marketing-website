"use client";

import Image from "next/image";

const AboutPoolSection = () => {
  return (
    <section
      id="about-sk-pool"
      className="py-16 lg:py-20 px-4 bg-white"
      aria-label="About SK POOL"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
        <div>
          <Image
            src="/images/swimming-pool-icon.svg"
            alt="Stylized swimming pool icon"
            width={80}
            height={80}
            className="mx-auto mb-4"
            priority={false}
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">
            About SK POOL
          </h2>
        </div>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        SK POOL is built on a family tradition of over <strong>50 years of experience</strong> manufacturing and installing swimming pools in Canada. We carry that legacy forward in Saskatchewan, bringing the same care, honesty, and craftsmanship to every pool we build.
        </p>
        {/* <div className="pt-2">
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            tabIndex={0}
          >
            Explore More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AboutPoolSection;

