"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import LathamGridEmbed from "../components/LathamGridEmbed";

const PoolSelectionPage = () => {
  const pathname = usePathname();

  // Scroll to top when page loads or pathname changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, [pathname]);

  return (
    <main className="bg-white pb-20">
      <section className="relative isolate overflow-hidden bg-sky-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 opacity-90" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center md:px-8">
          <span className="inline-flex w-fit items-center justify-center self-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
            Pool Selection
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Explore our Canadian-made pool collection.
          </h1>
          <p className="text-lg text-slate-100">
            Browse our selection of premium fiberglass pools, each crafted with quality and designed for Saskatchewan homes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
            <span className="rounded-full border border-white/30 px-4 py-1">Canadian-made pools</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Premium quality</span>
            <span className="rounded-full border border-white/30 px-4 py-1">Multiple sizes</span>
          </div>
        </div>
      </section>

      <LathamGridEmbed />

      <CTASection />
      <Footer />
    </main>
  );
};

export default PoolSelectionPage;
