"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/95 via-amber-900/90 to-amber-800/90" />
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-700/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-600/20 blur-3xl" />
          
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
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-amber-200 border border-amber-500/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Governance
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Governance
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Structure & By-Laws
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
              Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
              is registered under the Cooperative Societies Act Cap 112 and operates 
              under its approved by-laws.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
                📋 Reg: P.28122/RCS
              </div>
              <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
                📅 Registered: 2025
              </div>
              <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
                📄 By-Laws: Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGISTRATION OVERVIEW ===== */}
      <section ref={sectionRef} className="bg-white py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                Overview
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Registered Cooperative Society
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
                is a registered cooperative under the Cooperative Societies Act Cap 112.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="font-medium text-amber-700">Registration Number:</span>
                  <span>P.28122/RCS</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="font-medium text-amber-700">TIN:</span>
                  <span>1057383351</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="font-medium text-amber-700">Registered:</span>
                  <span>2025</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="font-medium text-amber-700">Type:</span>
                  <span>Women's Cooperative Union / SME</span>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br from-amber-100/30 to-amber-200/20 ${blobShapes[0]}`} />
              <div className={`relative bg-amber-800 p-8 text-white ${blobShapes[1]}`}>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h3 className="text-xl font-bold">By-Laws Compliance</h3>
                  <p className="mt-2 text-amber-200/80 text-sm leading-relaxed">
                    The society operates under approved by-laws that govern its operations, 
                    membership, and governance structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AIMS & OBJECTIVES ===== */}
      <section className="bg-amber-50/30 py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Chapter 1
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Aims & Objectives
            </h2>
            <p className="mt-3 text-slate-600">
              The core purpose and mission of the cooperative society.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Value Addition",
                description: "To add value to locally sourced groundnuts through processing into high-quality products.",
              },
              {
                title: "Women Empowerment",
                description: "To empower women farmers through enterprise development and market access.",
              },
              {
                title: "Quality Production",
                description: "To produce safe, nutritious, and aflatoxin-free groundnut products.",
              },
              {
                title: "Market Access",
                description: "To access local and export markets for premium groundnut products.",
              },
              {
                title: "Sustainable Development",
                description: "To promote sustainable agricultural practices and community development.",
              },
              {
                title: "Member Welfare",
                description: "To improve the economic livelihoods of cooperative members.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-6 rounded-2xl border border-amber-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GOVERNANCE STRUCTURE ===== */}
      <section className="bg-white py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Governance
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Leadership & Structure
            </h2>
            <p className="mt-3 text-slate-600">
              The society is governed by a committee elected by the members.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                role: "Chairperson",
                description: "Presides over committee meetings and represents the society.",
              },
              {
                role: "Vice Chairperson",
                description: "Assists the Chairperson and presides in their absence.",
              },
              {
                role: "Secretary",
                description: "Manages records, minutes, and official correspondence.",
              },
              {
                role: "Treasurer",
                description: "Oversees financial management and reporting.",
              },
              {
                role: "Committee Members",
                description: "Represent members and oversee society operations.",
              },
              {
                role: "General Assembly",
                description: "Supreme governing body comprising all members.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-6 rounded-2xl border border-amber-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl mb-3">
                    {i === 0 ? "👤" : i === 1 ? "👤" : i === 2 ? "📝" : i === 3 ? "💰" : i === 4 ? "👥" : "🏛️"}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{item.role}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP ===== */}
      <section className="bg-amber-50/30 py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                Membership
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Who Can Join
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Membership is open to women farmers and individuals who share the 
                cooperative's vision and values.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Open to women farmers in Kanungu District",
                  "Must share the cooperative's values and objectives",
                  "Must be willing to participate in cooperative activities",
                  "Members have voting rights in the General Assembly",
                  "Access to cooperative benefits and services",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br from-amber-100/30 to-amber-200/20 ${blobShapes[2]}`} />
              <div className={`relative bg-amber-800 p-8 text-white ${blobShapes[3]}`}>
                <div className="text-center">
                  <div className="text-4xl mb-4">👩🏾‍🌾</div>
                  <h3 className="text-xl font-bold">50+ Women Members</h3>
                  <p className="mt-2 text-amber-200/80 text-sm leading-relaxed">
                    Our cooperative is proud to be women-led, with over 50 active members 
                    working together to build a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEETINGS & FINANCIALS ===== */}
      <section className="bg-white py-24 border-t border-amber-200/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Operations
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Meetings & Financial Management
            </h2>
            <p className="mt-3 text-slate-600">
              The society operates with transparency and accountability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-6 rounded-2xl border border-amber-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Full By-Laws Available
          </h2>
          <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
            The complete by-laws document is available upon request. Contact us for more information.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
            >
              Request By-Laws
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}