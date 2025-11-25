import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const timelineHighlights = [
  {
    step: "Step 1",
    title: "Discovery & Design",
    description:
      "Share your backyard vision and budget goals. SK Pool prepares a design layout and investment range that matches your priorities.",
  },
  {
    step: "Step 2",
    title: "Proposal & Planning",
    description:
      "Review your detailed proposal, choose a package, and finalize payment terms. We provide project schedules and cost breakdowns to help you plan with your bank if needed.",
  },
  {
    step: "Step 3",
    title: "Construction & Completion",
    description:
      "Installation moves quickly once the ground thaws. We finalize inspections and guide your first swim so you can enjoy your pool right away.",
  },
];

const PricingPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-sky-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 opacity-90" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Pricing
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Plan your investment with confidence.
          </h1>
          <p className="text-lg text-slate-100">
            We provide transparent pricing and schedule milestones so you can dive in without surprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
            <span className="rounded-full border border-white/30 px-4 py-1">Canadian-made pools</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Transparent pricing</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Clear timelines</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-6 text-center md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-16">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Straightforward pricing ranges.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every SK Pool project is tailored to your yard, but most homeowners fall within these ranges when pairing fiberglass shells with custom landscaping.
          </p>
          <div className="mt-10 space-y-6 text-left text-base text-slate-700">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Fiberglass pools</h3>
              <p className="mt-2 text-slate-600">Range from $75,000 to $150,000.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Landscaping & outdoor living</h3>
              <p className="mt-2 text-slate-600">
                May range from $50,000 to $200,000+ depending on design complexity, hardscaping, and amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100 md:p-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Financing options</h2>
            <p className="text-base text-slate-600">
              We don't provide financing directly, but many homeowners work with their bank or credit union to set up financing options that work best for their situation. We're happy to provide project details and timelines to support your financing application.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">From proposal to cannonball in three steps.</h2>
          <p className="mt-4 text-base text-slate-600">
            Our process helps you understand costs and timelines so you can plan confidently around Saskatchewan weather.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {timelineHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm shadow-slate-100">
                <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">{item.step}</span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 mb-20 max-w-6xl px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">Investment Snapshot</h2>
            <p className="mt-4 text-base text-slate-600">
              Most SK Pool homeowners invest between $75,000 and $140,000 depending on shell size, patio finishes, and accessory selections. We provide itemized proposals so you can tailor the project to your priorities.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                <span>Smaller plunge pools with decking start around $65,000.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                <span>Family-sized layouts with custom patios average between $85,000 and $110,000.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                <span>Premium landscapes with spas, fire features, and automation often exceed $120,000.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">What impacts your pricing?</h2>
            <ul className="mt-6 space-y-4 text-base text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Site access & soil conditions:</span> Tight spaces or clay-heavy yards may require additional excavation measures.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Seasonal timing:</span> Early booking ensures your shell arrives before peak season and often secures better scheduling.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Upgrades & integrations:</span> Decking materials, lighting packages, spas, and automation affect final costs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default PricingPage;


