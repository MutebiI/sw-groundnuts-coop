"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
            SWG
          </div>
          <span className="text-lg font-bold tracking-tight text-amber-800">
            SW Groundnuts
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-colors duration-200
              ${
                pathname === link.href
                  ? "text-amber-700"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl font-light">
            {open ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[600px] border-t border-amber-100" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-white px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-all duration-200
              ${
                pathname === link.href
                  ? "bg-amber-50 font-semibold text-amber-700"
                  : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}