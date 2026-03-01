import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: "Sarah M.",
        text: "Stunning views of JLT from the 28th floor, and the best Brazilian Phloreten treatment I've ever had. Flawless execution.",
    },
    {
        name: "Elena R.",
        text: "Purchased the 5-service beauty bundle. The staff is meticulous, professional, and the salon-at-home service is a lifesaver.",
    },
    {
        name: "Aisha K.",
        text: "My absolute go-to for a perfect gelish mani-pedi combo. Luxurious atmosphere and incredibly competitive pricing.",
    }
];

const Testimonials = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo('.review-card',
            { y: 40, autoAlpha: 0, scale: 0.95 },
            {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="reviews" ref={containerRef} className="py-16 md:py-24 bg-black/40 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider">
                        Client <span className="italic text-champagne lowercase">Testimonials</span>
                    </h2>
                    <p className="font-sans text-champagne/60 text-sm md:text-base">Experiences from our valued guests.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
                    {reviews.map((review, i) => (
                        <div key={i} className="review-card bg-charcoal/30 border border-white/5 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col items-center text-center transition-colors hover:border-champagne/20">
                            <div className="flex gap-1 mb-4 md:mb-6 text-champagne">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <p className="font-serif italic text-base md:text-lg text-white mb-6 md:mb-8 flex-1">"{review.text}"</p>
                            <p className="font-sans uppercase tracking-[0.2em] text-xs text-champagne/80">— {review.name}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://share.google/ZcO8RcQG0mqXgkqRl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 md:px-10 py-4 md:py-5 rounded-full border border-champagne text-champagne font-sans uppercase tracking-widest text-xs transition-colors hover:bg-champagne hover:text-obsidian"
                    >
                        Read Our Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
