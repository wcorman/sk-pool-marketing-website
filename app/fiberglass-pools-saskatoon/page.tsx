import type { Metadata } from "next";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fiberglass Pools Saskatoon | SK Pool - Saskatoon Pool Builders",
  description: "Saskatoon pool builders specializing in fiberglass pools. Perfect for typical Saskatoon lots. Clay soil expertise. Fast installation. Book consultation.",
  openGraph: {
    title: "Fiberglass Pools Saskatoon | SK Pool - Saskatoon Pool Builders",
    description: "Saskatoon pool builders specializing in fiberglass pools. Perfect for typical Saskatoon lots. Clay soil expertise. Fast installation. Book consultation.",
    images: [
      {
        url: "/images/featured.png",
        width: 1200,
        height: 630,
        alt: "SK Pool - Fiberglass Pools Saskatoon",
      },
    ],
    type: "website",
  },
};

const benefits = [
  {
    title: "Perfect for Saskatoon Lot Sizes",
    description:
      "Fiberglass pools come in compact designs that fit beautifully into typical Saskatoon backyards. Whether you're in a newer subdivision or an established neighborhood, we help you maximize your space with a pool that feels custom-built for your yard.",
  },
  {
    title: "Handles Clay Soil with Ease",
    description:
      "Saskatoon's clay-heavy soil can be challenging for traditional pools, but fiberglass shells are designed to flex and move with ground conditions. The one-piece construction prevents cracking and maintains structural integrity even when soil expands and contracts.",
  },
  {
    title: "Quick Install Before Summer",
    description:
      "Our 14-day installation timeline means you can have your pool ready for Saskatoon's short but beautiful summer season. Pre-molded shells arrive ready to set, so you're swimming while others are still waiting for construction to begin.",
  },
  {
    title: "Built for Freeze-Thaw Cycles",
    description:
      "Saskatoon experiences dramatic temperature swings, but Canadian-made fiberglass pools are engineered to handle these conditions. The flexible shell construction prevents damage from freeze-thaw cycles, giving you peace of mind through every winter.",
  },
];

const timelineSteps = [
  {
    title: "Day 1-2: Design & Permits",
    description:
      "We finalize your pool design to fit your Saskatoon lot, secure city permits, and coordinate with your neighborhood's access requirements. SK Pool handles all municipal paperwork and keeps you updated on approvals.",
  },
  {
    title: "Day 3-10: Delivery Window",
    description:
      "Your Canadian-made fiberglass shell travels from Quebec while we prepare your site. During this window, we complete excavation, drainage work, and electrical connections, coordinating with Saskatoon utilities as needed.",
  },
  {
    title: "Day 11-12: Site Preparation",
    description:
      "Our crew completes final grading and base preparation, accounting for Saskatoon's clay soil conditions. We ensure proper drainage and level the exact footprint where your pool will sit, protecting your existing landscaping whenever possible.",
  },
  {
    title: "Day 13: Installation Day",
    description:
      "The crane arrives to set your fiberglass shell. We coordinate equipment access through your neighborhood, whether that's via your driveway, lane, or an alternate route. Our team checks level, connects plumbing, and begins backfilling.",
  },
  {
    title: "Day 14: Completion & Training",
    description:
      "We finish backfill, balance water chemistry, and provide hands-on training for your equipment. You'll learn maintenance basics, seasonal care, and how to get the most from your new Saskatoon backyard retreat.",
  },
];

