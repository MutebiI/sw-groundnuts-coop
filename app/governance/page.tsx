
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GovernancePage() {
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

  // ===== WAVE DIVIDER - ORIGINAL SIZE RESTORED =====
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Our-Governance.jpg"
            alt="Cooperative governance"
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
              Governance
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Governance
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Structure & By-Laws
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
              is registered under the Cooperative Societies Act Cap 112 and operates 
              under its approved by-laws.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                📋 Reg: P.28122/RCS
              </div>
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                📅 Registered: 2025
              </div>
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                📄 By-Laws: Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== REGISTRATION OVERVIEW ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div
          className={`mx-auto max-w-3xl px-5 lg:px-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Registered Cooperative Society
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
            is a registered cooperative under the Cooperative Societies Act Cap 112.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500">Registration Number</p>
              <p className="font-semibold text-slate-800">P.28122/RCS</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500">TIN</p>
              <p className="font-semibold text-slate-800">1057383351</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500">Registered</p>
              <p className="font-semibold text-slate-800">2025</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500">Type</p>
              <p className="font-semibold text-slate-800">Women's Cooperative Union / SME</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200/30 p-6 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">📜</span>
              <div className="text-left">
                <h3 className="font-bold text-blue-800">By-Laws Compliance</h3>
                <p className="text-sm text-blue-600/80">
                  The society operates under approved by-laws that govern its operations, 
                  membership, and governance structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== AIMS & OBJECTIVES ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Our Purpose
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Aims & Objectives
            </h2>
            <p className="mt-3 text-slate-600">
              The core purpose and mission of the cooperative society.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                number: "01",
                title: "Value Addition",
                description: "To add value to locally sourced groundnuts through processing into high-quality products.",
              },
              {
                number: "02",
                title: "Women Empowerment",
                description: "To empower women farmers through enterprise development and market access.",
              },
              {
                number: "03",
                title: "Quality Production",
                description: "To produce safe, nutritious, and aflatoxin-free groundnut products.",
              },
              {
                number: "04",
                title: "Market Access",
                description: "To access local and export markets for premium groundnut products.",
              },
              {
                number: "05",
                title: "Sustainable Development",
                description: "To promote sustainable agricultural practices and community development.",
              },
              {
                number: "06",
                title: "Member Welfare",
                description: "To improve the economic livelihoods of cooperative members.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group flex items-start gap-6 p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-lg group-hover:bg-amber-200 transition-colors">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== GOVERNANCE STRUCTURE - HIERARCHY WITH ARROWS ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Governance
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Leadership & Structure
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              The society is governed by a committee elected by the members.
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg">
                <div className="text-3xl mb-1">🏛️</div>
                <div className="font-bold text-lg">General Assembly</div>
                <div className="text-xs text-blue-200 mt-1">Supreme governing body</div>
              </div>
            </div>

            <div className="flex justify-center my-3">
              <svg className="w-8 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="text-center">
              <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl mb-1">👥</div>
                <div className="font-bold text-lg">Committee</div>
                <div className="text-xs text-blue-200 mt-1">Elected by members</div>
              </div>
            </div>

            <div className="flex justify-center my-4">
              <svg className="w-48 h-16 text-blue-300" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="100" y1="0" x2="100" y2="25" stroke="currentColor" />
                <line x1="20" y1="25" x2="180" y2="25" stroke="currentColor" />
                <line x1="40" y1="25" x2="40" y2="45" stroke="currentColor" />
                <line x1="100" y1="25" x2="100" y2="45" stroke="currentColor" />
                <line x1="160" y1="25" x2="160" y2="45" stroke="currentColor" />
                <polygon points="36,45 40,55 44,45" fill="currentColor" />
                <polygon points="96,45 100,55 104,45" fill="currentColor" />
                <polygon points="156,45 160,55 164,45" fill="currentColor" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "👤", role: "Chairperson", desc: "Presides over committee meetings" },
                { icon: "📝", role: "Secretary", desc: "Manages records and minutes" },
                { icon: "💰", role: "Treasurer", desc: "Oversees financial management" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-white border-2 border-blue-200 px-4 py-4 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="font-semibold text-slate-800 text-sm mt-1">{item.role}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <div className="inline-block bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl">
                <span className="text-sm text-slate-600">
                  👥 <span className="font-medium">Committee Members</span> — Represent members and oversee operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== MEMBERSHIP ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Membership
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Who Can Join
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Membership is open to women farmers and individuals who share the 
              cooperative's vision and values.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                "Open to women farmers in Kanungu District",
                "Must share the cooperative's values and objectives",
                "Must be willing to participate in cooperative activities",
                "Members have voting rights in the General Assembly",
                "Access to cooperative benefits and services",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-700 p-8 rounded-2xl text-white max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-3">👩🏾‍🌾</div>
                <h3 className="text-xl font-bold">50+ Women Members</h3>
                <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">
                  Our cooperative is proud to be women-led, with over 50 active members 
                  working together to build a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== MEETINGS & FINANCIALS - WITH TRAPEZOID SHAPES ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Operations
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Meetings & Financial Management
            </h2>
            <p className="mt-3 text-slate-600">
              The society operates with transparency and accountability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "🏛️",
                title: "Annual General Meeting",
                description: "The General Assembly meets annually to review progress, elect committee members, and approve financial reports.",
              },
              {
                icon: "📊",
                title: "Financial Management",
                description: "The society maintains proper financial records, undergoes annual audits, and reports to members.",
              },
              {
                icon: "📋",
                title: "Committee Meetings",
                description: "The management committee meets regularly to oversee day-to-day operations.",
              },
              {
                icon: "🔒",
                title: "Accountability",
                description: "All financial transactions are recorded and audited to ensure transparency and accountability.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
                  {/* Diagonal/trapezoid shapes behind the content */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-50/100 rotate-12 transform origin-center" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-50/40 -rotate-12 transform origin-center" />
                  
                  {/* Content - stays above the shapes */}
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Full By-Laws Available
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            The complete by-laws document is available upon request. Contact us for more information.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              Request By-Laws
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-blue-400/30 px-8 py-3.5 font-medium text-blue-200 transition-all hover:bg-blue-700/30"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}