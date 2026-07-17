// // // // // // // // // "use client";

// // // // // // // // // import { useState } from "react";
// // // // // // // // // import Image from "next/image";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { usePathname } from "next/navigation";

// // // // // // // // // export default function Navbar() {
// // // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // // //   const pathname = usePathname();

// // // // // // // // //   const navLinks = [
// // // // // // // // //     { name: "About", href: "/about" },
// // // // // // // // //     { name: "Products", href: "/products" },
// // // // // // // // //     { name: "Quality", href: "/quality" },
// // // // // // // // //     { name: "Partners", href: "/partners" },
// // // // // // // // //     { name: "Contact", href: "/contact" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // // // // // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // // // // // // // //         {/* Logo */}
// // // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // // // // // // // //             SWG
// // // // // // // // //           </div>
// // // // // // // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // // // // // // //             SW Groundnuts
// // // // // // // // //           </span>
// // // // // // // // //         </Link>

// // // // // // // // //         {/* Desktop Navigation */}
// // // // // // // // //         <div className="hidden items-center gap-8 md:flex">
// // // // // // // // //           {navLinks.map((link) => (
// // // // // // // // //             <Link
// // // // // // // // //               key={link.name}
// // // // // // // // //               href={link.href}
// // // // // // // // //               className={`relative font-medium transition-colors duration-200
// // // // // // // // //               ${
// // // // // // // // //                 pathname === link.href
// // // // // // // // //                   ? "text-amber-700"
// // // // // // // // //                   : "text-slate-600 hover:text-amber-700"
// // // // // // // // //               }`}
// // // // // // // // //             >
// // // // // // // // //               {link.name}
// // // // // // // // //               {pathname === link.href && (
// // // // // // // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
// // // // // // // // //               )}
// // // // // // // // //             </Link>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* CTA Button */}
// // // // // // // // //         <div className="hidden md:block">
// // // // // // // // //           <Link
// // // // // // // // //             href="/contact"
// // // // // // // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // // // // // // //           >
// // // // // // // // //             Get in Touch
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Mobile Toggle */}
// // // // // // // // //         <button
// // // // // // // // //           onClick={() => setOpen(!open)}
// // // // // // // // //           className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50 md:hidden"
// // // // // // // // //           aria-label="Toggle menu"
// // // // // // // // //         >
// // // // // // // // //           <span className="text-2xl font-light">
// // // // // // // // //             {open ? "✕" : "☰"}
// // // // // // // // //           </span>
// // // // // // // // //         </button>

// // // // // // // // //       </div>

// // // // // // // // //       {/* Mobile Menu */}
// // // // // // // // //       <div
// // // // // // // // //         className={`overflow-hidden transition-all duration-300 md:hidden ${
// // // // // // // // //           open ? "max-h-[600px] border-t border-amber-100" : "max-h-0"
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         <div className="space-y-1 bg-white px-5 py-4">
// // // // // // // // //           {navLinks.map((link) => (
// // // // // // // // //             <Link
// // // // // // // // //               key={link.name}
// // // // // // // // //               href={link.href}
// // // // // // // // //               onClick={() => setOpen(false)}
// // // // // // // // //               className={`block rounded-lg px-4 py-3 transition-all duration-200
// // // // // // // // //               ${
// // // // // // // // //                 pathname === link.href
// // // // // // // // //                   ? "bg-amber-50 font-semibold text-amber-700"
// // // // // // // // //                   : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // // // // // // //               }`}
// // // // // // // // //             >
// // // // // // // // //               {link.name}
// // // // // // // // //             </Link>
// // // // // // // // //           ))}
// // // // // // // // //           <Link
// // // // // // // // //             href="/contact"
// // // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // // //             className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // // // // // // //           >
// // // // // // // // //             Get in Touch
// // // // // // // // //           </Link>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { usePathname } from "next/navigation";

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // //   const pathname = usePathname();
// // // // // // // //   const mobileMenuRef = useRef<HTMLDivElement>(null);

// // // // // // // //   const navLinks = [
// // // // // // // //     { name: "About", href: "/about" },
// // // // // // // //     { name: "Products", href: "/products" },
// // // // // // // //     { name: "Quality", href: "/quality" },
// // // // // // // //     { name: "Partners", href: "/partners" },
// // // // // // // //     { name: "Contact", href: "/contact" },
// // // // // // // //   ];

