"use client";

import Image from "next/image";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { CalendarCheck, PhoneCall } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Our Process", href: "/our-process" },
  { label: "Above-Ground Pools", href: "/above-ground-pools" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
    aria-hidden="true"
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const linkId = "calendly-widget-css";
    if (document.getElementById(linkId)) {
      return;
    }

    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  const handleOpenCalendly = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/skpool-info/30min?utm_source=website",
    });
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      className="relative w-full max-w-7xl mx-auto px-8 py-4 flex items-center justify-between bg-white rounded-[50px] shadow-lg border border-blue-100"
      role="navigation"
      aria-label="Main navigation"
    >
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      {/* Logo Section */}
      <div className="flex items-center min-w-0 flex-shrink-0">
        <a
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
          aria-label="SK Pool Home"
          tabIndex={0}
        >
          <Image
            src="/images/sk-pool-logo.png"
            alt="SK Pool Logo"
            width={140}
            height={70}
            className="h-auto w-auto"
            priority
          />
        </a>
      </div>

      {/* Navigation Menu */}
      <div className="hidden lg:flex items-center gap-8 mx-8 flex-1 justify-center">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 ${
                isActive ? "text-blue-900 underline underline-offset-4" : "text-[#1e3a8a] hover:text-blue-700"
              }`}
              tabIndex={0}
              aria-label={item.hasDropdown ? `${item.label} menu` : item.label}
              aria-expanded={item.hasDropdown ? false : undefined}
              aria-haspopup={item.hasDropdown ? true : undefined}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon />}
            </a>
          );
        })}
      </div>

      {/* Phone CTA - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:flex items-center min-w-0 flex-shrink-0">
        <button
          type="button"
          onClick={handleOpenCalendly}
          className="flex items-center px-5 py-2.5 bg-white border-2 border-blue-600 rounded-[50px] text-[#1e3a8a] font-semibold text-[15px] hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          aria-label="Book a consultation"
        >
          <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
          <span>Book a Consultation</span>
        </button>
      </div>

      {/* Mobile Phone Button - Shown on mobile */}
      <button
        type="button"
        onClick={handleOpenCalendly}
        className="lg:hidden ml-4 p-2.5 text-[#1e3a8a] hover:bg-blue-50 rounded-full border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        aria-label="Book a consultation"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Mobile Menu Button - Placeholder for future mobile menu */}
      <button
        className="lg:hidden ml-2 p-2 text-[#1e3a8a] hover:bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-controls={mobileMenuId}
        aria-expanded={isMenuOpen}
        tabIndex={0}
        onClick={handleToggleMenu}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            aria-hidden="true"
            onClick={handleCloseMenu}
          />
          <div
            id={mobileMenuId}
            className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 w-[92%] max-w-sm rounded-3xl border border-blue-100 bg-white shadow-2xl focus:outline-none"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <a
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
                aria-label="SK Pool Home"
                onClick={handleCloseMenu}
              >
                <Image
                  src="/images/sk-pool-logo.png"
                  alt="SK Pool Logo"
                  width={120}
                  height={60}
                  className="h-auto w-auto"
                  priority
                />
              </a>
              <button
                className="p-2 text-[#1e3a8a] hover:bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                onClick={handleToggleMenu}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                      isActive ? "bg-blue-50 text-blue-900" : "text-[#1e3a8a] hover:bg-blue-50"
                    }`}
                    onClick={handleCloseMenu}
                    role="menuitem"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDownIcon />}
                  </a>
                );
              })}
            </div>
            <div className="px-6 pb-6">
            <button
              type="button"
              onClick={handleOpenCalendly}
              className="flex items-center px-5 py-2.5 bg-white border-2 border-blue-600 rounded-[50px] text-[#1e3a8a] font-semibold text-[15px] hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Book a consultation"
            >
              <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
              <span>Book a Consultation</span>
            </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

