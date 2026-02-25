import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const packages = [
    {
        title: "Signature Manicure",
        price: "AED 59",
        description: "Precision nail care with premium finishes.",
        features: ["Cuticle care", "Shaping", "Premium polish", "Hand massage"],
        featured: false,
        // TODO: Replace with actual Senses Salon photos
        imgUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "Beauty Bundle",
        price: "AED 99",
        description: "The essential grooming collection.",
        features: ["Express Mani/Pedi", "Blow-dry", "Threading", "Refreshment"],
        featured: true,
        // TODO: Replace with actual Senses Salon photos
        imgUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "Complete Color",
        price: "AED 199",
        description: "Transformative hair coloring service.",
        features: ["Full head tint", "Gloss treatment", "Style & Finish", "Consultation"],
        featured: false,
        // TODO: Replace with actual Senses Salon photos
        imgUrl: "https://images.unsplash.com/photo-1516975080661-46b048701977?q=80&w=2574&auto=format&fit=crop"
    }
];

const BeautyMenu = () => {
    const containerRef = useRef<HTMLElement>(null);
    const cursorImageRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const xTo = useRef<gsap.QuickToFunc>();
    const yTo = useRef<gsap.QuickToFunc>();

    useGSAP(() => {
        // Entrance animation
        gsap.fromTo('.pricing-card',
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.15,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%'
                }
            }
        );

        // Setup quickTo for cursor follow
        if (cursorImageRef.current) {
            xTo.current = gsap.quickTo(cursorImageRef.current, "x", { duration: 0.4, ease: "power3" }) as any;
            yTo.current = gsap.quickTo(cursorImageRef.current, "y", { duration: 0.4, ease: "power3" }) as any;
        }
    }, { scope: containerRef });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (xTo.current && yTo.current) {
                // Offset the image to be slightly centered on the cursor
                xTo.current(e.clientX - 150);
                yTo.current(e.clientY - 150);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (cursorImageRef.current) {
            if (hoveredIndex !== null) {
                gsap.to(cursorImageRef.current, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
            } else {
                gsap.to(cursorImageRef.current, { autoAlpha: 0, scale: 0.8, duration: 0.3, ease: 'power2.in' });
            }
        }
    }, [hoveredIndex]);

    return (
        <section id="pricing" ref={containerRef} className="py-24 bg-obsidian relative">

            {/* Hover Reveal Image */}
            <div
                ref={cursorImageRef}
                className="fixed top-0 left-0 w-[300px] h-[300px] rounded-3xl overflow-hidden pointer-events-none z-50 opacity-0 scale-80 shadow-2xl"
            >
                {packages.map((pkg, i) => (
                    <img
                        key={i}
                        src={pkg.imgUrl}
                        alt={pkg.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">
                        Curated <span className="italic text-champagne lowercase">Membership</span>
                    </h2>
                    <p className="font-sans text-champagne/60">Transparent pricing. Elevated service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`pricing-card rounded-[2rem] p-8 flex flex-col transition-all duration-500 ${pkg.featured
                                ? 'bg-gradient-to-b from-charcoal to-obsidian border border-champagne/30 shadow-[0_0_30px_rgba(230,201,152,0.05)] scale-100 md:scale-105 z-10 relative'
                                : 'bg-charcoal/20 border border-white/5 hover:border-white/10 relative z-0'
                                }`}
                        >
                            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                {pkg.featured && (
                                    <span className="font-sans text-[10px] uppercase tracking-widest text-champagne bg-champagne/10 px-3 py-1 rounded-full self-start mb-6">Most Popular</span>
                                )}

                                {!pkg.featured && <div className="h-6 mb-6" />}

                                <h3 className="font-serif text-2xl text-white mb-2">{pkg.title}</h3>
                                <p className="font-sans text-champagne/60 text-sm mb-6 max-w-[80%]">{pkg.description}</p>

                                <div className="text-4xl font-sans font-light text-champagne mb-8">
                                    {pkg.price}
                                </div>

                                <div className="flex-1">
                                    <ul className="space-y-4 mb-8">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-3 font-sans text-sm text-white/80">
                                                <div className="w-1 h-1 rounded-full bg-champagne" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                                className={`w-full py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs transition-colors duration-300 relative z-20 pointer-events-auto ${pkg.featured
                                    ? 'bg-champagne text-obsidian font-semibold hover:bg-white'
                                    : 'bg-white/5 text-white hover:bg-white/10'
                                    }`}>
                                Select Tier
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeautyMenu;
