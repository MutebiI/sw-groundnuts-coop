// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function ProductsPage() {
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

//   const products = [
//     {
//       id: 1,
//       name: "Premium Peanut Butter",
//       description: "Smooth, creamy, and rich. Made from carefully selected groundnuts. Aflatoxin-safe and ready for export.",
//       features: ["UNBS Q-Mark Certified", "EAS 60:2013 Compliant", "Aflatoxin-Safe", "Export Quality"],
//       icon: "🥜",
//       color: "from-amber-100 to-amber-50",
//       bgColor: "bg-amber-50",
//     },
//     {
//       id: 2,
//       name: "Pure Groundnut Oil",
//       description: "Cold-pressed, natural groundnut oil perfect for cooking, frying, and food processing.",
//       features: ["Cold-Pressed", "100% Pure", "Natural", "No Additives"],
//       icon: "🫒",
//       color: "from-yellow-100 to-amber-50",
//       bgColor: "bg-yellow-50",
//     },
//     {
//       id: 3,
//       name: "Groundnut Flour",
//       description: "Finely milled, high-protein groundnut flour for baking, food production, and nutrition.",
//       features: ["High Protein", "Fine Milled", "Natural", "Versatile"],
//       icon: "🌾",
//       color: "from-amber-100 to-yellow-50",
//       bgColor: "bg-amber-50/50",
//     },
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
//               Our Products
//             </span>

//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Premium Groundnut
//               <br />
//               <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
//                 Products
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/80">
//               High-quality, aflatoxin-safe groundnut products made with care by women farmers 
//               in a modern, hygienic processing facility.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===== PRODUCTS GRID - WAVY SHAPES ===== */}
//       <section ref={sectionRef} className="relative overflow-hidden bg-white py-24">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-amber-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-amber-100/40 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto">
//             <span className={`inline-block bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
//               Our Range
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               Quality Products from the Heart of Uganda
//             </h2>
//             <p className="mt-3 text-slate-600">
//               Every product is made with care, following strict food safety standards.
//             </p>
//           </div>

//           <div className="mt-16 space-y-16">
//             {products.map((product, i) => (
//               <div
//                 key={product.id}
//                 className={`relative transition-all duration-700 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//                 }`}
//                 style={{ transitionDelay: `${i * 150}ms` }}
//               >
//                 {/* Wavy background blob */}
//                 <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br ${product.color} ${blobShapes[i % blobShapes.length]}`} />
                
//                 {/* Product Card - Wavy Shape */}
//                 <div className={`relative bg-white/90 backdrop-blur-sm p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${blobShapes[(i + 2) % blobShapes.length]}`}>
//                   <div className="flex flex-col lg:flex-row lg:items-center gap-8">
//                     {/* Product Icon/Image */}
//                     <div className="flex-shrink-0">
//                       <div className={`flex h-32 w-32 items-center justify-center rounded-full ${product.bgColor} text-7xl shadow-md`}>
//                         {product.icon}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-slate-800">{product.name}</h3>
//                       <p className="mt-2 text-slate-600 leading-relaxed">{product.description}</p>
                      
