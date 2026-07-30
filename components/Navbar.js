"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let timeout;

  const openMenu = () => {
    clearTimeout(timeout);
    setOpen(true);
  };

  const closeMenu = () => {
    timeout = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-black tracking-wide hover:text-red-500 transition"
        >
          NUVI WELDING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 font-semibold">

          <Link
            href="/"
            className="text-white hover:text-red-500 transition"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 text-white hover:text-red-500 transition">

              Services

              <ChevronDown
                size={18}
                className={`transition duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />

            </button>

            <div
              className={`absolute left-0 top-12 w-80 rounded-2xl bg-white shadow-2xl overflow-hidden transition-all duration-300 ${
                open
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              {[
                ["Emergency Mobile Welding", "/emergency-mobile-welding"],
                ["Commercial Welding", "/commercial-welding"],
                ["Industrial Welding", "/industrial-welding"],
                ["Heavy Equipment Welding", "/heavy-equipment-welding"],
                ["Structural Steel Repair", "/structural-steel-repair"],
                ["Gate Repair", "/gate-repair"],
                ["Apartment Complex Welding", "/apartment-complex-welding"],
              ].map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-6 py-4 text-gray-800 hover:bg-red-600 hover:text-white transition"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/projects"
            className="text-white hover:text-red-500 transition"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="text-white hover:text-red-500 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Call Button */}
        <a
          href="tel:4698455728"
          className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-red-600/30"
        >
          <Phone size={18} />
          Call 24/7
        </a>

      </div>
    </header>
  );
}