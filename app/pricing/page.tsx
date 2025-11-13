import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const financingOptions = [
  {
    name: "Prairie Pool Financing",
    term: "Up to 180 months",
    rate: "Starting at 7.49% APR*",
    details: [
      "Fixed monthly payments tailored to seasonal income.",
      "Works with SaskEnergy and SaskPower efficiency programs.",
      "Fast approvals for borrowers across Saskatchewan.",
    ],
  },
  {
    name: "Home Equity Line of Credit",
    term: "Flexible draw periods",
    rate: "Prime + 0.75% (bank dependent)",
    details: [
      "Ideal for homeowners with existing equity in Regina, Saskatoon, and surrounding areas.",
      "Interest-only payments available during the draw period.",
      "Coordinate with your preferred credit union or bank.",
    ],
  },
  {
    name: "Seasonal Construction Loan",
    term: "12 to 24 months",
    rate: "Starting at 6.99% APR*",
    details: [
      "Short-term bridge financing to cover construction milestones.",
      "No payment penalties for early payoff after project completion.",
      "Available through partnered lenders familiar with SK Pool installations.",
    ],
  },
];

const projectTiers = [
  {
    title: "Essential Fiberglass Package",
    price: "Starting at $90,000",
    features: [
      "Canadian-made fiberglass shell (12'–30' lengths)",
      "Excavation, crane set, plumbing, backfill, and equipment pad",
      "Energy-efficient pump, cartridge filter, and LED lighting",
      "4' broom-finished concrete perimeter",
      "Water testing, orientation, and first-month maintenance checklist",
    ],
  },
  {
    title: "Family Retreat Package",
    price: "Starting at $105,000",
    features: [
      "All Essential Package inclusions",
      "Built-in benches or tanning ledge fiberglass models",
      "Extended stamped concrete or paver patio",
      "Automation-ready equipment with Wi-Fi control",
      "Custom lighting scenes and premium safety cover",
    ],
  },
  {
    title: "Four-Season Luxury Package",
    price: "Starting at $125,000",
    features: [
      "Integrated spa or splash deck",
      "Radiant deck heating or fire feature integration",
      "Pergola or pavilion framing with lighting and audio pre-wire",
      "Extended warranty coverage plus spring opening and fall closing for year one",
    ],
  },
];

const timelineHighlights = [
  {
    step: "Step 1",
    title: "Discovery & Design",
    description:
      "Share your backyard vision, budget goals, and financing preferences. SK Pool prepares a design layout and investment range that matches your priorities.",
  },
  {
    step: "Step 2",
    title: "Proposal & Financing Alignment",
    description:
      "Review your detailed proposal, choose a package, and lock in financing. We coordinate directly with lenders to provide project schedules and cost breakdowns.",
  },
  {
    step: "Step 3",
    title: "Construction & Completion",
    description:
      "Installation moves quickly once the ground thaws. We finalize inspections, guide your first swim, and ensure your financing closes out with zero surprises.",
  },
];

const PricingPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-sky-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 opacity-90" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Pricing & Financing
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Plan your investment with confidence.
          </h1>
          <p className="text-lg text-slate-100">
            We provide transparent pricing, financing options, and schedule milestones so you can dive in without surprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
            <span className="rounded-full border border-white/30 px-4 py-1">Canadian-made pools</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Flexible financing</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Transparent timelines</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Choose a package that matches your vision.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every backyard is unique. These starting points show what&apos;s included with typical SK Pool builds in Saskatchewan.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projectTiers.map((tier) => (
            <div
              key={tier.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{tier.title}</h3>
                <p className="mt-2 text-xl font-semibold text-sky-600">{tier.price}</p>
              </div>
              <ul className="flex flex-1 flex-col gap-3 text-base text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Pricing varies with site access, soil conditions, and upgrade selections.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100 md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Financing that fits Saskatchewan homeowners.</h2>
            <p className="text-base text-slate-600">
              We partner with lenders who understand seasonal incomes, rural properties, and Prairie climate considerations. Choose flexible options that let you enjoy your pool now and pay over time.
            </p>
            <p className="text-sm text-slate-500">
              *Rates and approvals depend on credit profile, lender policies, and prevailing market conditions.
            </p>
          </div>
          <div className="space-y-4">
            {financingOptions.map((option) => (
              <div key={option.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{option.name}</h3>
                  <span className="text-sm font-medium text-sky-600">{option.term}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">{option.rate}</p>
                <ul className="mt-4 space-y-2 text-base text-slate-600">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm shadow-slate-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">From proposal to cannonball in three steps.</h2>
          <p className="mt-4 text-base text-slate-600">
            Our process helps you understand costs, timelines, and financing milestones so you can plan confidently around Saskatchewan weather.
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


