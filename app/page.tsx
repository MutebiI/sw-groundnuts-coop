"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const slides = [
    {
      image: "/images/hero-bg.jpg",
      title: "Premium Groundnut Products",
      subtitle: "Aflatoxin-safe, high-quality peanut butter and groundnut products from Uganda.",
      cta: "Explore Products",
      link: "/products",
    },
    {
      image: "/images/hero-bg2.jpg",
      title: "Women-Led Cooperative",
      subtitle: "Empowering women farmers in Kanungu District through sustainable agriculture.",
      cta: "Our Story",
      link: "/about",
    },
    {
      image: "/images/hero-bg3.jpg",
      title: "Export Quality Certified",
      subtitle: "UNBS Q-Mark certified products ready for local and international markets.",
      cta: "Quality Assurance",
      link: "/quality",
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 300);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const blueShapes = [
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
  ];

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO CAROUSEL ===== */}
      <section className="relative isolate overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-800/80" />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 300);
                }, 400);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-blue-500"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-blue-200 border border-blue-500/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Women-Led Cooperative | Uganda
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute"
                  }`}
                >
                  {slide.title}
                </span>
              ))}
            </h1>

            <div className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 relative h-12 sm:h-10">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  {slide.subtitle}
                </p>
              ))}
            </div>

            {/* Buttons - FIXED for mobile */}
            <div className="mt-10 flex flex-wrap gap-4 relative min-h-[56px] sm:min-h-[56px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 absolute"
                  }`}
                >
                  <Link
                    href={slide.link}
                    className="inline-block rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-blue-700"
                  >
                    {slide.cta}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                UNBS Q-Mark Certified
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                UK Partner Supported
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Women-Led
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER LOGOS ===== */}
      <section className="border-y border-slate-200 bg-slate-50/50 py-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm font-medium text-slate-500">Supported by:</span>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <span className="text-sm font-semibold text-slate-700">Shared Interest Foundation (UK)</span>
              <span className="h-6 w-px bg-slate-300" />
              <span className="text-sm font-semibold text-slate-700">Kanungu District</span>
              <span className="h-6 w-px bg-slate-300" />
              <span className="text-sm font-semibold text-slate-700">UNBS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Our Products
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Premium Groundnut Products
            </h2>
            <p className="mt-3 text-slate-600">
              Made with care by women farmers, processed in a modern hygienic facility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🥜",
                title: "Premium Peanut Butter",
                desc: "Smooth, creamy, and rich. Made from carefully selected groundnuts.",
                tags: ["UNBS Q-Mark", "Aflatoxin-Safe"],
              },
              {
                icon: "🫒",
                title: "Groundnut Oil",
                desc: "Pure, cold-pressed groundnut oil for cooking and food processing.",
                tags: ["Cold-Pressed", "Pure"],
              },
              {
                icon: "🌾",
                title: "Groundnut Flour",
                desc: "Finely milled, high-protein groundnut flour for baking and nutrition.",
                tags: ["High Protein", "Natural"],
              },
            ].map((product, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-blue-100/30 blur-2xl ${blueShapes[i % blueShapes.length]}`} />
                  <div className="relative z-10">
                    <div className="text-5xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800">{product.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{product.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.tags.map((tag, j) => (
                        <span key={j} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUALITY & CERTIFICATIONS ===== */}
      <section className="relative bg-slate-50/50 py-10">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-blue-50/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-blue-50/30 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
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
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/quality"
                className="mt-6 inline-block rounded-full border border-blue-600 px-8 py-3 font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
              >
                Learn About Our Quality
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["UNBS Q-Mark", "EAS 60:2013", "Aflatoxin-Safe", "Export Ready"].map((label) => (
                <div key={label} className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                  <p className="text-3xl font-bold text-blue-600">✓</p>
                  <p className="text-sm text-slate-600 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Empowering Women Farmers
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Founded in 2025, our cooperative is a Women's Cooperative Union and SME 
                based in Nyamirama town council, Kanungu District, Uganda.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are supported by the <span className="font-semibold">Shared Interest Foundation (UK)</span> 
                in collaboration with the District Local Governments of Kanungu, Rukungiri, and Mitooma.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                  📋 Reg: P.28122/RCS
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                  📅 Founded 2025
                </span>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Learn Our Story
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-blue-700 p-8 text-white">
              <div className={`absolute -right-10 -top-10 w-48 h-48 bg-blue-400/30 blur-2xl ${blueShapes[2]}`} />
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">👩🏾‍🌾</div>
                <h3 className="text-xl font-bold">Women-Led Cooperative</h3>
                <p className="mt-2 text-blue-200/80 text-sm">
                  Empowering women farmers through value addition and market access.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-300">50+</p>
                    <p className="text-xs text-blue-200/70">Women Farmers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">2025</p>
                    <p className="text-xs text-blue-200/70">Founded</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">✓</p>
                    <p className="text-xs text-blue-200/70">UNBS Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Whether you're a supermarket buyer, exporter, or development partner — 
            we're ready to work with you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-blue-400/30 px-8 py-3.5 font-medium text-blue-200 transition-all hover:bg-blue-700/30"
            >
              View Our Products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}