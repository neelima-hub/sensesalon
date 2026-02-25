import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SignatureTreatments = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panels = gsap.utils.toArray('.panel') as HTMLElement[];

        // CSS 'sticky' handles the stacking naturally.
        panels.forEach((panel, i) => {            // Blur out earlier panels
            if (i > 0) {
                gsap.to(panels[i - 1], {
                    filter: 'blur(10px)',
                    opacity: 0.3,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="treatments" ref={containerRef} className="relative w-full">
            {/* Panel 1 */}
            <div className="panel h-screen w-full bg-obsidian flex items-center justify-center sticky top-0 border-y border-champagne/5 relative z-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative z-20 text-center max-w-2xl px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 01</span>
                    <h2 className="font-serif italic text-5xl md:text-7xl text-champagne mb-6">Brazilian Blowout</h2>
                    <p className="text-champagneDark">Achieve lasting smoothness with our authentic Phloreten formula.</p>
                </div>
            </div>

            {/* Panel 2 */}
            <div className="panel h-screen w-full bg-charcoal flex items-center justify-center sticky top-0 border-y border-champagne/5 relative z-20 shadow-[-10px_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative z-20 text-center max-w-2xl px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 02</span>
                    <h2 className="font-serif italic text-5xl md:text-7xl text-champagne mb-6">Luminous Color</h2>
                    <p className="text-champagneDark">Multi-dimensional highlights that catch the Dubai sun.</p>
                </div>
            </div>

            {/* Panel 3 */}
            <div className="panel h-screen w-full bg-obsidian flex items-center justify-center sticky top-0 border-y border-champagne/5 relative z-30 shadow-[-10px_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516975080661-46b048701977?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative z-20 text-center max-w-2xl px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 03</span>
                    <h2 className="font-serif italic text-5xl md:text-7xl text-champagne mb-6">Oaks Liwa Spa</h2>
                    <p className="text-champagneDark">Escape the city with our rejuvenating full-body experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default SignatureTreatments;