// // // // // // // //   // Close mobile menu when clicking outside
// // // // // // // //   useEffect(() => {
// // // // // // // //     function handleClickOutside(event: MouseEvent) {
// // // // // // // //       if (
// // // // // // // //         mobileMenuRef.current &&
// // // // // // // //         !mobileMenuRef.current.contains(event.target as Node)
// // // // // // // //       ) {
// // // // // // // //         setOpen(false);
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     if (open) {
// // // // // // // //       document.addEventListener("mousedown", handleClickOutside);
// // // // // // // //     } else {
// // // // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // // // //     }

// // // // // // // //     return () => {
// // // // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // // // //     };
// // // // // // // //   }, [open]);

// // // // // // // //   // Close mobile menu when scrolling
// // // // // // // //   useEffect(() => {
// // // // // // // //     function handleScroll() {
// // // // // // // //       if (open) {
// // // // // // // //         setOpen(false);
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // // //     };
// // // // // // // //   }, [open]);

// // // // // // // //   return (
// // // // // // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // // // // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // // // // // // //         {/* Logo */}
// // // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // // // // // // //             SWG
// // // // // // // //           </div>
// // // // // // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // // // // // //             SW Groundnuts
// // // // // // // //           </span>
// // // // // // // //         </Link>

// // // // // // // //         {/* Desktop Navigation */}
// // // // // // // //         <div className="hidden items-center gap-8 md:flex">
// // // // // // // //           {navLinks.map((link) => (
// // // // // // // //             <Link
// // // // // // // //               key={link.name}
// // // // // // // //               href={link.href}
// // // // // // // //               className={`relative font-medium transition-colors duration-200
// // // // // // // //               ${
// // // // // // // //                 pathname === link.href
// // // // // // // //                   ? "text-amber-700"
// // // // // // // //                   : "text-slate-600 hover:text-amber-700"
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               {link.name}
// // // // // // // //               {pathname === link.href && (
// // // // // // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
// // // // // // // //               )}
// // // // // // // //             </Link>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* CTA Button */}
// // // // // // // //         <div className="hidden md:block">
// // // // // // // //           <Link
// // // // // // // //             href="/contact"
// // // // // // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // // // // // //           >
// // // // // // // //             Get in Touch
// // // // // // // //           </Link>
// // // // // // // //         </div>

// // // // // // // //         {/* Mobile Toggle */}
// // // // // // // //         <button
// // // // // // // //           onClick={() => setOpen(!open)}
// // // // // // // //           className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50 md:hidden"
// // // // // // // //           aria-label="Toggle menu"
// // // // // // // //         >
// // // // // // // //           <span className="text-2xl font-light">
// // // // // // // //             {open ? "✕" : "☰"}
// // // // // // // //           </span>
// // // // // // // //         </button>

// // // // // // // //       </div>

// // // // // // // //       {/* Mobile Menu */}
// // // // // // // //       <div
// // // // // // // //         ref={mobileMenuRef}
// // // // // // // //         className={`overflow-hidden transition-all duration-300 md:hidden ${
// // // // // // // //           open ? "max-h-[600px] border-t border-amber-100" : "max-h-0"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         <div className="space-y-1 bg-white px-5 py-4">
// // // // // // // //           {navLinks.map((link) => (
// // // // // // // //             <Link
// // // // // // // //               key={link.name}
// // // // // // // //               href={link.href}
// // // // // // // //               onClick={() => setOpen(false)}
// // // // // // // //               className={`block rounded-lg px-4 py-3 transition-all duration-200
// // // // // // // //               ${
// // // // // // // //                 pathname === link.href
// // // // // // // //                   ? "bg-amber-50 font-semibold text-amber-700"
// // // // // // // //                   : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               {link.name}
// // // // // // // //             </Link>
// // // // // // // //           ))}
// // // // // // // //           <Link
// // // // // // // //             href="/contact"
// // // // // // // //             onClick={() => setOpen(false)}
// // // // // // // //             className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // // // // // //           >
// // // // // // // //             Get in Touch
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { usePathname } from "next/navigation";

// // // // // // // export default function Navbar() {
// // // // // // //   const [open, setOpen] = useState(false);
// // // // // // //   const pathname = usePathname();
// // // // // // //   const menuRef = useRef<HTMLDivElement>(null);
// // // // // // //   const buttonRef = useRef<HTMLButtonElement>(null);

// // // // // // //   const navLinks = [
// // // // // // //     { name: "About", href: "/about" },
// // // // // // //     { name: "Products", href: "/products" },
// // // // // // //     { name: "Quality", href: "/quality" },
// // // // // // //     { name: "Partners", href: "/partners" },
// // // // // // //     { name: "Contact", href: "/contact" },
// // // // // // //   ];

// // // // // // //   // Close menu when clicking outside
// // // // // // //   useEffect(() => {
// // // // // // //     function handleClickOutside(event: MouseEvent) {
// // // // // // //       const target = event.target as Node;
      
// // // // // // //       // Check if click is outside menu AND outside the toggle button
// // // // // // //       if (
// // // // // // //         menuRef.current &&
// // // // // // //         buttonRef.current &&
// // // // // // //         !menuRef.current.contains(target) &&
// // // // // // //         !buttonRef.current.contains(target)
// // // // // // //       ) {
// // // // // // //         setOpen(false);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     if (open) {
// // // // // // //       document.addEventListener("mousedown", handleClickOutside);
// // // // // // //       document.addEventListener("touchstart", handleClickOutside);
// // // // // // //     } else {
// // // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // // // // //     }

// // // // // // //     return () => {
// // // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // // // // //     };
// // // // // // //   }, [open]);

// // // // // // //   // Close menu when scrolling
// // // // // // //   useEffect(() => {
// // // // // // //     function handleScroll() {
// // // // // // //       if (open) {
// // // // // // //         setOpen(false);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // // //     return () => {
// // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // //     };
// // // // // // //   }, [open]);

// // // // // // //   return (
// // // // // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // // // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // // // // // //         {/* Logo */}
// // // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // // // // // //             SWG
// // // // // // //           </div>
// // // // // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // // // // //             SW Groundnuts
// // // // // // //           </span>
// // // // // // //         </Link>

// // // // // // //         {/* Desktop Navigation */}
// // // // // // //         <div className="hidden items-center gap-8 md:flex">
// // // // // // //           {navLinks.map((link) => (
// // // // // // //             <Link
// // // // // // //               key={link.name}
// // // // // // //               href={link.href}
// // // // // // //               className={`relative font-medium transition-colors duration-200
// // // // // // //               ${
// // // // // // //                 pathname === link.href
// // // // // // //                   ? "text-amber-700"
// // // // // // //                   : "text-slate-600 hover:text-amber-700"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {link.name}
// // // // // // //               {pathname === link.href && (
// // // // // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
// // // // // // //               )}
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* CTA Button */}
// // // // // // //         <div className="hidden md:block">
// // // // // // //           <Link
// // // // // // //             href="/contact"
// // // // // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // // // // //           >
// // // // // // //             Get in Touch
// // // // // // //           </Link>
// // // // // // //         </div>

