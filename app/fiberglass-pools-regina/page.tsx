import type { Metadata } from "next";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fiberglass Pools Regina | SK Pool - Regina Pool Installers",
  description: "Regina pool installers offering Canadian-made fiberglass pools. Quick installs before peak summer. Low maintenance. Book your consultation today.",
  openGraph: {
    title: "Fiberglass Pools Regina | SK Pool - Regina Pool Installers",
    description: "Regina pool installers offering Canadian-made fiberglass pools. Quick installs before peak summer. Low maintenance. Book your consultation today.",
    images: [
      {
        url: "/images/featured.png",
        width: 1200,
        height: 630,
        alt: "SK Pool - Fiberglass Pools Regina",
      },
    ],
    type: "website",
  },
};

const benefits = [
  {
    title: "Durable Construction for Regina Summers",
    description:
      "Regina's long, sunny summers mean your pool gets plenty of use. Canadian-made fiberglass pools are built to handle constant sun exposure and heavy use without fading, cracking, or requiring frequent resurfacing. The gel coat finish stays beautiful season after season.",
  },
  {
    title: "Low Maintenance, Maximum Enjoyment",
    description:
      "Regina families want to spend their summer swimming, not maintaining. Fiberglass pools require minimal upkeep—the smooth surface resists algae, uses fewer chemicals, and holds heat efficiently. You'll spend less time on maintenance and more time making memories.",
  },
  {
    title: "Quick Installation Before Peak Season",
    description:
      "Our 14-day installation timeline means you can have your pool ready before Regina's peak summer heat arrives. Pre-molded shells arrive ready to set, so you're enjoying your backyard retreat while others are still waiting for construction to finish.",
  },
  {
    title: "Perfect for Regina Backyards",
    description:
      "Whether you're in Lakeview, Harbour Landing, or an established neighborhood, fiberglass pools fit beautifully into Regina's varied lot sizes. We help you choose a design that maximizes your space and complements your outdoor living area.",
  },
];

const timelineSteps = [
  {
    title: "Day 1-2: Design & City Permits",
    description:
      "We finalize your pool design to fit your Regina property, secure city permits, and coordinate with Regina's building department. SK Pool handles all municipal paperwork, including site plans and equipment specifications that meet local requirements.",
  },
  {
    title: "Day 3-10: Delivery & Site Prep",
    description:
      "Your Canadian-made fiberglass shell travels from Quebec while we prepare your Regina site. During this window, we complete excavation, drainage work, and electrical connections, working with Regina utilities and ensuring proper access to your property.",
  },
  {
    title: "Day 11-12: Final Site Preparation",
    description:
      "Our crew completes final grading and base preparation, accounting for Regina's soil conditions. We ensure proper drainage, level the exact footprint where your pool will sit, and protect your existing landscaping and hardscaping whenever possible.",
  },
  {
    title: "Day 13: Pool Installation",
    description:
      "The crane arrives to set your fiberglass shell in Regina. We coordinate equipment access, whether that's through your driveway or an alternate route. Our team checks level from every angle, connects plumbing and filtration, and begins backfilling around the structure.",
  },
  {
    title: "Day 14: Completion & Handover",
    description:
      "We finish backfill, balance water chemistry for Regina's water conditions, and provide comprehensive training on equipment operation and maintenance. You'll learn seasonal care, water chemistry basics, and how to keep your pool beautiful with minimal effort.",
  },
];

const faqs = [
  {
    question: "What permits do I need for a pool in Regina?",
    answer:
      "Regina requires building permits for pool installations, including electrical and plumbing work. SK Pool handles all permit applications, prepares site plans that meet city requirements, and coordinates inspections. We ensure your pool complies with Regina's fencing, setback, and safety regulations before installation begins.",
  },
  {
    question: "What are typical lot sizes for pools in Regina?",
    answer:
      "Regina has a mix of lot sizes, from compact urban lots to larger suburban properties. Fiberglass pools work well across this range—we offer compact plunge pools for smaller spaces and larger family-sized options for bigger yards. During our consultation, we measure your space and recommend the best size and shape for your specific Regina property.",
  },
  {
    question: "How do you schedule around Regina's weather?",
    answer:
      "Regina's weather can be unpredictable, especially in spring and fall. We monitor forecasts closely and adjust our timeline accordingly. Early booking helps secure your spot for optimal weather windows. We typically install from late April through early October, once the ground has thawed, and we work efficiently to complete your pool before late fall weather arrives.",
  },
  {
    question: "Do fiberglass pools work well with Regina's water chemistry?",
    answer:
      "Yes. Fiberglass pools are excellent for Regina's water conditions. The smooth gel coat surface is non-reactive and easy to balance. During handover, we test your water and provide specific guidance for Regina's water chemistry. The low-maintenance nature of fiberglass means you'll spend less time adjusting chemicals than with other pool types.",
  },
  {
    question: "Can you install a pool in an established Regina neighborhood?",
    answer:
      "Absolutely. We regularly work in established Regina neighborhoods like Cathedral, Lakeview, and others. We assess access points, coordinate with neighbors when needed, and protect existing landscaping throughout the process. Our 14-day timeline minimizes disruption, and we clean up thoroughly each day.",
  },
  {
    question: "Do you offer ongoing service for Regina pools?",
    answer:
      "Yes. SK Pool provides seasonal openings, winterizing, water care visits, and emergency service throughout Regina. Our team understands the city's water chemistry and can help you maintain your pool efficiently. You can choose individual services or subscribe to a maintenance plan that fits your schedule.",
  },
];

const FiberglassPoolsReginaPage = () => {
  return (
    <main className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/80 to-blue-900 opacity-95" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Regina
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Fiberglass Pools in Regina
          </h1>
          <p className="text-lg text-slate-100">
            Create your perfect Regina backyard retreat with a Canadian-made fiberglass pool. Built for durability, designed for low maintenance, and ready for those long sunny evenings with family and friends.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto mt-16 max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            Regina families know how special those long summer evenings can be. A fiberglass pool transforms your backyard into a gathering place where memories are made. Whether you're in a newer development or an established neighborhood, SK Pool brings Canadian-made quality and quick installation to Regina homes. Our pools are built to handle constant use, require minimal maintenance, and deliver years of enjoyment for your family.
          </p>
        </div>
      </section>

      {/* Why Fiberglass Makes Sense in Regina */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Why Fiberglass Makes Sense in Regina
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Fiberglass pools offer Regina homeowners durability, low maintenance, and quick installation.
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

      {/* Regina Installation Timeline */}
      <section className="mx-auto mt-20 max-w-5xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Regina Installation Timeline</h2>
          <p className="mt-4 text-base text-slate-600">
            SK Pool's efficient process gets your Regina pool ready in just 14 days. We coordinate with city permits, work around weather conditions, and keep you informed throughout the installation.
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
              <span className="font-semibold text-slate-900">Weather Planning:</span> Regina's weather can change quickly, especially in spring and fall. We monitor forecasts and adjust our schedule to work during optimal conditions. Early booking helps secure your spot for the best weather windows.
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
            Common questions about fiberglass pool installation in Regina.
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
              href="/fiberglass-pools-saskatoon"
              className="text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 font-medium"
            >
              Saskatoon
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

export default FiberglassPoolsReginaPage;

