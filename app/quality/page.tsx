"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function QualityPage() {
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

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  const WaveDivider = ({ bg = "bg-blue-50" }: { bg?: string }) => (
    <div className={`relative h-24 w-full overflow-hidden ${bg}`}>
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
        />
      </svg>
    </div>
  );

  const qualityPoints = [
    {
      icon: "🔬",
      title: "Aflatoxin Testing",
      description: "We conduct rigorous raw-material moisture testing and strict sorting protocols to ensure our products are aflatoxin-safe."
    },
    {
      icon: "🧪",
      title: "Hygienic Processing",
      description: "Our facility follows EAS 39 hygiene guidelines with dedicated food-grade machinery and a strict linear production flow."
    },
    {
      icon: "📋",
      title: "Batch Traceability",
      description: "Every product batch is fully traceable from raw material to finished product, ensuring accountability and quality control."
    },
    {
      icon: "👩‍⚕️",
      title: "Certified Food Handlers",
      description: "All our production personnel are medically certified food handlers trained in food safety and hygiene."
    },
    {
      icon: "✅",
      title: "UNBS Q-Mark Certified",
      description: "We have attained the UNBS Distinctive Quality Mark (Q-Mark), ensuring our products meet national quality standards."
    },
    {
      icon: "🌍",
      title: "Export Ready",
      description: "Our products meet international food safety standards, making them ready for export to regional and international markets."
    }
  ];

  const standards = [
    { name: "EAS 39", description: "Hygiene guidelines for food processing" },
    { name: "US EAS 60:2013", description: "Peanut Butter Specification — quality and safety standards" },
    { name: "UNBS Q-Mark", description: "Distinctive Quality Mark for certified products" },
  ];

  // Blue shapes for cards
  const blueShapes = [
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
    "rounded-[50%_50%_40%_60%/60%_40%_50%_50%]",
    "rounded-[40%_60%_50%_50%/50%_50%_60%_40%]",
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/governance-bg.jpg"
            alt="Quality Assurance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/75 to-blue-900/85" />
          
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.25)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-12 lg:py-16 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-blue-200 border border-blue-500/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Quality Assurance
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Quality You Can
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Trust
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              We are fully committed to consumer health and national compliance. Our products 
              meet the highest food safety standards.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== QUALITY STANDARDS ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Our Standards
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Meeting International
              <br />
              <span className="text-amber-600">Food Safety Standards</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Our operations strictly align with national and international food safety guidelines.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {standards.map((standard, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-blue-100/100 blur-xl ${blueShapes[i % blueShapes.length]}`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">📋</div>
                    <h3 className="text-xl font-bold text-slate-800">{standard.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{standard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== QUALITY PROCESS ===== */}
      <section ref={sectionRef} className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Quality Process
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              How We Ensure Quality
            </h2>
            <p className="mt-3 text-slate-600">
              Every step of our process is designed to deliver safe, high-quality products.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualityPoints.map((point, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-blue-100/100 blur-2xl ${blueShapes[(i + 2) % blueShapes.length]}`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{point.icon}</div>
                    <h3 className="text-lg font-bold text-slate-800">{point.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== COMMITMENT ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
            Our Commitment
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Safe Food. Happy Customers.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Aflatoxin-Free",
                description: "We implement rigorous testing and sorting protocols to safeguard our consumers against chemical contaminants."
              },
              {
                title: "UNBS Certified",
                description: "We have attained the UNBS Distinctive Quality Mark (Q-Mark), expanding our market access into formal retail chains and export markets."
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                <div className={`absolute -left-10 -top-10 w-40 h-40 bg-blue-100/40 blur-2xl ${blueShapes[(i + 4) % blueShapes.length]}`} />
                <div className="relative z-10">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-bold text-amber-700">{item.title}:</span> {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Order Quality Products?
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Contact us for bulk orders, export inquiries, or partnership opportunities.
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
              View Products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}