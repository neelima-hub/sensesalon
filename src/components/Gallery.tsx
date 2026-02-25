import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: "https://images.unsplash.com/photo-1521590832167-7bfcbaa63353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1516975080661-412cf305f884?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1595475883201-9a4f4efad663?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
];

const Gallery = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;

        if (section && grid) {
            gsap.fromTo(grid.children,
                { y: 100, opacity: 0 },
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
        <section id="gallery" ref={sectionRef} className="py-24 px-6 md:px-12 bg-charcoal border-y border-champagne/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-champagne tracking-[0.2em] text-sm uppercase mb-4 block">The Ambience</span>
                    <h2 className="font-serif italic text-4xl md:text-5xl text-champagne">Visual Journey</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4" ref={gridRef}>
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative overflow-hidden group rounded-sm bg-obsidian flex items-center justify-center p-2 border border-champagne/5 ${img.span}`}>
                            <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={img.src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-contain transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