// // // // // // //         {/* Mobile Toggle */}
// // // // // // //         <button
// // // // // // //           ref={buttonRef}
// // // // // // //           onClick={() => setOpen(!open)}
// // // // // // //           className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50 md:hidden"
// // // // // // //           aria-label="Toggle menu"
// // // // // // //         >
// // // // // // //           <span className="text-2xl font-light">
// // // // // // //             {open ? "✕" : "☰"}
// // // // // // //           </span>
// // // // // // //         </button>

// // // // // // //       </div>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       <div
// // // // // // //         ref={menuRef}
// // // // // // //         className={`overflow-hidden transition-all duration-300 md:hidden ${
// // // // // // //           open ? "max-h-[600px] border-t border-amber-100" : "max-h-0"
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         <div className="space-y-1 bg-white px-5 py-4">
// // // // // // //           {navLinks.map((link) => (
// // // // // // //             <Link
// // // // // // //               key={link.name}
// // // // // // //               href={link.href}
// // // // // // //               onClick={() => setOpen(false)}
// // // // // // //               className={`block rounded-lg px-4 py-3 transition-all duration-200
// // // // // // //               ${
// // // // // // //                 pathname === link.href
// // // // // // //                   ? "bg-amber-50 font-semibold text-amber-700"
// // // // // // //                   : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {link.name}
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //           <Link
// // // // // // //             href="/contact"
// // // // // // //             onClick={() => setOpen(false)}
// // // // // // //             className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // // // // //           >
// // // // // // //             Get in Touch
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { usePathname } from "next/navigation";

// // // // // // export default function Navbar() {
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const pathname = usePathname();
// // // // // //   const menuRef = useRef<HTMLDivElement>(null);

// // // // // //   const navLinks = [
// // // // // //     { name: "About", href: "/about" },
// // // // // //     { name: "Products", href: "/products" },
// // // // // //     { name: "Quality", href: "/quality" },
// // // // // //     { name: "Partners", href: "/partners" },
// // // // // //     { name: "Contact", href: "/contact" },
// // // // // //   ];

// // // // // //   // Close menu when clicking outside
// // // // // //   useEffect(() => {
// // // // // //     function handleClickOutside(event: MouseEvent | TouchEvent) {
// // // // // //       const target = event.target as Node;
      
// // // // // //       // Check if click is outside the menu
// // // // // //       if (menuRef.current && !menuRef.current.contains(target)) {
// // // // // //         setOpen(false);
// // // // // //       }
// // // // // //     }

// // // // // //     if (open) {
// // // // // //       document.addEventListener("mousedown", handleClickOutside);
// // // // // //       document.addEventListener("touchstart", handleClickOutside);
// // // // // //     } else {
// // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // // // //     };
// // // // // //   }, [open]);

// // // // // //   // Close menu when scrolling
// // // // // //   useEffect(() => {
// // // // // //     function handleScroll() {
// // // // // //       if (open) {
// // // // // //         setOpen(false);
// // // // // //       }
// // // // // //     }

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => {
// // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // //     };
// // // // // //   }, [open]);

// // // // // //   return (
// // // // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // // // // //         {/* Logo */}
// // // // // //         <Link href="/" className="flex items-center gap-3">
// // // // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // // // // //             SWG
// // // // // //           </div>
// // // // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // // // //             SW Groundnuts
// // // // // //           </span>
// // // // // //         </Link>

// // // // // //         {/* Desktop Navigation */}
// // // // // //         <div className="hidden items-center gap-8 md:flex">
// // // // // //           {navLinks.map((link) => (
// // // // // //             <Link
// // // // // //               key={link.name}
// // // // // //               href={link.href}
// // // // // //               className={`relative font-medium transition-colors duration-200
// // // // // //               ${
// // // // // //                 pathname === link.href
// // // // // //                   ? "text-amber-700"
// // // // // //                   : "text-slate-600 hover:text-amber-700"
// // // // // //               }`}
// // // // // //             >
// // // // // //               {link.name}
// // // // // //               {pathname === link.href && (
// // // // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
// // // // // //               )}
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* CTA Button */}
// // // // // //         <div className="hidden md:block">
// // // // // //           <Link
// // // // // //             href="/contact"
// // // // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // // // //           >
// // // // // //             Get in Touch
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         {/* Mobile Toggle */}
// // // // // //         <button
// // // // // //           onClick={() => setOpen(!open)}
// // // // // //           className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50 md:hidden"
// // // // // //           aria-label="Toggle menu"
// // // // // //         >
// // // // // //           <span className="text-2xl font-light">
// // // // // //             {open ? "✕" : "☰"}
// // // // // //           </span>
// // // // // //         </button>

