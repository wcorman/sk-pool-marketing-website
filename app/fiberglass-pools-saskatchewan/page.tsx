import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fiberglass Pools Saskatchewan | SK Pool - Canadian Made Pools",
  description: "Expert fiberglass pool installers serving all of Saskatchewan. Canadian-made pools designed for prairie climate. Fast 14-day installation. Free consultation.",
  openGraph: {
    title: "Fiberglass Pools Saskatchewan | SK Pool - Canadian Made Pools",
    description: "Expert fiberglass pool installers serving all of Saskatchewan. Canadian-made pools designed for prairie climate. Fast 14-day installation. Free consultation.",
    images: [
      {
        url: "/images/featured.png",
        width: 1200,
        height: 630,
        alt: "SK Pool - Fiberglass Pools Saskatchewan",
      },
    ],
    type: "website",
  },
};

const benefits = [
  {
    title: "Built for Prairie Winters",
    description:
      "Canadian-made fiberglass pools are engineered to handle Saskatchewan's extreme freeze-thaw cycles. The flexible yet strong shell construction prevents cracking and shifting when temperatures drop below freezing.",
  },
  {
    title: "Thrives in Clay Soil",
    description:
      "Fiberglass pools perform exceptionally well in Saskatchewan's clay-heavy soil conditions. The one-piece shell resists ground movement and maintains structural integrity even when soil expands and contracts with moisture changes.",
  },
  {
    title: "Quick Installation Window",
    description:
      "Our 14-day installation timeline means you can enjoy your pool during the short but beautiful Saskatchewan summer. Pre-molded shells arrive ready to set, minimizing backyard disruption.",
  },
  {
    title: "Low Maintenance, High Enjoyment",
    description:
      "The smooth gel coat surface resists algae growth and requires fewer chemicals than other pool types. This means more time swimming and less time maintaining, perfect for busy Saskatchewan families.",
  },
];

const installationSteps = [
  {
    title: "Day 1-2: Planning & Permits",
    description:
      "We finalize your design, secure municipal permits across Saskatchewan communities, and coordinate delivery timing with your Canadian-made shell manufacturer.",
  },
  {
    title: "Day 3-10: Shell Delivery from Quebec",
    description:
      "Your custom fiberglass pool travels from our Canadian manufacturing partner in Quebec. We use this window to complete excavation, drainage, and electrical preparation on your site.",
  },
  {
    title: "Day 11-12: Site Preparation",
    description:
      "Our crew completes final grading, installs base material, and prepares the exact footprint where your pool will sit. We account for Saskatchewan's soil conditions and ensure proper drainage.",
  },
  {
    title: "Day 13: Pool Installation",
    description:
      "The crane arrives to set your fiberglass shell. Our team checks level from every angle, connects plumbing and filtration equipment, and begins backfilling around the pool structure.",
  },
  {
    title: "Day 14: Finishing & Orientation",
    description:
      "We complete backfill, balance water chemistry, and walk you through equipment operation and seasonal care. You're ready for your first swim in just two weeks.",
  },
];

const serviceAreas = [
  "Saskatoon",
  "Regina",
  "Moose Jaw",
  "Prince Albert",
  "Swift Current",
  "Yorkton",
  "North Battleford",
  "Estevan",
  "Weyburn",
  "Surrounding communities",
];