const faqs = [
  {
    question: "What permits do I need for a pool in Saskatoon?",
    answer:
      "Saskatoon requires building permits for pool installations, including electrical and plumbing work. SK Pool handles all permit applications, prepares site plans that meet city requirements, and coordinates inspections. We ensure your pool meets Saskatoon's fencing, setback, and safety regulations before installation begins.",
  },
  {
    question: "How do you handle property line setbacks in Saskatoon?",
    answer:
      "Saskatoon has specific setback requirements for pools, typically 1.2 meters from property lines. During our initial consultation, we measure your yard and design the pool placement to comply with all regulations while maximizing usable space. We'll show you exactly where your pool can be placed before any work begins.",
  },
  {
    question: "Can you access my backyard through a lane in Saskatoon?",
    answer:
      "Yes. Many Saskatoon homes have lane access, and we regularly work with these setups. We assess your lane width, overhead clearance, and any obstacles before installation. If lane access isn't feasible, we'll coordinate with neighbors or use your driveway. Our goal is to protect your property and minimize disruption.",
  },
  {
    question: "How noisy is the installation process in Saskatoon neighborhoods?",
    answer:
      "The noisiest phase is excavation, which typically takes one day. The crane operation for setting the pool shell is relatively quick and quiet. We work during standard business hours and coordinate with neighbors when possible. Most homeowners find the process less disruptive than expected, especially compared to months-long concrete pool construction.",
  },
  {
    question: "When is the best time to install a pool in Saskatoon?",
    answer:
      "Installation typically runs from late April through early October, once the ground has thawed. We recommend booking your consultation in winter or early spring to secure your spot. Early planning ensures your shell arrives and your site is ready as soon as weather permits, giving you the longest possible swim season.",
  },
  {
    question: "Do you service pools after installation in Saskatoon?",
    answer:
      "Absolutely. SK Pool offers seasonal openings, winterizing, water care visits, and emergency service throughout Saskatoon. Our local team understands the city's water chemistry and can help you maintain your pool efficiently. You can choose individual services or subscribe to a maintenance plan.",
  },
];

const FiberglassPoolsSaskatoonPage = () => {
  return (
    <main className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/80 to-blue-900 opacity-95" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Saskatoon
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Fiberglass Pools in Saskatoon
          </h1>
          <p className="text-lg text-slate-100">
            Transform your Saskatoon backyard into a family retreat with a Canadian-made fiberglass pool. Perfect for typical city lots, built for clay soil, and ready for summer in just 14 days.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto mt-16 max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            Saskatoon homeowners know that making the most of your backyard space matters. Whether you're in Nutana, Stonebridge, or anywhere in between, SK Pool specializes in fiberglass pools that fit your lot size and lifestyle. Our compact designs work beautifully in typical Saskatoon yards, while our expertise with clay soil ensures your pool stands up to local conditions for years to come.
          </p>
        </div>
      </section>

      {/* Why Saskatoon Homeowners Choose Fiberglass */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Why Saskatoon Homeowners Choose Fiberglass
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Fiberglass pools are uniquely suited to Saskatoon's lot sizes, soil conditions, and climate.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-4 text-base text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Installation Timeline */}
      <section className="mx-auto mt-20 max-w-5xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Local Installation Timeline in Saskatoon</h2>
          <p className="mt-4 text-base text-slate-600">
            SK Pool's streamlined process gets your Saskatoon pool ready in just 14 days. We coordinate equipment access through city neighborhoods, work with local utilities, and keep you informed every step of the way.
          </p>
          <ol className="mt-8 space-y-6">
            {timelineSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500 text-lg font-semibold text-white"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <p className="text-base text-slate-700">
              <span className="font-semibold text-slate-900">Equipment Access:</span> We assess your property's access points—whether that's your driveway, lane, or an alternate route—before installation begins. Our team coordinates with neighbors when needed and protects your landscaping throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-20 mb-20 max-w-5xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Common questions about fiberglass pool installation in Saskatoon.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const accordionId = `faq-${index}`;
            return (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900 md:text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  aria-controls={`${accordionId}-content`}
                >
                  <span>{faq.question}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div id={`${accordionId}-content`} className="mt-4 text-base text-slate-600">
                  {faq.answer}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="mx-auto mb-20 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 text-center">Other Service Areas</h2>
          <p className="mt-4 text-base text-slate-600 text-center">
            SK Pool serves homeowners across Saskatchewan. Explore our pages for{" "}
            <a
              href="/fiberglass-pools-regina"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              Regina
            </a>{" "}
            and{" "}
            <a
              href="/fiberglass-pools-saskatchewan"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              all of Saskatchewan
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default FiberglassPoolsSaskatoonPage;

