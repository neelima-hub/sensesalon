import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SignatureTreatments = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panels = gsap.utils.toArray('.panel') as HTMLElement[];

        panels.forEach((panel, i) => {
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

            {/* Panel 1 — Brazilian Blowout */}
            <div className="panel h-screen w-full flex items-center justify-center sticky top-0 border-y border-champagne/10 relative z-10 overflow-hidden">
                {/* Rich background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop')",
                        opacity: 0.45
                    }}
                />
                {/* Warm dark overlay — not pure black */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a06] via-[#1a1108]/70 to-[#0d0a06]" />
                {/* Champagne glow from center */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,201,152,0.08)_0%,transparent_70%)]" />

                <div className="relative z-20 text-center max-w-2xl px-5 md:px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 01</span>
                    <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-champagne mb-4 md:mb-6">Brazilian Blowout</h2>
                    <p className="text-champagneDark text-sm md:text-base">Achieve lasting smoothness with our authentic Phloreten formula.</p>
                </div>
            </div>

            {/* Panel 2 — Luminous Color */}
            <div className="panel h-screen w-full flex items-center justify-center sticky top-0 border-y border-champagne/10 relative z-20 overflow-hidden shadow-[-10px_-20px_50px_rgba(0,0,0,0.5)]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop')",
                        opacity: 0.30
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d0e]/70 via-[#131519]/40 to-[#0c0d0e]/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,201,152,0.07)_0%,transparent_70%)]" />

                <div className="relative z-20 text-center max-w-2xl px-5 md:px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 02</span>
                    <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-champagne mb-4 md:mb-6">Luminous Color</h2>
                    <p className="text-champagneDark text-sm md:text-base">Multi-dimensional highlights that catch the Dubai sun.</p>
                </div>
            </div>

            {/* Panel 3 — Oaks Liwa Spa */}
            <div className="panel h-screen w-full flex items-center justify-center sticky top-0 border-y border-champagne/10 relative z-30 overflow-hidden shadow-[-10px_-20px_50px_rgba(0,0,0,0.5)]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2574&auto=format&fit=crop')",
                        opacity: 0.35
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060a0b]/70 via-[#0a1415]/40 to-[#060a0b]/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,201,152,0.08)_0%,transparent_70%)]" />

                <div className="relative z-20 text-center max-w-2xl px-5 md:px-6">
                    <span className="text-champagne uppercase tracking-widest text-xs mb-4 block">Signature 03</span>
                    <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-champagne mb-4 md:mb-6">Oaks Liwa Spa</h2>
                    <p className="text-champagneDark text-sm md:text-base">Escape the city with our rejuvenating full-body experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default SignatureTreatments;
