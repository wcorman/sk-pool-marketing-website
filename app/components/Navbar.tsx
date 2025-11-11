"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Pool Selector", href: "/pool-selector" },
  { label: "Why Fiberglass?", href: "/why-fiberglass", hasDropdown: true },
  { label: "Upgrades", href: "/upgrades", hasDropdown: true },
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

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
    aria-hidden="true"
  >
    <path
      d="M4 4C4 8.418 7.582 12 12 12H13C13.552 12 14 12.448 14 13V15.5C14 16.052 14.448 16.5 15 16.5H17.5C18.052 16.5 18.5 16.052 18.5 15.5V12.5C18.5 6.149 13.351 1 7 1H3.5C2.948 1 2.5 1.448 2.5 2V5.5C2.5 6.052 2.948 6.5 3.5 6.5H6.5C7.052 6.5 7.5 6.948 7.5 7.5V8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8.5C14.5 9 15 9.5 15.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 6.5C16.8 7.3 17.5 8.2 18 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();

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
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center text-[#1e3a8a] font-semibold text-[15px] hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            tabIndex={0}
            aria-label={item.hasDropdown ? `${item.label} menu` : item.label}
            aria-expanded={item.hasDropdown ? false : undefined}
            aria-haspopup={item.hasDropdown ? true : undefined}
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon />}
          </a>
        ))}
      </div>

      {/* Phone CTA - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:flex items-center min-w-0 flex-shrink-0">
        <a
          href="tel:8557807665"
          className="flex items-center px-5 py-2.5 bg-white border-2 border-blue-600 rounded-[50px] text-[#1e3a8a] font-semibold text-[15px] hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          aria-label="Call us at 855-780-7665"
          tabIndex={0}
        >
          <PhoneIcon />
          <span>855.780.7665</span>
        </a>
      </div>

      {/* Mobile Phone Button - Shown on mobile */}
      <a
        href="tel:8557807665"
        className="lg:hidden ml-4 p-2.5 text-[#1e3a8a] hover:bg-blue-50 rounded-full border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        aria-label="Call us at 855-780-7665"
        tabIndex={0}
      >
        <PhoneIcon />
      </a>

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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-[#1e3a8a] font-semibold text-base hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  onClick={handleCloseMenu}
                  role="menuitem"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDownIcon />}
                </a>
              ))}
            </div>
            <div className="px-6 pb-6">
              <a
                href="tel:8557807665"
                className="flex items-center justify-center gap-2 rounded-[50px] bg-[#1e3a8a] px-6 py-3 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                onClick={handleCloseMenu}
              >
                <PhoneIcon />
                <span>Call 855.780.7665</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

