"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Organic blob shapes (corporate friendly)
  const blobShapes = [
    "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
    "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
    "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
    "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
  ];

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative isolate overflow-hidden min-h-[85vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/95 via-amber-900/90 to-amber-800/90" />

          {/* Decorative organic shapes in background */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-700/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-600/20 blur-3xl" />

          {/* U-shaped curve */}
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.06)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-amber-200 border border-amber-500/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Women-Led Cooperative | Uganda
              </span>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Premium Groundnut
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Products from Uganda
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
                Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
                produces high-quality, aflatoxin-safe peanut butter and groundnut 
                products for local and export markets.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-amber-600 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/30"
                >
                  Explore Products →
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-amber-200/70">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  UNBS Q-Mark Certified
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  UK Partner Supported
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Women-Led Cooperative
                </span>
              </div>
            </div>

            {/* Right - Product Preview */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[40%_60%_30%_70%/50%_40%_60%_50%] bg-amber-500/10 blur-2xl" />
                <div className="relative rounded-2xl border border-amber-400/20 bg-amber-800/30 p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🥜</div>
                    <h3 className="text-2xl font-bold text-white">Premium Peanut Butter</h3>
                    <p className="mt-2 text-amber-200/70">Aflatoxin-Safe • Rich & Creamy</p>
                    <div className="mt-6 flex justify-center gap-4 text-sm text-amber-200/60">
                      <span>✓ EAS 60:2013</span>
                      <span>✓ UNBS Q-Mark</span>
                      <span>✓ Export Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER LOGOS SECTION ===== */}
      <section className="border-y border-amber-200/20 bg-amber-50/30 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm font-medium text-slate-500">Supported by:</span>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <span className="text-sm font-semibold text-slate-700">Shared Interest Foundation (UK)</span>
              <span className="h-6 w-px bg-amber-200" />
              <span className="text-sm font-semibold text-slate-700">Kanungu District</span>
              <span className="h-6 w-px bg-amber-200" />
              <span className="text-sm font-semibold text-slate-700">UNBS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section ref={sectionRef} className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Our Products
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Premium Quality Groundnut Products
            </h2>
            <p className="mt-3 text-slate-600">
              Made with care by women farmers, processed in a modern hygienic facility.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🥜",
                title: "Premium Peanut Butter",
                desc: "Smooth, creamy, and rich. Made from carefully selected groundnuts. Aflatoxin-safe.",
                tags: ["EAS 60:2013", "UNBS Q-Mark", "Export Quality"],
              },
              {
                icon: "🫒",
                title: "Groundnut Oil",
                desc: "Pure, cold-pressed groundnut oil for cooking and food processing.",
                tags: ["Cold-Pressed", "Pure", "Natural"],
              },
              {
                icon: "🌾",
                title: "Groundnut Flour",
                desc: "Finely milled groundnut flour for baking and food production.",
                tags: ["Fine Milled", "High Protein", "Natural"],
              },
            ].map((product, i) => (
              <div
                key={i}
                className={`relative ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-50/60 to-amber-100/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">{product.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{product.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, j) => (
                      <span key={j} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full bg-amber-700 px-8 py-3 font-medium text-white transition-all hover:bg-amber-800 hover:shadow-lg"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUALITY & CERTIFICATIONS ===== */}
      <section className="bg-amber-50/50 py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                Quality Assurance
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Safe. Hygienic. Certified.
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Our processing facility follows strict food safety standards, including 
                EAS 39 hygiene guidelines and US EAS 60:2013 Peanut Butter Specification.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Aflatoxin-safe through rigorous testing",
                  "Hygienic processing with modern food-grade machinery",
                  "Batch traceability for every product",
                  "UNBS Distinctive Quality Mark (Q-Mark) certified",
                  "Medically certified food handlers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/quality"
                className="mt-8 inline-block rounded-full border border-amber-700 px-8 py-3 font-medium text-amber-700 transition-all hover:bg-amber-700 hover:text-white"
              >
                Learn About Our Quality →
              </Link>
            </div>

            <div className="relative">
              <div className={`absolute -inset-6 bg-gradient-to-br from-amber-100/30 to-amber-200/20 ${blobShapes[2]}`} />
              <div className="relative bg-white p-8 rounded-2xl border border-amber-200/30 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-amber-50/50 border border-amber-100/30">
                    <p className="text-3xl font-bold text-amber-700">✓</p>
                    <p className="text-xs text-slate-600 mt-1">UNBS Q-Mark</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-amber-50/50 border border-amber-100/30">
                    <p className="text-3xl font-bold text-amber-700">✓</p>
                    <p className="text-xs text-slate-600 mt-1">EAS 60:2013</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-amber-50/50 border border-amber-100/30">
                    <p className="text-3xl font-bold text-amber-700">✓</p>
                    <p className="text-xs text-slate-600 mt-1">Aflatoxin-Safe</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-amber-50/50 border border-amber-100/30">
                    <p className="text-3xl font-bold text-amber-700">✓</p>
                    <p className="text-xs text-slate-600 mt-1">Export Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT / ABOUT SECTION ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Empowering Women Farmers
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Founded in 2025, our cooperative is a Women’s Cooperative Union and SME 
                based in Nyamirama town council, Kanungu District, Uganda.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are supported by the <span className="font-semibold">Shared Interest Foundation (UK)</span> 
                in collaboration with the District Local Governments of Kanungu, Rukungiri, and Mitooma.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-lg bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                  📋 Reg: P.28122/RCS
                </div>
                <div className="rounded-lg bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                  📅 Founded 2025
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-full bg-amber-700 px-8 py-3 font-medium text-white transition-all hover:bg-amber-800 hover:shadow-lg"
              >
                Learn Our Story →
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className={`relative ${blobShapes[3]}`}>
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/40 to-amber-50/30 ${blobShapes[1]}" />
                <div className="relative bg-amber-800 p-8 rounded-2xl text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩🏾‍🌾</div>
                    <h3 className="text-xl font-bold">Women-Led Cooperative</h3>
                    <p className="mt-2 text-amber-200/80 text-sm">
                      Empowering women farmers through value addition and market access.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-2xl font-bold text-amber-300">50+</p>
                        <p className="text-xs text-amber-200/70">Women Farmers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-amber-300">100%</p>
                        <p className="text-xs text-amber-200/70">Organic</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-amber-300">2025</p>
                        <p className="text-xs text-amber-200/70">Founded</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
            Whether you're a supermarket buyer, exporter, or development partner — 
            we're ready to work with you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
            >
              View Our Products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}