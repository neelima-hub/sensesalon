import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

        tl.fromTo('.hero-bg',
            { scale: 1.1, filter: 'blur(20px)', autoAlpha: 0 },
            { scale: 1, filter: 'blur(4px)', autoAlpha: 1, duration: 2.5 }
        )
            .fromTo('.hero-text-line',
                { y: 50, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.2 },
                '-=1.5'
            )
            .fromTo('.hero-scroll-indicator',
                { autoAlpha: 0, y: -20 },
                { autoAlpha: 1, y: 0, duration: 1 },
                '-=0.5'
            );

        gsap.to('.hero-bg-parallax', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center pt-20 md:pt-24">
            {/* Background Image with Parallax & Blur */}
            <div className="absolute inset-0 z-0 bg-obsidian hero-bg-parallax">
                <div
                    className="absolute inset-0 bg-cover bg-center hero-bg opacity-40 mix-blend-luminosity"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full flex flex-col justify-center h-full">
                <div ref={textRef} className="space-y-3 md:space-y-4 max-w-4xl">
                    <p className="hero-text-line font-sans text-champagneDark tracking-[0.15em] md:tracking-[0.2em] uppercase text-[11px] md:text-base font-semibold">
                        28th Floor, Oaks Liwa Heights, JLT
                    </p>
                    <h1 className="text-[2.6rem] sm:text-5xl md:text-8xl lg:text-9xl text-white leading-[1.1] tracking-tight">
                        <span className="block hero-text-line font-sans font-bold">Elevation meets</span>
                        <span className="block hero-text-line font-serif italic text-champagne mt-1 md:mt-2">Elegance.</span>
                    </h1>
                    <p className="hero-text-line font-sans text-champagne/60 max-w-sm md:max-w-lg mt-4 md:mt-8 text-base md:text-lg font-light leading-relaxed">
                        Panoramic views, precision styling, and a sanctuary of aesthetic refinement above the skyline of Dubai.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 hero-scroll-indicator flex flex-col items-center gap-2">
                <span className="font-sans text-[10px] tracking-widest uppercase text-champagne/50">Scroll to Discover</span>
                <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-champagne/50 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