// // // // // //       </div>

// // // // // //       {/* Mobile Menu */}
// // // // // //       <div
// // // // // //         ref={menuRef}
// // // // // //         className={`overflow-hidden transition-all duration-300 md:hidden ${
// // // // // //           open ? "max-h-[600px] border-t border-amber-100" : "max-h-0"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <div className="space-y-1 bg-white px-5 py-4">
// // // // // //           {navLinks.map((link) => (
// // // // // //             <Link
// // // // // //               key={link.name}
// // // // // //               href={link.href}
// // // // // //               onClick={() => setOpen(false)}
// // // // // //               className={`block rounded-lg px-4 py-3 transition-all duration-200
// // // // // //               ${
// // // // // //                 pathname === link.href
// // // // // //                   ? "bg-amber-50 font-semibold text-amber-700"
// // // // // //                   : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // // // //               }`}
// // // // // //             >
// // // // // //               {link.name}
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //           <Link
// // // // // //             href="/contact"
// // // // // //             onClick={() => setOpen(false)}
// // // // // //             className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // // // //           >
// // // // // //             Get in Touch
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // }

// // // // // import { useState, useEffect, useRef } from "react";
// // // // // import Link from "next/link";
// // // // // import { usePathname } from "next/navigation";

// // // // // export default function Navbar() {
// // // // //   const [open, setOpen] = useState(false);
// // // // //   const pathname = usePathname();

// // // // //   // Ref that contains BOTH the button and mobile menu
// // // // //   const navRef = useRef<HTMLDivElement>(null);

// // // // //   const navLinks = [
// // // // //     { name: "About", href: "/about" },
// // // // //     { name: "Products", href: "/products" },
// // // // //     { name: "Quality", href: "/quality" },
// // // // //     { name: "Partners", href: "/partners" },
// // // // //     { name: "Contact", href: "/contact" },
// // // // //   ];

// // // // //   // Close menu when clicking outside
// // // // //   useEffect(() => {
// // // // //     function handleClickOutside(event: MouseEvent | TouchEvent) {
// // // // //       const target = event.target as Node;

// // // // //       if (navRef.current && !navRef.current.contains(target)) {
// // // // //         setOpen(false);
// // // // //       }
// // // // //     }

// // // // //     if (open) {
// // // // //       document.addEventListener("mousedown", handleClickOutside);
// // // // //       document.addEventListener("touchstart", handleClickOutside);
// // // // //     }

// // // // //     return () => {
// // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // // //     };
// // // // //   }, [open]);

// // // // //   // Close menu when scrolling
// // // // //   useEffect(() => {
// // // // //     function handleScroll() {
// // // // //       setOpen(false);
// // // // //     }

// // // // //     window.addEventListener("scroll", handleScroll);

// // // // //     return () => {
// // // // //       window.removeEventListener("scroll", handleScroll);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="flex items-center gap-3">
// // // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">
// // // // //             SWG
// // // // //           </div>
// // // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // // //             SW Groundnuts
// // // // //           </span>
// // // // //         </Link>

// // // // //         {/* Desktop Navigation */}
// // // // //         <div className="hidden items-center gap-8 md:flex">
// // // // //           {navLinks.map((link) => (
// // // // //             <Link
// // // // //               key={link.name}
// // // // //               href={link.href}
// // // // //               className={`relative font-medium transition-colors duration-200 ${
// // // // //                 pathname === link.href
// // // // //                   ? "text-amber-700"
// // // // //                   : "text-slate-600 hover:text-amber-700"
// // // // //               }`}
// // // // //             >
// // // // //               {link.name}

// // // // //               {pathname === link.href && (
// // // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600"></span>
// // // // //               )}
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Desktop CTA */}
// // // // //         <div className="hidden md:block">
// // // // //           <Link
// // // // //             href="/contact"
// // // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // // //           >
// // // // //             Get in Touch
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Mobile Button + Menu */}
// // // // //         <div ref={navRef} className="relative md:hidden">
// // // // //           {/* Toggle */}
// // // // //           <button
// // // // //             onClick={() => setOpen((prev) => !prev)}
// // // // //             className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
// // // // //             aria-label="Toggle menu"
// // // // //           >
// // // // //             <span className="text-2xl font-light">
// // // // //               {open ? "✕" : "☰"}
// // // // //             </span>
// // // // //           </button>