const faqs = [
  {
    question: "Do you handle permits for all Saskatchewan municipalities?",
    answer:
      "Yes. SK Pool coordinates permitting requirements for cities and towns across Saskatchewan, including Saskatoon, Regina, Moose Jaw, Prince Albert, and surrounding communities. We prepare site plans, equipment specifications, and fencing layouts that meet local bylaws, then keep you updated throughout the approval process.",
  },
  {
    question: "When is the best time to install a pool in Saskatchewan?",
    answer:
      "Installation typically runs from late April through early October, once the ground has thawed. We recommend booking your consultation in winter or early spring to secure your spot for the upcoming season. Early planning ensures your Canadian-made shell arrives and your site is ready as soon as weather permits.",
  },
  {
    question: "How do fiberglass pools handle Saskatchewan winters?",
    answer:
      "Fiberglass pools are excellent for Saskatchewan's climate. The flexible shell construction handles freeze-thaw cycles without cracking. We provide complete winterizing services, including proper water level management, equipment protection, and cover installation. Your pool will be ready to reopen quickly each spring.",
  },
  {
    question: "What makes Canadian-made pools better for Saskatchewan?",
    answer:
      "Canadian-made fiberglass pools are specifically engineered for our climate. They feature thicker gel coat layers, better insulation properties, and construction standards that account for prairie winters. Plus, you get Canadian warranty support and faster delivery times compared to American-made alternatives.",
  },
  {
    question: "How long does the installation process take in Saskatchewan?",
    answer:
      "Most SK Pool installations complete in about 14 days from when your shell arrives on-site. Weather can affect timelines, especially early or late in the season, but we provide milestone schedules so you always know what's happening next. The pre-molded fiberglass shell significantly speeds up the process compared to concrete or vinyl liner pools.",
  },
  {
    question: "Do you service pools after installation across Saskatchewan?",
    answer:
      "Absolutely. SK Pool offers seasonal openings, winterizing, water care visits, and emergency service throughout Saskatchewan. Our mobile crews travel to Saskatoon, Regina, and surrounding communities. You can choose à la carte service or subscribe to a maintenance plan that fits your schedule.",
  },
];

const FiberglassPoolsSaskatchewanPage = () => {
  return (
    <main className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/80 to-blue-900 opacity-95" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Service Area
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Fiberglass Pools for Saskatchewan Backyards
          </h1>
          <p className="text-lg text-slate-100">
            SK Pool brings Canadian-made fiberglass pools to homeowners across Saskatchewan. From Saskatoon to Regina, we specialize in pools built for prairie climate, frost cycles, and the soil conditions that make our province unique.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto mt-16 max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you're in a bustling city neighborhood or a quiet rural community, SK Pool understands what makes Saskatchewan backyards special. Our fiberglass pools are designed to handle everything from clay-heavy soil to extreme temperature swings, giving you a durable, low-maintenance retreat that stands up to prairie winters and delivers endless summer fun.
          </p>
        </div>
      </section>

      {/* Why Fiberglass Works in Saskatchewan */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Why Fiberglass Works in Saskatchewan
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Canadian-made fiberglass pools are uniquely suited to Saskatchewan's climate and soil conditions.
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
        <div className="mt-8 text-center">
          <p className="text-base text-slate-600">
            Learn more about the advantages of fiberglass pools in our{" "}
            <a
              href="/why-fiberglass"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              Why Fiberglass
            </a>{" "}
            guide.
          </p>
        </div>
      </section>

      {/* 14 Day Installation Plan */}
      <section className="mx-auto mt-20 max-w-5xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Our 14 Day Installation Plan</h2>
          <p className="mt-4 text-base text-slate-600">
            From consultation to first swim, SK Pool's streamlined process gets you enjoying your backyard pool in just two weeks. Weather can shift timelines, but our milestone schedule keeps you informed every step of the way.
          </p>
          <ol className="mt-8 space-y-6">
            {installationSteps.map((step, index) => (
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
              <span className="font-semibold text-slate-900">Delivery from Quebec:</span> Your Canadian-made fiberglass shell travels from our manufacturing partner in Quebec. We coordinate delivery timing with your site preparation to ensure everything arrives when your backyard is ready.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mx-auto mt-20 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100 md:p-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl text-center">Serving All of Saskatchewan</h2>
          <p className="mt-4 text-base text-slate-600 text-center">
            SK Pool's mobile installation crews travel across the province to bring Canadian-made fiberglass pools to your backyard.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-base font-medium text-slate-900">{area}</p>
              </div>
            ))}
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
            Common questions about fiberglass pool installation across Saskatchewan.
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

      {/* Serving Saskatchewan Links */}
      <section className="mx-auto mb-20 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 text-center">Serving Saskatchewan</h2>
          <p className="mt-4 text-base text-slate-600 text-center">
            Looking for city-specific information? Explore our dedicated pages for{" "}
            <a
              href="/fiberglass-pools-saskatoon"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              Saskatoon
            </a>{" "}
            and{" "}
            <a
              href="/fiberglass-pools-regina"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              Regina
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

export default FiberglassPoolsSaskatchewanPage;

