"use client";

import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer";
import { createElement } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type StripeBuyButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const StripeBuyButton = (props: StripeBuyButtonProps) => {
  return createElement("stripe-buy-button" as unknown as string, props);
};

const benefits = [
  {
    title: "Smooth, Comfortable Surface",
    description:
      "Fiberglass shells arrive with a non-abrasive gel coat finish that feels great underfoot and resists algae growth, so you spend less time scrubbing and more time swimming.",
  },
  {
    title: "Fast Installation",
    description:
      "Pre-molded Canadian-made shells let our crew install your pool in weeks instead of months, minimizing disruption in your backyard and shortening the path to first splash.",
  },
  {
    title: "Lower Lifetime Maintenance",
    description:
      "The durable gel coat eliminates the need for liner replacements or resurfacing, holding heat well and helping you save on chemicals and energy through every season.",
  },
];

const highlights = [
  {
    title: "Built for Saskatchewan Seasons",
    description:
      "Canadian-made fiberglass pools stand up to freeze-thaw cycles with flexible yet strong shells. Their single-piece construction prevents shifting and cracking when winter settles in.",
    image: "/images/Upsilon (2).jpg",
    alt: "Fiberglass pool surrounded by evergreen trees",
  },
  {
    title: "Designs That Fit Your Backyard",
    description:
      "From compact plunge pools to family-friendly options with built-in benches, we help you choose a shape that suits your space, lifestyle, and maintenance goals.",
    image: "/images/thumbnail_image5.jpg",
    alt: "Modern backyard fiberglass pool with lounge chairs",
  },
];

const WhyFiberglassPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src="/images/Gamma (8).jpeg"
          alt="Family enjoying a fiberglass pool at sunset"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-sky-500 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Why Fiberglass
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            A smarter way to bring a resort-ready pool home to Saskatchewan.
          </h1>
          <p className="text-lg text-slate-100">
            SK Pool installs premium fiberglass pools that arrive ready to set, giving you a beautiful, durable backyard centerpiece without the long wait or heavy upkeep of traditional builds.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <div className="rounded-full border border-white/40 px-4 py-1">
              Canadian made shells
            </div>
            <div className="rounded-full border border-white/40 px-4 py-1">
              Industry-leading warranties
            </div>
            <div className="rounded-full border border-white/40 px-4 py-1">
              Rapid installation timeline
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Why homeowners choose fiberglass pools.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Every SK Pool project blends lasting craftsmanship with effortless daily enjoyment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-4 text-base text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 flex max-w-6xl flex-col gap-16 px-6 md:px-8">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm shadow-slate-100 md:flex-row"
          >
            <div className={`relative h-64 w-full md:h-auto md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <Image
                src={highlight.image}
                alt={highlight.alt}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={`flex flex-1 flex-col justify-center gap-4 p-8 md:p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="text-2xl font-semibold text-slate-900">{highlight.title}</h3>
              <p className="text-base text-slate-600">{highlight.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100 md:grid-cols-2 md:p-12">
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-slate-900">
              Ready when the snow melts.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We prepare the site while your fiberglass shell is crafted in Canada. Once it arrives, SK Pool sets, levels, and plumbs quickly so you can enjoy your backyard oasis on the first warm weekend.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                One-piece shells reduce on-site construction time.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                Insulated walls retain heat for longer swim seasons.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                Built-in benches and steps make every pool family-friendly.
              </li>
            </ul>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/Iota (4).png"
              alt="A fiberglass pool installation in progress"
              fill
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl rounded-3xl border border-sky-100 bg-sky-50 px-6 py-16 text-center shadow-sm shadow-sky-100 md:px-12">
        <h2 className="text-3xl font-semibold text-slate-900">Bring a fiberglass pool home with SK Pool.</h2>
        <p className="mt-4 text-lg text-slate-600">
          Tell us about your dream backyard and we&apos;ll share layouts, timelines, and pricing that fit your goals.
        </p>
        <div className="mt-6 flex justify-center">
          <Script async src="https://js.stripe.com/v3/buy-button.js" />
          <StripeBuyButton
            buy-button-id="buy_btn_1SS6eYEYa5qOXbfqIbAGUhw8"
            publishable-key="pk_live_LgGJSFG3Xj8yb3le23h4QPLN"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default WhyFiberglassPage;

