"use client";

import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/our-process" },
  { label: "Above-Ground Pools", href: "/above-ground-pools" },
  { label: "Pool Selection", href: "/pool-selection" },
  { label: "Why Fiberglass?", href: "/why-fiberglass" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {

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
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>Copyright © {new Date().getFullYear()} SK Pool. All rights reserved.</p>
            {/* Social links hidden for now
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
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