// // // // //           {/* Mobile Menu */}
// // // // //           <div
// // // // //             className={`absolute right-0 top-full mt-2 w-72 overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 ${
// // // // //               open
// // // // //                 ? "max-h-[600px] border border-amber-100 opacity-100"
// // // // //                 : "max-h-0 border-0 opacity-0"
// // // // //             }`}
// // // // //           >
// // // // //             <div className="space-y-1 p-4">
// // // // //               {navLinks.map((link) => (
// // // // //                 <Link
// // // // //                   key={link.name}
// // // // //                   href={link.href}
// // // // //                   onClick={() => setOpen(false)}
// // // // //                   className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
// // // // //                     pathname === link.href
// // // // //                       ? "bg-amber-50 font-semibold text-amber-700"
// // // // //                       : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {link.name}
// // // // //                 </Link>
// // // // //               ))}

// // // // //               <Link
// // // // //                 href="/contact"
// // // // //                 onClick={() => setOpen(false)}
// // // // //                 className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // // //               >
// // // // //                 Get in Touch
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // }

// // // // import { useState, useEffect, useRef } from "react";
// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";

// // // // export default function Navbar() {
// // // //   const [open, setOpen] = useState(false);
// // // //   const pathname = usePathname();

// // // //   const menuRef = useRef<HTMLDivElement>(null);
// // // //   const buttonRef = useRef<HTMLButtonElement>(null);

// // // //   const navLinks = [
// // // //     { name: "About", href: "/about" },
// // // //     { name: "Products", href: "/products" },
// // // //     { name: "Quality", href: "/quality" },
// // // //     { name: "Partners", href: "/partners" },
// // // //     { name: "Contact", href: "/contact" },
// // // //   ];

// // // //   // Close menu when clicking outside
// // // //   useEffect(() => {
// // // //     function handleClickOutside(event: MouseEvent | TouchEvent) {
// // // //       const target = event.target as Node;

// // // //       // Do nothing if clicking the menu button
// // // //       if (buttonRef.current?.contains(target)) {
// // // //         return;
// // // //       }

// // // //       // Close if clicking outside menu
// // // //       if (menuRef.current && !menuRef.current.contains(target)) {
// // // //         setOpen(false);
// // // //       }
// // // //     }

// // // //     if (open) {
// // // //       document.addEventListener("mousedown", handleClickOutside);
// // // //       document.addEventListener("touchstart", handleClickOutside);
// // // //     }

// // // //     return () => {
// // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // //       document.removeEventListener("touchstart", handleClickOutside);
// // // //     };
// // // //   }, [open]);

// // // //   // Close menu on scroll
// // // //   useEffect(() => {
// // // //     function handleScroll() {
// // // //       setOpen(false);
// // // //     }

// // // //     window.addEventListener("scroll", handleScroll);

// // // //     return () => {
// // // //       window.removeEventListener("scroll", handleScroll);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // // //         {/* Logo */}
// // // //         <Link href="/" className="flex items-center gap-3">
// // // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // // //             SWG
// // // //           </div>

// // // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // // //             SW Groundnuts
// // // //           </span>
// // // //         </Link>


// // // //         {/* Desktop Navigation */}
// // // //         <div className="hidden items-center gap-8 md:flex">
// // // //           {navLinks.map((link) => (
// // // //             <Link
// // // //               key={link.name}
// // // //               href={link.href}
// // // //               className={`relative font-medium transition-colors duration-200 ${
// // // //                 pathname === link.href
// // // //                   ? "text-amber-700"
// // // //                   : "text-slate-600 hover:text-amber-700"
// // // //               }`}
// // // //             >
// // // //               {link.name}

// // // //               {pathname === link.href && (
// // // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600" />
// // // //               )}
// // // //             </Link>
// // // //           ))}
// // // //         </div>


// // // //         {/* Desktop CTA */}
// // // //         <div className="hidden md:block">
// // // //           <Link
// // // //             href="/contact"
// // // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // // //           >
// // // //             Get in Touch
// // // //           </Link>
// // // //         </div>


// // // //         {/* Mobile Section */}
// // // //         <div className="md:hidden">

// // // //           {/* Mobile Toggle Button */}
// // // //           <button
// // // //             ref={buttonRef}
// // // //             onClick={() => setOpen((prev) => !prev)}
// // // //             className="rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
// // // //             aria-label="Toggle menu"
// // // //           >
// // // //             <span className="text-2xl font-light">
// // // //               {open ? "✕" : "☰"}
// // // //             </span>
// // // //           </button>


// // // //           {/* Mobile Menu */}
// // // //           <div
// // // //             ref={menuRef}
// // // //             className={`absolute left-0 right-0 top-20 overflow-hidden bg-white transition-all duration-300 md:hidden ${
// // // //               open
// // // //                 ? "max-h-[600px] border-t border-amber-100"
// // // //                 : "max-h-0"
// // // //             }`}
// // // //           >

// // // //             <div className="space-y-1 px-5 py-4">

// // // //               {navLinks.map((link) => (
// // // //                 <Link
// // // //                   key={link.name}
// // // //                   href={link.href}
// // // //                   onClick={() => setOpen(false)}
// // // //                   className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
// // // //                     pathname === link.href
// // // //                       ? "bg-amber-50 font-semibold text-amber-700"
// // // //                       : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // // //                   }`}
// // // //                 >
// // // //                   {link.name}
// // // //                 </Link>
// // // //               ))}


