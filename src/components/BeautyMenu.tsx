import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// All images are UNIQUE — not used anywhere else on the site
const packages = [
    {
        title: "Signature Manicure",
        price: "AED 59",
        description: "Precision nail care with premium finishes.",
        features: ["Cuticle care", "Shaping", "Premium polish", "Hand massage"],
        featured: false,
        // Fresh: close-up nail art / gel polish (service-relevant, not used elsewhere)
        imgUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop"
    },
    {
        title: "Beauty Bundle",
        price: "AED 99",
        description: "The essential grooming collection.",
        features: ["Express Mani/Pedi", "Blow-dry", "Threading", "Refreshment"],
        featured: true,
        // Blow-dry / hair styling in salon (verified working, not used elsewhere)
        imgUrl: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=900&auto=format&fit=crop"
    },
    {
        title: "Complete Color",
        price: "AED 199",
        description: "Transformative hair coloring service.",
        features: ["Full head tint", "Gloss treatment", "Style & Finish", "Consultation"],
        featured: false,
        // Hair coloring application in salon (verified working, not used elsewhere)
        imgUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=900&auto=format&fit=crop"
    }
];

const BeautyMenu = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    return (
        <section id="pricing" ref={containerRef} className="py-16 md:py-24 bg-obsidian relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,201,152,0.04)_0%,transparent_65%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 md:mb-14 space-y-3">
                    <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider">
                        Curated <span className="italic text-champagne lowercase">Membership</span>
                    </h2>
                    <p className="font-sans text-champagne/60 text-sm md:text-base">Transparent pricing. Elevated service.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            className={`pricing-card rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 ${pkg.featured
                                ? 'border border-champagne/40 shadow-[0_0_40px_rgba(230,201,152,0.08)] scale-100 md:scale-105 z-10 relative'
                                : 'border border-white/8 hover:border-champagne/20 relative z-0'
                                } bg-gradient-to-b from-[#1a1711] to-[#0e0c09]`}
                        >
                            {/* Static Image — always visible */}
                            <div className="relative w-full h-44 md:h-52 overflow-hidden flex-shrink-0">
                                <img
                                    src={pkg.imgUrl}
                                    alt={pkg.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 brightness-90"
                                />
                                {/* Gradient fade at bottom of image into card */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e0c09] to-transparent" />

                                {/* "Most Popular" badge overlaid on image */}
                                {pkg.featured && (
                                    <span className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-widest text-obsidian bg-champagne px-3 py-1 rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{pkg.title}</h3>
                                <p className="font-sans text-champagne/55 text-xs md:text-sm mb-4">{pkg.description}</p>

                                <div className="text-3xl md:text-4xl font-sans font-light text-champagne mb-5">
                                    {pkg.price}
                                </div>

                                <ul className="space-y-3 mb-6 flex-1">
                                    {pkg.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-sans text-xs md:text-sm text-white/75">
                                            <div className="w-1 h-1 rounded-full bg-champagne flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Accent divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-champagne/25 to-transparent mb-5" />

                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                                    className={`w-full py-3 md:py-4 rounded-full font-sans uppercase tracking-[0.2em] text-xs transition-all duration-300 ${pkg.featured
                                        ? 'bg-champagne text-obsidian font-semibold hover:bg-white hover:shadow-[0_0_20px_rgba(230,201,152,0.4)]'
                                        : 'bg-white/5 text-white hover:bg-white/12 border border-white/10'
                                        }`}
                                >
                                    Select Tier
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeautyMenu;
