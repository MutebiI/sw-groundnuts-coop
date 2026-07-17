

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  // Blue shapes for the right side of each partner row
  const blueShapes = [
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
    "rounded-[50%_50%_40%_60%/60%_40%_50%_50%]",
    "rounded-[40%_60%_50%_50%/50%_50%_60%_40%]",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/governance-bg.jpg"
            alt="Partners"
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
              Our Partners
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trusted by
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Leading Organizations
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              We work with international and local partners to empower women farmers, 
              ensure quality, and build sustainable enterprises.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== PARTNERS LIST ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Our Partners
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Building a Better Future
              <br />
              <span className="text-amber-600">Together</span>
            </h2>
            <p className="mt-3 text-slate-600">
              We are proud to work with organizations that share our commitment to sustainable development.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className={`group relative flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-500 overflow-hidden ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Blue shape on the right - faint and behind text */}
                <div className={`absolute -right-10 -bottom-10 w-48 h-48 bg-blue-100/100 blur-2xl ${blueShapes[i % blueShapes.length]}`} />
                <div className={`absolute -right-16 -top-16 w-32 h-32 bg-blue-50/20 blur-xl ${blueShapes[(i + 2) % blueShapes.length]}`} />

                {/* Number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-base group-hover:bg-amber-200 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-slate-800">{partner.name}</span>
                    <span className="text-sm text-slate-500">{partner.flag}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{partner.location}</span>
                    <span className={`ml-2 inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700`}>
                      {partner.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{partner.description}</p>
                  <p className="mt-1 text-xs text-amber-600">
                    <span className="font-medium">Impact:</span> {partner.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== PARTNERSHIP OPPORTUNITIES ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
            Partner With Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Join Us in Making a Difference
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We welcome partnerships with organizations, institutions, and individuals 
            who share our commitment to sustainable development and women's empowerment.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Grant Funding",
              "Technical Support",
              "Market Access",
              "Capacity Building",
              "Research Collaboration",
              "CSR Partnerships",
            ].map((item, i) => (
              <span key={i} className={`rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200 ${softShapes[i % softShapes.length]}`}>
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-amber-600 px-8 py-3 font-medium text-white transition-all hover:bg-amber-700 hover:shadow-lg"
          >
            Become a Partner →
          </Link>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Contact us to explore partnership opportunities and join us in empowering women farmers.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              Get in Touch
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