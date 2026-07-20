
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

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

//   const softShapes = [
//     "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
//     "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
//   ];

//   const WaveDivider = ({ bg = "bg-blue-50" }: { bg?: string }) => (
//     <div className={`relative h-24 w-full overflow-hidden ${bg}`}>
//       <svg
//         className="absolute -bottom-1 left-0 w-full"
//         viewBox="0 0 1440 200"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#ffffff"
//           d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
//         />
//       </svg>
//     </div>
//   );

//   // Blue shapes for cards
//   const blueShapes = [
//     "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
//     "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
//     "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
//     "rounded-[50%_50%_40%_60%/60%_40%_50%_50%]",
//   ];

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       {/* ===== HERO ===== */}
//       <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
//         <div className="absolute inset-0 -z-10">
//           <Image
//             src="/images/about-us.jpg"
//             alt="About us"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/75 to-blue-900/85" />
          
//           <svg
//             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgba(255, 255, 255, 0.25)"
//               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </svg>
//         </div>

//         <div className="mx-auto max-w-7xl px-5 py-12 lg:py-16 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-blue-200 border border-blue-500/20 mb-4">
//               <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
//               About Us
//             </span>

//             <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
//               Women-Led
//               <br />
//               <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
//                 Cooperative with Purpose
//               </span>
//             </h1>

//             <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
//               Founded in 2025, we empower women farmers in Kanungu District by adding 
//               value to groundnuts, creating premium products and sustainable livelihoods.
//             </p>

//             <div className="mt-4 flex flex-wrap gap-3">
//               <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
//                 📋 Reg: P.28122/RCS
//               </div>
//               <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
//                 📅 Founded 2025
//               </div>
//               <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
//                 👩🏾‍🌾 50+ Women Members
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <WaveDivider bg="bg-blue-100" />

//       {/* ===== WHO WE ARE ===== */}
//       <section ref={sectionRef} className="relative bg-white py-16">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <div
//               className={`transition-all duration-500 ${
//                 isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
//               }`}
//             >
//               <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
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

//             <div
//               className={`relative transition-all duration-500 ${
//                 isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
//               }`}
//             >
//               <div className="relative bg-blue-700 p-8 rounded-2xl text-white shadow-xl overflow-hidden">
//                 <div className={`absolute -right-10 -top-10 w-48 h-48 bg-blue-400/30 blur-2xl ${blueShapes[0]}`} />
//                 <div className="relative z-10 text-center">
//                   <div className="text-6xl mb-4">👩🏾‍🌾</div>
//                   <h3 className="text-xl font-bold">Our Commitment</h3>
//                   <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">
//                     "We are committed to producing safe, high-quality groundnut products 
//                     while improving the economic livelihoods of our women members."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <WaveDivider bg="bg-blue-100" />

//       {/* ===== OUR MEMBERS (PHOTOS) ===== */}
//       <section className="relative bg-slate-50/50 ">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-10">
//             <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
//               Our Community
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               The People Behind the Products
//             </h2>
//             <p className="mt-3 text-slate-600">
//               Meet the dedicated women farmers and members who make our cooperative strong.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2">
//             {/* Members Photo */}
//             <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
//               <div className="relative h-64 w-full">
//                 <Image
//                   src="/images/members.jpg"
//                   alt="Union members group photo"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <p className="text-sm font-medium text-slate-700">Union members during a community gathering</p>
//               </div>
//             </div>

//             {/* AGM Meeting Photo */}
//             <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
//               <div className="relative h-64 w-full">
//                 <Image
//                   src="/images/agm-meeting.jpg"
//                   alt="Annual General Meeting"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <p className="text-sm font-medium text-slate-700">Members during the Annual General Meeting</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <WaveDivider bg="bg-blue-100" />

//       {/* ===== MISSION & VISION ===== */}
//       <section className="relative bg-white py-16">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-6 md:grid-cols-2">
//             {[
//               {
//                 icon: "👁️",
//                 title: "Our Vision",
//                 description: "To become a leading trusted supplier of safe, nutritious groundnut products in East Africa while improving the economic livelihoods of our women members.",
//               },
//               {
//                 icon: "🎯",
//                 title: "Our Mission",
//                 description: "To add value to locally sourced groundnuts, creating high-quality, nutritious foods for local and export markets while empowering women farmers through sustainable enterprise.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className={`relative transition-all duration-500 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: `${i * 50}ms` }}
//               >
//                 <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
//                   <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-blue-100/40 blur-2xl ${blueShapes[(i + 2) % blueShapes.length]}`} />
//                   <div className="relative z-10">
//                     <div className="text-4xl mb-3">{item.icon}</div>
//                     <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
//                     <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <WaveDivider bg="bg-amber-100" />

