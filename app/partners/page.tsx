"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PartnersPage() {
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

  const partners = [
    {
      name: "Shared Interest Foundation",
      location: "United Kingdom",
      flag: "🇬🇧",
      description: "Providing funding and technical support to empower women farmers and build sustainable enterprises.",
      impact: "Financial support, technical assistance, and capacity building",
      type: "International Partner",
    },
    {
      name: "Kanungu District Local Government",
      location: "Uganda",
      flag: "🏛️",
      description: "Local government support and coordination for community development programmes.",
      impact: "Policy support, coordination, and community mobilization",
      type: "Government Partner",
    },
    {
      name: "Rukungiri District Local Government",
      location: "Uganda",
      flag: "🏛️",
      description: "Collaboration on agricultural development and women's empowerment initiatives.",
      impact: "Regional coordination and programme support",
      type: "Government Partner",
    },
    {
      name: "Mitooma District Local Government",
      location: "Uganda",
      flag: "🏛️",
      description: "Partnership on sustainable agriculture and community development.",
      impact: "Local government support and coordination",
      type: "Government Partner",
    },
    {
      name: "UNBS",
      location: "Uganda",
      flag: "✅",
      description: "Quality certification and Q-Mark for our products, ensuring they meet national standards.",
      impact: "Product certification and quality assurance",
      type: "Certification Body",
    },
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
              Our Partners
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted by
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Leading Organizations
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
              We work with international and local partners to empower women farmers, 
              ensure quality, and build sustainable enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS GRID ===== */}
      <section ref={sectionRef} className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-100/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Our Partners
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Building a Better Future
              <br />
              <span className="text-amber-700">Together</span>
            </h2>
            <p className="mt-3 text-slate-600">
              We are proud to work with organizations that share our commitment to sustainable development.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className={`relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[(i + 2) % blobShapes.length]}`}>
                  {/* Flag / Icon */}
                  <div className="text-5xl mb-4">{partner.flag}</div>
                  
                  {/* Partner Type Badge */}
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 mb-3">
                    {partner.type}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-800">{partner.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{partner.location}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{partner.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-amber-100">
                    <p className="text-xs font-medium text-amber-700">Key Impact:</p>
                    <p className="text-xs text-slate-600 mt-1">{partner.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP OPPORTUNITIES ===== */}
      <section className="relative overflow-hidden bg-amber-50/30 py-20 border-t border-amber-200/20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-amber-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
            Partner With Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Join Us in Making a Difference
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We welcome partnerships with organizations, institutions, and individuals 
            who share our commitment to sustainable development and women's empowerment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Grant Funding",
              "Technical Support",
              "Market Access",
              "Capacity Building",
              "Research Collaboration",
              "CSR Partnerships",
            ].map((item, i) => (
              <span key={i} className={`rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-amber-200/30 ${softShapes[i % softShapes.length]}`}>
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-amber-700 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800 hover:shadow-lg"
          >
            Become a Partner →
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
            Contact us to explore partnership opportunities and join us in empowering women farmers.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
            >
              Get in Touch
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