import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <section className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 py-16">
        {/* Subtle wave accent - on brand */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url(/images/just-waves.webp)",
            backgroundRepeat: "repeat",
            backgroundSize: "120%",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-lg w-full">
          <div className="rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-sm text-center md:px-12 md:py-16">
            {/* 404 number - bold, brand blue */}
            <p
              className="text-7xl md:text-8xl font-bold leading-none text-blue-600/90 tracking-tight"
              aria-hidden
            >
              404
            </p>

            <h1 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
              This page took a dive
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              The page you&apos;re looking for isn&apos;t here. Head back to the pool and we&apos;ll get you back on track.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Home className="h-5 w-5" aria-hidden />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