//       {/* ===== PARTNERS ===== */}
//       <section className="relative bg-slate-50/50 ">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

//         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
//             Our Partners
//           </span>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//             Supported by Trusted Organizations
//           </h2>
//           <p className="mt-3 text-slate-600">
//             We work with international and local partners to achieve our mission.
//           </p>

//           <div className="mt-6 flex flex-wrap justify-center gap-3">
//             {[
//               {
//                 name: "Shared Interest Foundation",
//                 location: "UK",
//                 description: "Providing funding and technical support",
//                 icon: "🇬🇧",
//               },
//               {
//                 name: "Kanungu District Government",
//                 location: "Uganda",
//                 description: "Local government support and coordination",
//                 icon: "🏛️",
//               },
//               {
//                 name: "UNBS",
//                 location: "Uganda",
//                 description: "Quality certification and Q-Mark",
//                 icon: "✅",
//               },
//             ].map((partner, i) => (
//               <div
//                 key={i}
//                 className={`relative transition-all duration-500 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: `${i * 50}ms` }}
//               >
//                 <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
//                   <div className={`absolute -right-10 -top-10 w-32 h-32 bg-blue-100/30 blur-xl ${blueShapes[(i + 3) % blueShapes.length]}`} />
//                   <div className="relative z-10 text-center">
//                     <div className="text-3xl mb-2">{partner.icon}</div>
//                     <h3 className="font-bold text-slate-800">{partner.name}</h3>
//                     <p className="text-sm text-slate-500">{partner.location}</p>
//                     <p className="mt-1 text-sm text-slate-600">{partner.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
// {/* 
//       <WaveDivider bg="bg-blue-100" /> */}
// <section className="py-10"></section>
//       {/* ===== CTA ===== */}
//       <section className="relative bg-blue-800 py-16">
//         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Partner With Us
//           </h2>
//           <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
//             Whether you're a buyer, funder, or development partner — we're ready to work with you.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="/contact"
//               className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
//             >
//               Get in Touch
//             </Link>
//             <Link
//               href="/products"
//               className="rounded-full border border-blue-400/30 px-8 py-3.5 font-medium text-blue-200 transition-all hover:bg-blue-700/30"
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

  // Blue shapes for cards
  const blueShapes = [
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
    "rounded-[50%_50%_40%_60%/60%_40%_50%_50%]",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-us.jpg"
            alt="About us"
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
              About Us
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Women-Led
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Cooperative with Purpose
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              Founded in 2025, we empower women farmers in Kanungu District by adding 
              value to groundnuts, creating premium products and sustainable livelihoods.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                📋 Reg: P.28122/RCS
              </div>
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                📅 Founded 2025
              </div>
              <div className="rounded-full bg-blue-800/50 px-4 py-1.5 text-xs text-blue-200 border border-blue-500/20">
                👩🏾‍🌾 50+ Women Members
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== WHO WE ARE ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                A Cooperative with a Mission
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Founded in 2025, SW Groundnuts Value Addition Union is a women-owned, controlled, and governed cooperative established to provide sustainable, market-based, and environmentally friendly solutions to reduce poverty.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Through programs and value-added groundnut products, the Union aims to provide employment opportunities and markets for members' produce.
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

            <div
              className={`relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
            >
              <div className="relative bg-blue-700 p-8 rounded-2xl text-white shadow-xl overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-48 h-48 bg-blue-400/30 blur-2xl ${blueShapes[0]}`} />
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">👩🏾‍🌾</div>
                  <h3 className="text-xl font-bold">Our Commitment</h3>
                  <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">
                    "We are committed to producing safe, high-quality groundnut products 
                    while improving the economic livelihoods of our women members."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== MEMBER SOCIETIES ===== */}
     {/* ===== MEMBER SOCIETIES ===== */}
<section className="relative bg-slate-50/50 py-16">
  <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
  <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-10">
      <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
        Member Societies
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
        Three Districts, One Union
      </h2>
      <p className="mt-3 text-slate-600">
        The Union is owned by three primary societies from the Districts of Kanungu, Rukungiri, and Mitooma in southwestern Uganda.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: "Kiyanga Women Groundnuts Growers & Processors",
          location: "Kanungu District",
          reg: "P.27018 RCS",
          color: "from-blue-50 to-blue-100",
          border: "border-blue-200",
          number: "01",
        },
        {
          name: "Bwambara Bakyara Women Groundnuts Growers",
          location: "Rukungiri District",
          reg: "P.27021 RCS",
          color: "from-amber-50 to-amber-100",
          border: "border-amber-200",
          number: "02",
        },
        {
          name: "Nyamirama Women Groundnuts Growers",
          location: "Mitooma District",
          reg: "P.270120 RCS",
          color: "from-emerald-50 to-emerald-100",
          border: "border-emerald-200",
          number: "03",
        },
      ].map((society, i) => (
        <div
          key={i}
          className={`relative transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${society.color} blur-2xl ${blueShapes[i % blueShapes.length]}`} />
            <div className="relative z-10">
              {/* Number instead of icon */}
              <div className="text-4xl font-bold text-amber-600/30 mb-2">
                {society.number}
              </div>
              <h3 className="font-bold text-slate-800 text-sm">{society.name}</h3>
              <p className="text-sm text-slate-500">{society.location}</p>
              <p className="mt-1 text-xs text-slate-400">{society.reg}</p>
              {/* Small colored dot indicator */}
              <div className={`mt-3 w-8 h-1 rounded-full bg-gradient-to-r ${society.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== OUR MEMBERS (PHOTOS) ===== */}
      <section className="relative bg-white py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Our Community
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              The People Behind the Products
            </h2>
            <p className="mt-3 text-slate-600">
              Meet the dedicated women farmers and members who make our cooperative strong.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Members Photo */}
            <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/members.jpg"
                  alt="Union members group photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-slate-700">Union members during a community gathering</p>
              </div>
            </div>

            {/* AGM Meeting Photo */}
            <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/agm-meeting.jpg"
                  alt="Annual General Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-slate-700">Members during the Annual General Meeting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== IMPACT STORIES ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
              Impact Stories
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Real Lives, Real Change
            </h2>
            <p className="mt-3 text-slate-600">
              Hear from women whose lives have been transformed by the cooperative.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Story 1 */}
            <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-blue-100/30 blur-2xl ${blueShapes[2]}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm">
                    AK
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Kyomugisha Anitah</h3>
                    <p className="text-xs text-slate-500">Kanungu District</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "Through this Union Cooperative since 2025, I have significantly increased my income from the sale of groundnuts by working within an organized and registered cooperative. As a result, I am now able to support my children's education. The project has also strengthened my leadership capacity; I was elected as one of the cooperative leaders and now confidently engage with district authorities to demand services for our community. This initiative has empowered me economically and socially."
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-blue-100/30 blur-2xl ${blueShapes[3]}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm">
                    NC
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Nuwagaba Claire</h3>
                    <p className="text-xs text-slate-500">Member</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "I am grateful for the support provided by Shared Interest through this project. The seeds we received enabled us to improve our groundnut production. The project also organized community meetings that strengthened my relationships and collaboration with neighbors. From the income I earned through groundnut sales, I was able to purchase a goat, which I am currently rearing, and buy clothes for my children. This project has improved both my household income and overall well-being."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== MISSION & VISION ===== */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "👁️",
                title: "Our Vision",
                description: "To become a leading trusted supplier of safe, nutritious groundnut products in East Africa while improving the economic livelihoods of our women members.",
              },
              {
                icon: "🎯",
                title: "Our Mission",
                description: "To add value to locally sourced groundnuts, creating high-quality, nutritious foods for local and export markets while empowering women farmers through sustainable enterprise.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full overflow-hidden">
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-blue-100/40 blur-2xl ${blueShapes[(i + 2) % blueShapes.length]}`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-amber-100" />

      {/* ===== PARTNERS ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-100/40 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-50/40 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
            Our Partners
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Supported by Trusted Organizations
          </h2>
          <p className="mt-3 text-slate-600">
            We work with international and local partners to achieve our mission.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              {
                name: "Shared Interest Foundation",
                location: "UK",
                description: "Providing funding and technical support",
                icon: "🇬🇧",
              },
              {
                name: "Kanungu District Government",
                location: "Uganda",
                description: "Local government support and coordination",
                icon: "🏛️",
              },
              {
                name: "UNBS",
                location: "Uganda",
                description: "Quality certification and Q-Mark",
                icon: "✅",
              },
            ].map((partner, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-blue-100/30 blur-xl ${blueShapes[(i + 3) % blueShapes.length]}`} />
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-2">{partner.icon}</div>
                    <h3 className="font-bold text-slate-800">{partner.name}</h3>
                    <p className="text-sm text-slate-500">{partner.location}</p>
                    <p className="mt-1 text-sm text-slate-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10"></section>

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Whether you're a buyer, funder, or development partner — we're ready to work with you.
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