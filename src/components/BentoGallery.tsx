
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
    {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop",
        alt: "Luxury Hair Styling Interior",
        span: "col-span-1 md:col-span-2 md:row-span-2",
        height: "h-64 md:h-auto"
    },
    {
        src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop",
        alt: "Nail Art & Manicure",
        span: "col-span-1 md:col-span-1 md:row-span-1",
        height: "h-48 md:h-auto"
    },
    {
        src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop",
        alt: "Spa & Beauty Treatment",
        span: "col-span-1 md:col-span-1 md:row-span-2",
        height: "h-48 md:h-auto"
    },
    {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
        alt: "Professional Hair Blowout",
        span: "col-span-1 md:col-span-1 md:row-span-1",
        height: "h-48 md:h-auto"
    }
];

const BentoGallery = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo('.bento-item',
            { y: 40, opacity: 0, scale: 0.97 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.12,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-12 md:py-20 px-4 md:px-12 bg-[#0c0a08] relative z-10 w-full">
            {/* Ambient warm glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(230,201,152,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider mb-3 md:mb-4">
                        Aesthetic <span className="italic text-champagne lowercase">Gallery</span>
                    </h2>
                    <p className="font-sans text-champagne/60 max-w-xl text-sm md:text-base">
                        A visual exploration of the Midnight Luxe experience.
                    </p>
                </div>

                {/* Mobile: stacked grid | Desktop: bento layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[600px]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`bento-item relative overflow-hidden rounded-2xl md:rounded-[2rem] group cursor-pointer ${img.span} ${img.height}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-108 saturate-90 group-hover:saturate-110 brightness-90 group-hover:brightness-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-obsidian/60 opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
                            {/* Caption on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white text-xs font-sans tracking-widest uppercase">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGallery;
