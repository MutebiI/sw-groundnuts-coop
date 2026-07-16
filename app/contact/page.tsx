"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
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
              Contact Us
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                We'd Love to Hear from You
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
              Whether you're a buyer, partner, funder, or just curious about our products — 
              reach out and we'll respond quickly.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO ===== */}
      <section ref={sectionRef} className="relative overflow-hidden bg-white py-24 border-t border-amber-200/20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-100/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Contact Details */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                Contact Information
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Reach Out to Us
              </h2>
              <p className="mt-3 text-slate-600">
                We're here to answer your questions about products, partnerships, and more.
              </p>

              <div className="mt-8 space-y-6">
                <div className={`relative p-6 ${blobShapes[0]}`}>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/30">
                    <h3 className="font-bold text-slate-800">📍 Address</h3>
                    <p className="mt-1 text-slate-600">
                      Ahakibungo, Nyamirama T/C<br />
                      Kanungu District, Uganda
                    </p>
                  </div>
                </div>

                <div className={`relative p-6 ${blobShapes[1]}`}>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/30">
                    <h3 className="font-bold text-slate-800">📧 Email</h3>
                    <a
                      href="mailto:info@swgroundnuts.co.ug"
                      className="mt-1 text-amber-700 hover:underline transition"
                    >
                      info@swgroundnuts.co.ug
                    </a>
                  </div>
                </div>

                <div className={`relative p-6 ${blobShapes[2]}`}>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/30">
                    <h3 className="font-bold text-slate-800">📞 Phone</h3>
                    <a
                      href="tel:+256XXX"
                      className="mt-1 text-amber-700 hover:underline transition"
                    >
                      +256 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className={`relative p-6 ${blobShapes[3]}`}>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/30">
                    <h3 className="font-bold text-slate-800">📋 Registration</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Reg No: P.28122/RCS<br />
                      TIN: 1057383351
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form - Wavy Shape */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br from-amber-100/40 to-amber-200/30 ${blobShapes[2]}`} />
              <div className={`relative bg-white p-8 shadow-xl ${blobShapes[3]}`}>
                <h3 className="text-xl font-bold text-slate-800">Send Us a Message</h3>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-amber-700 px-6 py-3 font-medium text-white transition-all hover:bg-amber-800 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP OR LOCATION ===== */}
      <section className="relative overflow-hidden bg-amber-50/30 py-20 border-t border-amber-200/20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-amber-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
            Visit Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Find Us in Kanungu
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We're located in Ahakibungo, Nyamirama Town Council, Kanungu District.
          </p>
          <div className="mt-6 inline-block rounded-xl bg-white px-6 py-3 shadow-sm border border-amber-200/30">
            <p className="text-sm text-slate-600">
              📍 Ahakibungo, Nyamirama T/C, Kanungu District, Uganda
            </p>
          </div>
          {/* You can add a Google Map embed here if needed */}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
            Contact us today for bulk orders, export inquiries, or partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+256XXX"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
            >
              📞 Call Us Now
            </a>
            <a
              href="mailto:info@swgroundnuts.co.ug"
              className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}