// // // //               <Link
// // // //                 href="/contact"
// // // //                 onClick={() => setOpen(false)}
// // // //                 className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // // //               >
// // // //                 Get in Touch
// // // //               </Link>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }
// // // import { useState, useEffect, useRef } from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";

// // // export default function Navbar() {
// // //   const [open, setOpen] = useState(false);
// // //   const pathname = usePathname();

// // //   const menuRef = useRef<HTMLDivElement>(null);
// // //   const buttonRef = useRef<HTMLButtonElement>(null);

// // //   const navLinks = [
// // //     { name: "About", href: "/about" },
// // //     { name: "Products", href: "/products" },
// // //     { name: "Quality", href: "/quality" },
// // //     { name: "Partners", href: "/partners" },
// // //     { name: "Contact", href: "/contact" },
// // //   ];

// // //   // Toggle function with explicit event handling
// // //   const toggleMenu = (e: React.MouseEvent) => {
// // //     e.stopPropagation(); // Prevent event bubbling
// // //     setOpen((prev) => !prev);
// // //   };

// // //   // Close menu function
// // //   const closeMenu = () => {
// // //     setOpen(false);
// // //   };

// // //   // Close menu when clicking outside
// // //   useEffect(() => {
// // //     function handleClickOutside(event: MouseEvent | TouchEvent) {
// // //       const target = event.target as Node;

// // //       // Check if clicking the menu button or its children
// // //       if (buttonRef.current?.contains(target)) {
// // //         return;
// // //       }

// // //       // Check if clicking inside the menu
// // //       if (menuRef.current?.contains(target)) {
// // //         return;
// // //       }

// // //       // Close if clicking outside both button and menu
// // //       setOpen(false);
// // //     }

// // //     if (open) {
// // //       // Use capture phase to catch events before they bubble
// // //       document.addEventListener("mousedown", handleClickOutside, true);
// // //       document.addEventListener("touchstart", handleClickOutside, true);
// // //     }

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside, true);
// // //       document.removeEventListener("touchstart", handleClickOutside, true);
// // //     };
// // //   }, [open]);

// // //   // Close menu on scroll (only if open)
// // //   useEffect(() => {
// // //     function handleScroll() {
// // //       if (open) {
// // //         setOpen(false);
// // //       }
// // //     }

// // //     window.addEventListener("scroll", handleScroll, { passive: true });

// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, [open]);

// // //   return (
// // //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// // //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// // //         {/* Logo */}
// // //         <Link href="/" className="flex items-center gap-3">
// // //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// // //             SWG
// // //           </div>

// // //           <span className="text-lg font-bold tracking-tight text-amber-800">
// // //             SW Groundnuts
// // //           </span>
// // //         </Link>

// // //         {/* Desktop Navigation */}
// // //         <div className="hidden items-center gap-8 md:flex">
// // //           {navLinks.map((link) => (
// // //             <Link
// // //               key={link.name}
// // //               href={link.href}
// // //               className={`relative font-medium transition-colors duration-200 ${
// // //                 pathname === link.href
// // //                   ? "text-amber-700"
// // //                   : "text-slate-600 hover:text-amber-700"
// // //               }`}
// // //             >
// // //               {link.name}

// // //               {pathname === link.href && (
// // //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600" />
// // //               )}
// // //             </Link>
// // //           ))}
// // //         </div>

// // //         {/* Desktop CTA */}
// // //         <div className="hidden md:block">
// // //           <Link
// // //             href="/contact"
// // //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// // //           >
// // //             Get in Touch
// // //           </Link>
// // //         </div>

// // //         {/* Mobile Section */}
// // //         <div className="md:hidden">
// // //           {/* Mobile Toggle Button */}
// // //           <button
// // //             ref={buttonRef}
// // //             onClick={toggleMenu}
// // //             className="relative z-50 rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
// // //             aria-label="Toggle menu"
// // //             aria-expanded={open}
// // //           >
// // //             <span className="text-2xl font-light">
// // //               {open ? "✕" : "☰"}
// // //             </span>
// // //           </button>

// // //           {/* Mobile Menu Overlay - prevents background interaction */}
// // //           {open && (
// // //             <div 
// // //               className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
// // //               onClick={closeMenu}
// // //               aria-hidden="true"
// // //             />
// // //           )}

// // //           {/* Mobile Menu */}
// // //           <div
// // //             ref={menuRef}
// // //             className={`absolute left-0 right-0 top-20 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
// // //               open
// // //                 ? "max-h-[600px] opacity-100 border-t border-amber-100"
// // //                 : "max-h-0 opacity-0"
// // //             }`}
// // //             style={{
// // //               transitionProperty: "max-height, opacity",
// // //               transitionDuration: "300ms",
// // //               transitionTimingFunction: "ease-in-out"
// // //             }}
// // //           >
// // //             <div className="space-y-1 px-5 py-4">
// // //               {navLinks.map((link) => (
// // //                 <Link
// // //                   key={link.name}
// // //                   href={link.href}
// // //                   onClick={closeMenu}
// // //                   className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
// // //                     pathname === link.href
// // //                       ? "bg-amber-50 font-semibold text-amber-700"
// // //                       : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// // //                   }`}
// // //                 >
// // //                   {link.name}
// // //                 </Link>
// // //               ))}

