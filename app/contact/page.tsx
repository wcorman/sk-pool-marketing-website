import Script from "next/script";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const contactDetails = [
  {
    value: "Saskatoon • Regina • Moose Jaw • Prince Albert • Surrounding communities",
    description: "Mobile crews travel across Saskatchewan for installations, openings, and maintenance.",
  },
];

const faqLinks = [
  { label: "View pricing", href: "/pricing" },
  { label: "Explore our process", href: "/our-process" },
  { label: "Read FAQs", href: "/faq" },
];

const ContactPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/80 to-blue-900 opacity-95" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Contact
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">We'd love to hear from you.</h1>
          <p className="text-lg text-slate-100">
            Let us know how we can help.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 mb-20 max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <Script src="https://js-na3.hsforms.net/forms/embed/342673527.js" strategy="afterInteractive" defer />
              <div
                className="hs-form-frame rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 md:p-6"
                data-region="na3"
                data-form-id="456754a1-eae7-47d3-9ac6-7b14e3d2ed18"
                data-portal-id="342673527"
              />

          <aside className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">Service Area</h2>
              <div className="mt-4 space-y-5 text-base text-slate-600">
                {contactDetails.map((detail, index) => (
                  <div key={index}>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{detail.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">Helpful resources</h2>
              <ul className="mt-4 space-y-3 text-base text-sky-600">
                {faqLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="inline-flex items-center gap-2 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      href={link.href}
                    >
                      <span>→</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default ContactPage;