//                       {/* Features */}
//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {product.features.map((feature, j) => (
//                           <span key={j} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
//                             ✓ {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA */}
//                     <div className="flex-shrink-0">
//                       <Link
//                         href="/contact"
//                         className="inline-block rounded-full bg-amber-700 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-amber-800 hover:shadow-lg"
//                       >
//                         Inquire Now →
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== QUALITY BADGES ===== */}
//       <section className="relative overflow-hidden bg-amber-50/30 py-20 border-t border-amber-200/20">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-amber-100/20 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-2xl font-bold text-slate-800">Quality You Can Trust</h2>
//           <p className="mt-3 text-slate-600">
//             Our products meet international food safety standards.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             {[
//               { label: "UNBS Q-Mark", icon: "✅" },
//               { label: "EAS 60:2013", icon: "📋" },
//               { label: "Aflatoxin-Safe", icon: "🔬" },
//               { label: "Export Quality", icon: "🌍" },
//             ].map((badge, i) => (
//               <span key={i} className={`rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slate-700 shadow-sm border border-amber-200/30 ${softShapes[i % softShapes.length]}`}>
//                 {badge.icon} {badge.label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-20">
//         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Ready to Order?
//           </h2>
//           <p className="mt-4 text-lg text-amber-200/80 max-w-2xl mx-auto">
//             Contact us for bulk orders, export inquiries, or partnership opportunities.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="/contact"
//               className="rounded-full bg-white px-8 py-3.5 font-medium text-amber-800 transition-all hover:bg-amber-50 hover:shadow-lg"
//             >
//               Contact Sales
//             </Link>
//             <Link
//               href="/about"
//               className="rounded-full border border-amber-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-amber-800/30"
//             >
//               About Our Cooperative →
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

export default function ProductsPage() {
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

  const products = [
    {
      id: 1,
      name: "Premium Peanut Butter",
      description: "Smooth, creamy, and rich. Made from carefully selected groundnuts. Aflatoxin-safe and ready for export.",
      features: ["UNBS Q-Mark Certified", "EAS 60:2013 Compliant", "Aflatoxin-Safe", "Export Quality"],
      icon: "🥜",
    },
    {
      id: 2,
      name: "Pure Groundnut Oil",
      description: "Cold-pressed, natural groundnut oil perfect for cooking, frying, and food processing.",
      features: ["Cold-Pressed", "100% Pure", "Natural", "No Additives"],
      icon: "🫒",
    },
    {
      id: 3,
      name: "Groundnut Flour",
      description: "Finely milled, high-protein groundnut flour for baking, food production, and nutrition.",
      features: ["High Protein", "Fine Milled", "Natural", "Versatile"],
      icon: "🌾",
    },
  ];

  // Blue shapes for cards
  const blueShapes = [
    "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
  ];

  return (  // ← FIXED: Changed from "return {" to "return ("
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/governance-bg.jpg"
            alt="Our Products"
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
              Our Products
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Premium Groundnut
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              High-quality, aflatoxin-safe groundnut products made with care by women farmers 
              in a modern, hygienic processing facility.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== PRODUCTS LIST ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Our Range
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Quality Products from the Heart of Uganda
            </h2>
            <p className="mt-3 text-slate-600">
              Every product is made with care, following strict food safety standards.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Blue shape */}
                  <div className={`absolute -right-10 -top-10 w-48 h-48 bg-blue-100/40 blur-2xl ${blueShapes[i % blueShapes.length]}`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 text-6xl">{product.icon}</div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{product.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.features.map((feature, j) => (
                          <span key={j} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <Link
                        href="/contact"
                        className="inline-block rounded-full bg-amber-600 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-amber-700 hover:shadow-lg"
                      >
                        Inquire Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== QUALITY BADGES ===== */}
      <section className="relative bg-slate-50/50 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-amber-100/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className={`inline-block bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 ${softShapes[0]}`}>
            Quality You Can Trust
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Certified Quality
          </h2>
          <p className="mt-3 text-slate-600">
            Our products meet international food safety standards.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { label: "UNBS Q-Mark", icon: "✅" },
              { label: "EAS 60:2013", icon: "📋" },
              { label: "Aflatoxin-Safe", icon: "🔬" },
              { label: "Export Quality", icon: "🌍" },
            ].map((badge, i) => (
              <span key={i} className={`rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200 ${softShapes[i % softShapes.length]}`}>
                {badge.icon} {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* <WaveDivider bg="bg-blue-100" /> */}

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Order?
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Contact us for bulk orders, export inquiries, or partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              Contact Sales
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-blue-400/30 px-8 py-3.5 font-medium text-blue-200 transition-all hover:bg-blue-700/30"
            >
              About Our Cooperative →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}