// // //               <Link
// // //                 href="/contact"
// // //                 onClick={closeMenu}
// // //                 className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// // //               >
// // //                 Get in Touch
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // import { useState, useEffect, useRef } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const pathname = usePathname();

// //   const menuRef = useRef<HTMLDivElement>(null);
// //   const buttonRef = useRef<HTMLButtonElement>(null);

// //   const navLinks = [
// //     { name: "About", href: "/about" },
// //     { name: "Products", href: "/products" },
// //     { name: "Quality", href: "/quality" },
// //     { name: "Partners", href: "/partners" },
// //     { name: "Contact", href: "/contact" },
// //   ];

// //   // Close menu function
// //   const closeMenu = () => {
// //     setOpen(false);
// //   };

// //   // Toggle function - explicitly handle the toggle
// //   const toggleMenu = (e: React.MouseEvent) => {
// //     e.stopPropagation(); // Stop the event from bubbling
// //     setOpen((prev) => !prev);
// //   };

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     function handleClickOutside(event: MouseEvent | TouchEvent) {
// //       const target = event.target as Node;

// //       // IMPORTANT: If clicking the toggle button, ignore (we handle it separately)
// //       if (buttonRef.current?.contains(target)) {
// //         return;
// //       }

// //       // If clicking inside the menu, keep it open
// //       if (menuRef.current?.contains(target)) {
// //         return;
// //       }

// //       // If clicking anywhere else, close it
// //       setOpen(false);
// //     }

// //     // Only add listeners when menu is open
// //     if (open) {
// //       // Use a slight delay to prevent the initial click from triggering
// //       const timeoutId = setTimeout(() => {
// //         document.addEventListener("mousedown", handleClickOutside);
// //         document.addEventListener("touchstart", handleClickOutside);
// //       }, 10);

// //       return () => {
// //         clearTimeout(timeoutId);
// //         document.removeEventListener("mousedown", handleClickOutside);
// //         document.removeEventListener("touchstart", handleClickOutside);
// //       };
// //     }
// //   }, [open]);

// //   // Close menu on scroll
// //   useEffect(() => {
// //     function handleScroll() {
// //       if (open) {
// //         setOpen(false);
// //       }
// //     }

// //     if (open) {
// //       window.addEventListener("scroll", handleScroll, { passive: true });
// //     }

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [open]);

// //   return (
// //     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
// //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

// //         {/* Logo */}
// //         <Link href="/" className="flex items-center gap-3">
// //           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
// //             SWG
// //           </div>

// //           <span className="text-lg font-bold tracking-tight text-amber-800">
// //             SW Groundnuts
// //           </span>
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <div className="hidden items-center gap-8 md:flex">
// //           {navLinks.map((link) => (
// //             <Link
// //               key={link.name}
// //               href={link.href}
// //               className={`relative font-medium transition-colors duration-200 ${
// //                 pathname === link.href
// //                   ? "text-amber-700"
// //                   : "text-slate-600 hover:text-amber-700"
// //               }`}
// //             >
// //               {link.name}

// //               {pathname === link.href && (
// //                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600" />
// //               )}
// //             </Link>
// //           ))}
// //         </div>

// //         {/* Desktop CTA */}
// //         <div className="hidden md:block">
// //           <Link
// //             href="/contact"
// //             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
// //           >
// //             Get in Touch
// //           </Link>
// //         </div>

// //         {/* Mobile Section */}
// //         <div className="md:hidden">
// //           {/* Mobile Toggle Button */}
// //           <button
// //             ref={buttonRef}
// //             onClick={toggleMenu}
// //             className="relative z-50 rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
// //             aria-label="Toggle menu"
// //             aria-expanded={open}
// //           >
// //             <span className="text-2xl font-light">
// //               {open ? "✕" : "☰"}
// //             </span>
// //           </button>

// //           {/* Mobile Menu Overlay */}
// //           {open && (
// //             <div 
// //               className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
// //               onClick={closeMenu}
// //               aria-hidden="true"
// //             />
// //           )}

// //           {/* Mobile Menu */}
// //           <div
// //             ref={menuRef}
// //             className={`absolute left-0 right-0 top-20 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
// //               open
// //                 ? "max-h-[600px] opacity-100 border-t border-amber-100"
// //                 : "max-h-0 opacity-0"
// //             }`}
// //             style={{
// //               transitionProperty: "max-height, opacity",
// //               transitionDuration: "300ms",
// //               transitionTimingFunction: "ease-in-out"
// //             }}
// //           >
// //             <div className="space-y-1 px-5 py-4">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   href={link.href}
// //                   onClick={closeMenu}
// //                   className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
// //                     pathname === link.href
// //                       ? "bg-amber-50 font-semibold text-amber-700"
// //                       : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
// //                   }`}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}

