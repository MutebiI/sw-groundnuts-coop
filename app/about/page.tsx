// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function AboutPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Organic blob shapes
//   const blobShapes = [
//     "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
//     "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
//     "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
//     "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
//   ];

//   const softShapes = [
//     "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
//     "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ===== HERO ===== */}
//       <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-amber-950/95 via-amber-900/90 to-amber-800/90" />
//           <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-700/20 blur-3xl" />
//           <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-600/20 blur-3xl" />
          
//           <svg
//             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgba(255, 255, 255, 0.06)"
//               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </svg>
//         </div>

//         <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-amber-200 border border-amber-500/20 mb-6">
//               <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
//               About Us
//             </span>

//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Women-Led
//               <br />
//               <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
//                 Cooperative with Purpose
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
//               Founded in 2025, we empower women farmers in Kanungu District by adding 
//               value to groundnuts, creating premium products and sustainable livelihoods.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
//                 📋 Reg: P.28122/RCS
//               </div>
//               <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
//                 📅 Founded 2025
//               </div>
//               <div className="rounded-lg bg-amber-800/50 px-4 py-2 text-sm text-amber-200 border border-amber-500/20">
//                 👩🏾‍🌾 50+ Women Members
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHO WE ARE ===== */}
//       <section ref={sectionRef} className="bg-white py-24 border-t border-amber-200/20">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <div>
//               <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
//                 Who We Are
//               </span>
//               <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//                 A Cooperative with a Mission
//               </h2>
//               <p className="mt-4 text-lg text-slate-600 leading-relaxed">
//                 Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
//                 is a registered Women's Cooperative Union and SME based in Nyamirama 
//                 town council, Kanungu District, Uganda.
//               </p>
//               <p className="mt-4 text-slate-600 leading-relaxed">
//                 We turn locally sourced agricultural produce into high-quality, 
//                 nutritious foods — starting with our premium peanut butter.
//               </p>
//               <div className="mt-6 flex flex-wrap gap-3">
//                 <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
//                   🏆 Women-Led
//                 </span>
//                 <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
//                   🌱 Sustainable
//                 </span>
//                 <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
//                   📦 Export-Ready
//                 </span>
//               </div>
//             </div>

//             <div className="relative">
//               <div className={`absolute -inset-6 bg-gradient-to-br from-amber-100/30 to-amber-200/20 ${blobShapes[0]}`} />
//               <div className="relative bg-amber-800 p-8 rounded-2xl text-white shadow-xl">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4">👩🏾‍🌾</div>
//                   <h3 className="text-xl font-bold">Our Commitment</h3>
//                   <p className="mt-2 text-amber-200/80 text-sm leading-relaxed">
//                     "We are committed to producing safe, high-quality groundnut products 
//                     while improving the economic livelihoods of our women members."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== MISSION & VISION ===== */}
//       <section className="bg-amber-50/30 py-24 border-t border-amber-200/20">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-2">
//             <div
//               className={`relative transition-all duration-700 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: "0ms" }}
//             >
//               <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[1]}`} />
//               <div className="relative bg-white p-10 rounded-2xl border border-amber-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
//                 <div className="text-4xl mb-4">👁️</div>
//                 <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   To become a leading trusted supplier of safe, nutritious groundnut 
//                   products in East Africa while improving the economic livelihoods of 
//                   our women members.
//                 </p>
//               </div>
//             </div>

