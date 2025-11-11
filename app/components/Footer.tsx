"use client";

import Image from "next/image";
import { FormEvent } from "react";

const Footer = () => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6">
              <a href="/" className="inline-flex items-center gap-3" aria-label="SK Pool home">
                <Image src="/images/sk-pool-logo.png" alt="SK Pool" width={200} height={80} className="h-20 w-auto" />
              </a>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-slate-700">
                  <li>
                    <a href="/" className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pool"
                      className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      Pool
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="max-w-md">
              <p className="text-2xl font-semibold text-slate-900">
                Subscribe to our newsletter.
              </p>
              <p className="mt-2 text-base text-slate-500">
                Stay up to date on Canadian-made pool builds and seasonal service tips from SK Pool.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 pl-6"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="flex-1 border-none bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  aria-label="Submit email"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10H16M16 10L12 6M16 10L12 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex md:items-center md:justify-between">
            <p>Copyright © {new Date().getFullYear()} SK Pool. All rights reserved.</p>
            <div className="mt-4 flex flex-wrap items-center gap-6 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

