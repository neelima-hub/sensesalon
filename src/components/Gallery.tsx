import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    {
        src: "https://images.unsplash.com/photo-1521590832167-7bfcbaa63353?q=80&w=800&auto=format&fit=crop",
        alt: "Hair Styling Session",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop",
        alt: "Premium Hair Treatment",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
        alt: "Gel Nail Art",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1595475883201-9a4f4efad663?q=80&w=800&auto=format&fit=crop",
        alt: "Color & Highlights",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=800&auto=format&fit=crop",
        alt: "Luxury Makeup Service",
        span: "md:col-span-1 md:row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
        alt: "Salon Ambience",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1516975080661-412cf305f884?q=80&w=800&auto=format&fit=crop",
        alt: "Brazilian Blowout",
        span: "md:col-span-1 md:row-span-1"
    },
];

const Gallery = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;

        if (section && grid) {
            gsap.fromTo(grid.children,
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    }
                }
            );
        }
    }, []);

    return (
        <section id="gallery" ref={sectionRef} className="py-14 md:py-20 px-4 md:px-12 bg-[#0f0d0b] border-y border-champagne/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-champagne tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">The Ambience</span>
                    <h2 className="font-serif italic text-3xl md:text-5xl text-champagne">Visual Journey</h2>
                </div>

                {/* Mobile: 2-col grid | Desktop: rich bento */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-3 md:gap-4"
                    ref={gridRef}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden group rounded-xl md:rounded-sm bg-obsidian border border-champagne/5 ${img.span}`}
                        >
                            <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out brightness-90 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 z-20 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                <p className="text-white/90 text-[10px] font-sans uppercase tracking-widest">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
