import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Above-Ground Pools | SK Pool – Canadian-Made, Affordable",
  description:
    "Affordable Canadian-made above-ground pools from SK Pool. Durable steel construction, fast installation, and modern designs for Saskatchewan backyards.",
};

const whyChooseItems = [
  {
    title: "Canadian Manufactured",
    description: "Built for Canadian winters and summers",
  },
  {
    title: "Affordable Alternative to In-Ground Pools",
    description: "Big fun, smaller investment",
  },
  {
    title: "Fast Installation",
    description: "From delivery to swimming in days, not weeks",
  },
  {
    title: "Durable Steel Construction",
    description: "Engineered for strength and longevity",
  },
  {
    title: "Modern Designs",
    description: "Clean lines that complement your backyard",
  },
  {
    title: "Family-Friendly & Low Maintenance",
    description: "Simple ownership, maximum enjoyment",
  },
];

const whatWeHandle = [
  "Pool supply",
  "Site preparation guidance",
  "Professional installation",
  "Equipment setup",
  "Startup support",
];

const productLines = [
  {
    name: "Downtown",
    description: "Canadian-made above-ground pool models. Contact us for specs, sizes, and options.",
    image: "/images/downtown/Downtown.C1.1600-1200.webp",
    imageAlt: "Downtown above-ground pool",
  },
  {
    name: "Lava",
    description: "Canadian-made above-ground pool models. Contact us for specs, sizes, and options.",
    image: "/images/lava/Lava.C1.1600-1200.png",
    imageAlt: "Lava above-ground pool",
  },
];

const AboveGroundPoolsPage = () => {
  return (
    <main className="bg-white pb-20">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/downtown/Downtown.C1.1600-1200.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Above-Ground Pools
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Affordable Canadian-Made Above-Ground Pools
          </h1>
          <p className="text-lg text-slate-100">
            Looking for a swimming pool that fits your budget — without compromising on quality? At SK Pool, our above-ground pools are proudly manufactured in Canada and designed for our climate.
          </p>
        </div>
      </section>

      {/* Intro with image */}
      <section className="mx-auto mt-16 max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <Image
              src="/images/lava/Lava.C1.1600-1200.png"
              alt="Lava above-ground pool in a backyard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-lg text-slate-600 leading-relaxed">
          They offer a smart, affordable way to enjoy summer at home, with strong steel structures, long-lasting liners, and modern designs that elevate any backyard.
        </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Whether you&apos;re upgrading your outdoor space or installing your very first pool, our above-ground models deliver outstanding value, durability, and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900 md:text-4xl">
          Why Choose an SK Pool Above-Ground Pool?
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600" aria-hidden="true">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-slate-600">
          Our above-ground pools are ideal for families, first-time pool owners, rental properties, and anyone who wants a beautiful backyard upgrade without the cost or complexity of in-ground construction.
        </p>
      </section>

      {/* Smart Backyard Investment */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm shadow-slate-100 md:flex">
          <div className="relative h-72 w-full flex-shrink-0 md:aspect-[4/3] md:h-auto md:w-2/5">
            <Image
              src="/images/downtown/Downtown Oval_C3 _1600-1200.webp"
              alt="Downtown oval above-ground pool in a backyard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-slate-900">A Smart Backyard Investment</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              An above-ground pool isn&apos;t just about cooling off — it&apos;s about creating memories.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From weekend barbecues to daily swims, your pool becomes the heart of your outdoor living space. With SK Pool, you get a professionally installed system that adds lifestyle value today and resale appeal tomorrow — all at a fraction of the cost of traditional in-ground pools.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Canada */}
      <section className="mx-auto mt-20 max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Built for Canada. Priced for Real Life.</h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Canadian summers are short — so your pool should be easy, reliable, and ready fast.
        </p>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          That&apos;s why SK Pool focuses on locally manufactured products, streamlined installation, and transparent pricing. No complicated builds. No long delays. Just a quality pool, installed professionally, so you can start enjoying it right away.
        </p>
      </section>

      {/* From Dream to Reality */}
      <section className="mx-auto mt-20 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100 md:p-10">
          <h2 className="text-center text-3xl font-semibold text-slate-900">
            From Backyard Dream to Reality — Made Simple
          </h2>
          <p className="mt-4 text-center text-slate-600">We handle everything:</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-700" role="list">
            {whatWeHandle.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-lg font-medium text-slate-900">
            You choose the model. We take care of the rest.
          </p>
        </div>
      </section>

      {/* Product lines */}
      <section className="mx-auto mt-20 max-w-4xl px-6 pb-16 md:px-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900">Our Above-Ground Pool Lines</h2>
        <p className="mt-3 text-center text-slate-600">
          We offer Downtown and Lava — Canadian-made above-ground pools in a range of sizes and styles.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {productLines.map((line) => (
            <div
              key={line.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={line.image}
                  alt={line.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-semibold text-slate-900">{line.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{line.description}</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded"
                >
                  Contact us for details
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default AboveGroundPoolsPage;
