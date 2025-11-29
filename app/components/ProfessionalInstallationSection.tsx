"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Wrench, CalendarClock } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Fully Licensed & Insured",
    description: "Peace of mind knowing your project is handled by qualified pros.",
    Icon: ShieldCheck,
  },
  {
    title: "Permits, Plumbing & Electrical Included",
    description: "We coordinate every technical detail so you don’t have to.",
    Icon: Wrench,
  },
  {
    title: "On-Time, On-Budget Delivery",
    description: "Reliable scheduling keeps your project running smoothly from start to finish.",
    Icon: CalendarClock,
  },
];

const ProfessionalInstallationSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <div className="relative mx-auto w-full max-w-xl md:mx-0 md:flex-1">
          <div className="relative overflow-hidden rounded-[40px] bg-slate-200 shadow-xl">
            <Image
              src="/images/Upsilon (8).jpg"
              alt="SK Pool installer working beside a fiberglass pool"
              width={720}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
            {/* <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-slate-900/80 px-6 py-4 text-white backdrop-blur">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-sky-300">
                  <span className="text-lg">★★★★★</span>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  200+ Saskatchewan homeowners trust SK Pool
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="md:flex-1">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-sky-700">
            Our Service
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Professional Pool Installation
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether your backyard vision calls for a custom fiberglass pool or an efficient
            family-friendly design, SK Pool manages the entire installation with clear communication
            and dependable timelines.
          </p>
          <div className="mt-8 space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 sm:flex-row sm:items-start sm:gap-5"
              >
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <feature.Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInstallationSection;

