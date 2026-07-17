"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
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

  const galleryImages = [
  {
    id: 1,
    src: "/images/members.jpg",
    title: "Union members during a community gathering",
    category: "Community",
  },
  {
    id: 2,
    src: "/images/agm-meeting.jpg",
    title: "Members during the Annual General Meeting",
    category: "Meetings",
  },
  {
    id: 3,
    src: "/images/women-sorting.jpg",
    title: "Women sorting groundnuts",
    category: "Processing",
  },
  {
    id: 4,
    src: "/images/sacks-truck.jpg",
    title: "Freshly harvested groundnuts being transported",
    category: "Supply Chain",
  },
  {
    id: 5,
    src: "/images/sacks-floor.jpg",
    title: "Packed groundnuts ready for processing",
    category: "Supply Chain",
  },
  {
    id: 6,
    src: "/images/quality-product.jpg",
    title: "Premium groundnut products — quality you can trust",
    category: "Products",
  },
];

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
            alt="Gallery"
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
              Gallery
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Story in
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Pictures
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-blue-100/80 leading-relaxed">
              A visual journey through our cooperative — from our community to our products.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider bg="bg-blue-100" />

      {/* ===== GALLERY GRID ===== */}
      <section ref={sectionRef} className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className={`inline-block bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ${softShapes[0]}`}>
              Photo Gallery
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Moments That Matter
            </h2>
            <p className="mt-3 text-slate-600">
              Capturing the people, work, and community behind our cooperative.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <div
                key={image.id}
                className={`relative group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-64 w-full bg-slate-100">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-blue-600 font-medium">{image.category}</p>
                    <p className="mt-1 text-sm font-medium text-slate-800">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <WaveDivider bg="bg-amber-100" /> */}

      {/* ===== CTA ===== */}
      <section className="relative bg-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See Our Products in Action
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            Visit our products page to see what we create from all this hard work.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-blue-800 transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              View Products →
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-blue-400/30 px-8 py-3.5 font-medium text-blue-200 transition-all hover:bg-blue-700/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}