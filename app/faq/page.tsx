import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const faqSections = [
  {
    title: "Planning & Design",
    items: [
      {
        question: "How far in advance should we start planning our pool?",
        answer:
          "We recommend beginning the planning process at least 3 to 6 months before your ideal installation window. This gives us time to finalize the design, secure permits, and schedule your Canadian-made fiberglass shell so it arrives as soon as the ground is ready.",
      },
      {
        question: "Do you help with permits in Saskatchewan municipalities?",
        answer:
          "Yes. SK Pool coordinates permitting requirements for Regina, Saskatoon, and surrounding communities. We prepare site plans, equipment specifications, and fencing layouts tailored to local bylaws, then keep you updated on approvals.",
      },
      {
        question: "Can SK Pool customize the layout to my backyard shape?",
        answer:
          "Absolutely. We review your property survey, utilities, and sun exposure to recommend shell shapes, patio footprints, and accessory placements that make the most of your available space.",
      },
    ],
  },
  {
    title: "Installation & Timelines",
    items: [
      {
        question: "How long does installation take?",
        answer:
          "Most projects move from consultation to first swim in about two weeks. Climate, access, and weather can shift timelines, but our team provides a milestone schedule so you always know what happens next.",
      },
      {
        question: "Do you work through the winter?",
        answer:
          "We install from spring through late fall to avoid deep frost. Winter is the perfect time to complete planning, permitting, and shell fabrication so we can start as soon as the ground thaws.",
      },
      {
        question: "What site access do you need for equipment?",
        answer:
          "We typically require a 10-foot access path for excavation machinery and the crane that sets your fiberglass shell. If your yard is tighter, we’ll coordinate alternate routes or smaller equipment to protect your property.",
      },
    ],
  },
  {
    title: "Materials & Equipment",
    items: [
      {
        question: "Where are your fiberglass pools manufactured?",
        answer:
          "All SK Pool fiberglass shells are built in Canada and engineered for Prairie climate swings. This means better insulation, thicker gel coat layers, and Canadian warranty support when you need it.",
      },
      {
        question: "Do you install heating, lighting, and automation?",
        answer:
          "Yes. We offer energy-efficient heaters, LED lighting, automatic covers, and full automation packages that connect to your phone. During design we walk through which upgrades align with your goals.",
      },
      {
        question: "Can we add a spa or tanning ledge?",
        answer:
          "Many fiberglass models include built-in benches and tanning ledges. We can also integrate standalone spas, water features, or custom lounge areas to create a complete backyard retreat.",
      },
    ],
  },
  {
    title: "Ownership & Service",
    items: [
      {
        question: "How much maintenance does a fiberglass pool require?",
        answer:
          "Fiberglass pools are the lowest maintenance option. The smooth gel coat resists algae, and you’ll spend less time balancing chemicals. We provide start-up training plus optional seasonal service packages.",
      },
      {
        question: "Do you offer openings, closings, and ongoing service?",
        answer:
          "We do. SK Pool offers seasonal openings, winterizing, water care visits, and emergency service for all of our installations. You can choose à la carte service or subscribe to a maintenance plan.",
      },
      {
        question: "What warranties are included?",
        answer:
          "Our Canadian-made shells include structural and surface warranties. We register your equipment warranties and keep documentation on file so you have support long after installation day.",
      },
    ],
  },
  {
    title: "Financing & Budget",
    items: [
      {
        question: "Do you provide financing options?",
        answer:
          "We partner with Canadian lenders who specialize in home improvement projects. We can connect you with financing options and help prepare supporting documents once we finalize your proposal.",
      },
      {
        question: "What’s included in an SK Pool project quote?",
        answer:
          "Your quote covers design, permitting, excavation, fiberglass shell, equipment, plumbing, backfill, and standard decking. We also outline optional upgrades so you can plan a complete backyard project.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-sky-400/20 px-4 py-1 text-sm font-medium uppercase tracking-wide text-sky-100">
            FAQ
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Answers to your SK Pool questions.
          </h1>
          <p className="text-lg text-slate-100">
            Whether you&apos;re planning your first pool or comparing options, these FAQs explain how our Canadian-made fiberglass installations work in Saskatchewan&apos;s climate.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 mb-20 max-w-5xl px-6 md:px-8">
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{section.title}</h2>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => {
                  const accordionId = `faq-${sectionIndex}-${itemIndex}`;

                  return (
                    <details
                      key={item.question}
                      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition"
                    >
                      <summary
                        className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900 md:text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        aria-controls={`${accordionId}-content`}
                      >
                        <span>{item.question}</span>
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <div id={`${accordionId}-content`} className="mt-4 text-base text-slate-600">
                        {item.answer}
                      </div>
                    </details>
                  );
                })}
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

export default FAQPage;