// //               <Link
// //                 href="/contact"
// //                 onClick={closeMenu}
// //                 className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
// //               >
// //                 Get in Touch
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const menuRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const navLinks = [
//     { name: "About", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Quality", href: "/quality" },
//     { name: "Partners", href: "/partners" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // Close menu function
//   const closeMenu = () => {
//     setOpen(false);
//   };

//   // Toggle function - explicitly handle the toggle
//   const toggleMenu = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Stop the event from bubbling
//     setOpen((prev) => !prev);
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent | TouchEvent) {
//       const target = event.target as Node;

//       // IMPORTANT: If clicking the toggle button, ignore (we handle it separately)
//       if (buttonRef.current?.contains(target)) {
//         return;
//       }

//       // If clicking inside the menu, keep it open
//       if (menuRef.current?.contains(target)) {
//         return;
//       }

//       // If clicking anywhere else, close it
//       setOpen(false);
//     }

//     // Only add listeners when menu is open
//     if (open) {
//       // Use a slight delay to prevent the initial click from triggering
//       const timeoutId = setTimeout(() => {
//         document.addEventListener("mousedown", handleClickOutside);
//         document.addEventListener("touchstart", handleClickOutside);
//       }, 10);

//       return () => {
//         clearTimeout(timeoutId);
//         document.removeEventListener("mousedown", handleClickOutside);
//         document.removeEventListener("touchstart", handleClickOutside);
//       };
//     }
//   }, [open]);

//   // Close menu on scroll
//   useEffect(() => {
//     function handleScroll() {
//       if (open) {
//         setOpen(false);
//       }
//     }

//     if (open) {
//       window.addEventListener("scroll", handleScroll, { passive: true });
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [open]);

//   return (
//     <nav className="sticky top-0 z-50 border-b border-amber-200/30 bg-white/95 backdrop-blur">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-sm">
//             SWG
//           </div>

//           <span className="text-lg font-bold tracking-tight text-amber-800">
//             SW Groundnuts
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`relative font-medium transition-colors duration-200 ${
//                 pathname === link.href
//                   ? "text-amber-700"
//                   : "text-slate-600 hover:text-amber-700"
//               }`}
//             >
//               {link.name}

//               {pathname === link.href && (
//                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600" />
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
//           <Link
//             href="/contact"
//             className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
//           >
//             Get in Touch
//           </Link>
//         </div>

//         {/* Mobile Section */}
//         <div className="md:hidden">
//           {/* Mobile Toggle Button */}
//           <button
//             ref={buttonRef}
//             onClick={toggleMenu}
//             className="relative z-50 rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             <span className="text-2xl font-light">
//               {open ? "✕" : "☰"}
//             </span>
//           </button>

//           {/* Mobile Menu Overlay */}
//           {open && (
//             <div 
//               className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={closeMenu}
//               aria-hidden="true"
//             />
//           )}

//           {/* Mobile Menu */}
//           <div
//             ref={menuRef}
//             className={`absolute left-0 right-0 top-20 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
//               open
//                 ? "max-h-[600px] opacity-100 border-t border-amber-100"
//                 : "max-h-0 opacity-0"
//             }`}
//             style={{
//               transitionProperty: "max-height, opacity",
//               transitionDuration: "300ms",
//               transitionTimingFunction: "ease-in-out"
//             }}
//           >
//             <div className="space-y-1 px-5 py-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
//                     pathname === link.href
//                       ? "bg-amber-50 font-semibold text-amber-700"
//                       : "text-slate-600 hover:bg-amber-50 hover:text-amber-700"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               <Link
//                 href="/contact"
//                 onClick={closeMenu}
//                 className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Partners", href: "/partners" },
    { name: "Governance", href: "/governance" },
    { name: "Contact", href: "/contact" },
  ];

  // Close menu function
  const closeMenu = () => {
    setOpen(false);
  };

  // Toggle function - explicitly handle the toggle
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop the event from bubbling
    setOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;

      // IMPORTANT: If clicking the toggle button, ignore (we handle it separately)
      if (buttonRef.current?.contains(target)) {
        return;
      }

      // If clicking inside the menu, keep it open
      if (menuRef.current?.contains(target)) {
        return;
      }

      // If clicking anywhere else, close it
      setOpen(false);
    }

    // Only add listeners when menu is open
    if (open) {
      // Use a slight delay to prevent the initial click from triggering
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      }, 10);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [open]);

  // Close menu on scroll
  useEffect(() => {
    function handleScroll() {
      if (open) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

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
              className={`relative font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-amber-700"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              {link.name}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-amber-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-amber-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-amber-800 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden">
          {/* Mobile Toggle Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="relative z-50 rounded-md p-2 text-slate-600 transition hover:bg-amber-50"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-2xl font-light">
              {open ? "✕" : "☰"}
            </span>
          </button>

          {/* Mobile Menu Overlay */}
          {open && (
            <div 
              className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`absolute left-0 right-0 top-20 overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
              open
                ? "max-h-[600px] opacity-100 border-t border-amber-100"
                : "max-h-0 opacity-0"
            }`}
            style={{
              transitionProperty: "max-height, opacity",
              transitionDuration: "300ms",
              transitionTimingFunction: "ease-in-out"
            }}
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
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
                onClick={closeMenu}
                className="mt-4 block rounded-full bg-amber-700 px-4 py-3 text-center font-medium text-white transition hover:bg-amber-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}