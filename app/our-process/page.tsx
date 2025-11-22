import Image from "next/image";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const processSteps = [
  {
    title: "Discovery Consultation",
    description:
      "We visit your backyard, discuss how you want to use your pool, measure the space, and align on budget, utilities, and timing so every detail is clear from day one.",
  },
  {
    title: "Design & Permitting",
    description:
      "Our designers create a layout that fits your yard and lifestyle, then prepare drawings and documentation to secure local permits across Saskatchewan municipalities.",
  },
  {
    title: "Site Preparation",
    description:
      "SK Pool handles excavation and drainage prep work, coordinating trades and inspections while protecting existing landscaping and access paths if possible.",
  },
  {
    title: "Pool Delivery & Set",
    description:
      "Your Canadian-made fiberglass shell arrives ready to install. Our crew cranes it into place, checks level from every angle, and connects plumbing and filtration.",
  },
  {
    title: "Finishing Touches",
    description:
      "We backfill and balance water chemistry.",
  },
  {
    title: "Orientation & Handover",
    description:
      "Before the first swim, we walk you through equipment operation, maintenance routines, and seasonal care, leaving a custom guide and service contact sheet.",
  },
];

const milestoneDetails = [
  {
    title: "Day 1–2: We Plan Your Dream Pool",
    description:
      "Finalize your design, choose finishes, and secure permits. Clear communication keeps everything on track.",
  },
  {
    title: "Day 3–10: Delivery in Transit",
    description:
      "Your custom fiberglass pool is delivered. This stage takes the most time but we assure you that it will be worth the wait.",
  },
  {
    title: "During Delivery Window: Dig & Prepare",
    description:
      "Excavation, drainage, and electrical prep happen within the 10–15 day delivery window so the site is ready the moment your pool arrives.",
  },
  {
    title: "Day 13: Installation Day",
    description:
      "The crane sets your pool and equipment is wired.",
  },
  {
    title: "Day 14: Finish & Orient",
    description:
      "Landscaping ties in, and you receive hands-on training plus a service plan.",
  },
];

const OurProcessPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/Upsilon (8).jpg"
          alt="SK Pool team installing a fiberglass pool in a backyard"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/60" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-sky-500 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Our Process
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            A guided path from first conversation to first cannonball.
          </h1>
          <p className="text-lg text-slate-100">
            We treat every SK Pool project like a partnership. From design to handover, our Saskatchewan team keeps you informed so you can enjoy a Canadian-made pool without stress.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <div className="rounded-full border border-white/40 px-4 py-1">Local expertise</div>
            <div className="rounded-full border border-white/40 px-4 py-1">Transparent milestones</div>
            <div className="rounded-full border border-white/40 px-4 py-1">Canadian-made quality</div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Six steps to a seamless installation.</h2>
          <p className="mt-3 text-lg text-slate-600">
            We manage the details and timing so you can focus on how you want to use your pool with family and friends.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm shadow-slate-100"
            >
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="text-base text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100 md:grid-cols-2 md:p-12">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/Epsilon (4).png"
              alt="Completed fiberglass pool with lounge chairs"
              fill
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-5 text-left">
            <h2 className="text-3xl font-semibold text-slate-900">Built in Canada for Prairie climates.</h2>
            <p className="text-base text-slate-600">
              Our fiberglass shells are manufactured in Canada to handle freeze-thaw cycles, insulated ground, and the long winters Saskatchewan homeowners expect. Every shell is inspected before it leaves the factory and again on-site.
            </p>
            <ul className="space-y-3 text-base text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                Energy-efficient shells retain warmth for longer swim seasons.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                Durable gel coat resists algae and reduces chemical usage.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                Backed by Canadian warranties and SK Pool service support.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 mb-20 max-w-5xl px-6 md:px-8">
        <div className="rounded-3xl border border-sky-100 bg-white px-6 py-12 shadow-sm shadow-sky-100 md:px-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Our 2 weeks to cannonball timeline...</h2>
          <p className="mt-4 text-base text-slate-600">
            Timelines can shift with weather, but our milestone plan keeps you informed and confident from start to splash.
          </p>
          <ol className="mt-8 space-y-6">
            {milestoneDetails.map((milestone, index) => (
              <li key={milestone.title} className="flex gap-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500 text-lg font-semibold text-white"
                  aria-label={`Milestone ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{milestone.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{milestone.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default OurProcessPage;

