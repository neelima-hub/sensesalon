import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxDivider = () => {
    const containerRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !imageRef.current) return;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            animation: gsap.fromTo(imageRef.current,
                { yPercent: -20 },
                { yPercent: 20, ease: "none" }
            )
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[40vh] overflow-hidden border-y border-champagne/5">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-black/60 to-obsidian" />
            <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2574&auto=format&fit=crop"
                alt="JLT Skyline at Night"
                className="absolute top-[-20%] left-0 w-full h-[140%] object-cover pointer-events-none"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span className="font-serif italic text-3xl md:text-5xl text-champagne/80 tracking-wide text-center px-4">
                    Refinement from every elevation.
                </span>
            </div>
        </section>
    );
};

export default ParallaxDivider;