//             <div
//               className={`relative transition-all duration-700 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: "100ms" }}
//             >
//               <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[2]}`} />
//               <div className="relative bg-white p-10 rounded-2xl border border-amber-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
//                 <div className="text-4xl mb-4">🎯</div>
//                 <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   To add value to locally sourced groundnuts, creating high-quality, 
//                   nutritious foods for local and export markets while empowering 
//                   women farmers through sustainable enterprise.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PARTNERS ===== */}
//       <section className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto">
//             <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
//               Our Partners
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               Supported by Trusted Organizations
//             </h2>
//             <p className="mt-3 text-slate-600">
//               We work with international and local partners to achieve our mission.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 name: "Shared Interest Foundation",
//                 location: "UK",
//                 description: "Providing funding and technical support",
//               },
//               {
//                 name: "Kanungu District Government",
//                 location: "Uganda",
//                 description: "Local government support and coordination",
//               },
//               {
//                 name: "UNBS",
//                 location: "Uganda",
//                 description: "Quality certification and Q-Mark",
//               },
//             ].map((partner, i) => (
//               <div
//                 key={i}
//                 className={`text-center p-6 rounded-2xl border border-amber-200/30 bg-amber-50/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//                 }`}
//                 style={{ transitionDelay: `${i * 150}ms` }}
//               >
//                 <div className="text-3xl mb-3">
//                   {i === 0 ? "🇬🇧" : i === 1 ? "🏛️" : "✅"}
//                 </div>
//                 <h3 className="font-bold text-slate-800">{partner.name}</h3>
//                 <p className="text-sm text-slate-500">{partner.location}</p>
//                 <p className="mt-2 text-sm text-slate-600">{partner.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
//         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Partner With Us
//           </h2>
//           <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
//             Whether you're a buyer, funder, or development partner — we're ready to work with you.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="/contact"
//               className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
//             >
//               Get in Touch
//             </Link>
//             <Link
//               href="/products"
//               className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
//             >
//               View Our Products →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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

  // Wavy organic shapes for cards
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
      {/* ===== HERO WITH BACKGROUND IMAGE ===== */}
      <section className="relative isolate overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.jpg"
            alt="Women farmers processing groundnuts"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/85 via-amber-900/80 to-amber-800/85" />
          
          {/* Decorative wavy shapes */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-700/30 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-600/30 blur-3xl" />

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
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-amber-200 border border-amber-500/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              About Us
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Women-Led
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Cooperative with Purpose
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
              Founded in 2025, we empower women farmers in Kanungu District by adding 
              value to groundnuts, creating premium products and sustainable livelihoods.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-full bg-amber-800/50 px-5 py-2 text-sm text-amber-200 border border-amber-500/20">
                📋 Reg: P.28122/RCS
              </div>
              <div className="rounded-full bg-amber-800/50 px-5 py-2 text-sm text-amber-200 border border-amber-500/20">
                📅 Founded 2025
              </div>
              <div className="rounded-full bg-amber-800/50 px-5 py-2 text-sm text-amber-200 border border-amber-500/20">
                👩🏾‍🌾 50+ Women Members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE - WAVY SHAPES ===== */}
      <section ref={sectionRef} className="relative overflow-hidden bg-white py-24 border-t border-amber-200/20">
        {/* Decorative wavy background blobs */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-100/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text Content - Animated */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                A Cooperative with a Mission
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Southwestern Groundnuts Value-Added Union Cooperative Society Limited 
                is a registered Women's Cooperative Union and SME based in Nyamirama 
                town council, Kanungu District, Uganda.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We turn locally sourced agricultural produce into high-quality, 
                nutritious foods — starting with our premium peanut butter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                  🏆 Women-Led
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                  🌱 Sustainable
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                  📦 Export-Ready
                </span>
              </div>
            </div>

            {/* Wavy Shape Card - Not Rectangular */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br from-amber-100/40 to-amber-200/30 ${blobShapes[0]}`} />
              <div className={`relative bg-amber-800 p-10 text-white shadow-xl ${blobShapes[1]}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">👩🏾‍🌾</div>
                  <h3 className="text-xl font-bold">Our Commitment</h3>
                  <p className="mt-2 text-amber-200/80 text-sm leading-relaxed">
                    "We are committed to producing safe, high-quality groundnut products 
                    while improving the economic livelihoods of our women members."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION - WAVY SHAPES ===== */}
      <section className="relative overflow-hidden bg-amber-50/30 py-24 border-t border-amber-200/20">
        <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] bg-amber-100/30 blur-2xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-[40%_60%_50%_50%/50%_50%_60%_40%] bg-amber-100/30 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision - Wavy Card */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[2]}`} />
              <div className={`relative bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[3]}`}>
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  To become a leading trusted supplier of safe, nutritious groundnut 
                  products in East Africa while improving the economic livelihoods of 
                  our women members.
                </p>
              </div>
            </div>

            {/* Mission - Wavy Card */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[0]}`} />
              <div className={`relative bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[1]}`}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  To add value to locally sourced groundnuts, creating high-quality, 
                  nutritious foods for local and export markets while empowering 
                  women farmers through sustainable enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS - WAVY SHAPES ===== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-100/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Our Partners
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Supported by Trusted Organizations
            </h2>
            <p className="mt-3 text-slate-600">
              We work with international and local partners to achieve our mission.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Shared Interest Foundation",
                location: "UK",
                description: "Providing funding and technical support",
              },
              {
                name: "Kanungu District Government",
                location: "Uganda",
                description: "Local government support and coordination",
              },
              {
                name: "UNBS",
                location: "Uganda",
                description: "Quality certification and Q-Mark",
              },
            ].map((partner, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-amber-100/60 to-amber-50/30 ${blobShapes[i % blobShapes.length]}`} />
                <div className={`relative bg-white p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[(i + 2) % blobShapes.length]}`}>
                  <div className="text-3xl mb-3">
                    {i === 0 ? "🇬🇧" : i === 1 ? "🏛️" : "✅"}
                  </div>
                  <h3 className="font-bold text-slate-800">{partner.name}</h3>
                  <p className="text-sm text-slate-500">{partner.location}</p>
                  <p className="mt-2 text-sm text-slate-600">{partner.description}</p>
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
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
            Whether you're a buyer, funder, or development partner — we're ready to work with you.
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