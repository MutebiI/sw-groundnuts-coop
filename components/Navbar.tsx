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
//     { name: "Governance", href: "/governance" },
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
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Close menu function
  const closeMenu = () => {
    setOpen(false);
  };

  // Toggle function - explicitly handle the toggle
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;

      if (buttonRef.current?.contains(target)) {
        return;
      }

      if (menuRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    }

    if (open) {
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

      {/* ===== PEANUT SHAPE AT BOTTOM OF NAVBAR ===== */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-40">
        <div className="w-8 h-3 bg-amber-600/30 rounded-t-full blur-sm" />
        <div className="w-6 h-2 bg-amber-500/20 rounded-t-full blur-sm -mt-1 mx-auto" />
      </div>
    </nav>
  );
}