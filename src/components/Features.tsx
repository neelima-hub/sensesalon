import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const diagnosticItems = ["Hair Wash", "Cut/Trim", "Blow-dry", "Styling"];

const Features = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [shuffleIndex, setShuffleIndex] = useState(0);
    const [telemetryText, setTelemetryText] = useState("");

    const fullTelemetry = "Live Feed: Brazilian Phloreten Application in Progress... Frizz-free results.";

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffleIndex((prev) => (prev + 1) % diagnosticItems.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.telemetry-card',
            start: 'top 80%',
            onEnter: () => {
                let i = 0;
                const typeWriter = setInterval(() => {
                    if (i <= fullTelemetry.length) {
                        setTelemetryText(fullTelemetry.slice(0, i));
                        i++;
                    } else {
                        clearInterval(typeWriter);
                    }
                }, 50);
            },
            once: true
        });

        gsap.fromTo('.feature-card',
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.2,
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
        <section id="features" ref={containerRef} className="py-16 md:py-24 bg-obsidian px-4 md:px-6 relative">
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(230,201,152,0.04)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-10 md:space-y-16 relative z-10">
                <div className="text-center space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider">
                        Signature <span className="italic text-champagne lowercase">Experience</span>
                    </h2>
                    <p className="font-sans text-champagne/60 max-w-2xl mx-auto text-sm md:text-base">
                        A convergence of advanced technique and curated aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="feature-card bg-gradient-to-br from-[#1e1a12] to-[#141210] border border-champagne/15 rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-between group hover:border-champagne/40 transition-all duration-500 shadow-[inset_0_1px_0_rgba(230,201,152,0.06)]">
                        <h3 className="font-sans uppercase tracking-widest text-xs text-champagne/60">Diagnostic Focus</h3>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative h-10 md:h-12 w-full overflow-hidden flex items-center justify-center">
                                {diagnosticItems.map((item, i) => (
                                    <div
                                        key={item}
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 font-sans text-xl md:text-3xl text-white ${i === shuffleIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Bottom accent line */}
                        <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="feature-card telemetry-card bg-gradient-to-br from-[#141a1e] to-[#0e1215] border border-champagne/15 rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-between group hover:border-champagne/40 transition-all duration-500 shadow-[inset_0_1px_0_rgba(230,201,152,0.06)]">
                        <h3 className="font-sans uppercase tracking-widest text-xs text-champagne/60">Active Protocol</h3>
                        <div className="flex-1 flex items-center">
                            <p className="font-sans text-champagne text-sm md:text-lg leading-relaxed font-mono">
                                {telemetryText}<span className="animate-pulse text-champagne">_</span>
                            </p>
                        </div>
                        <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
                    </div>

                    {/* Card 3: Availability Calendar */}
                    <div className="feature-card bg-gradient-to-br from-[#131814] to-[#0e120f] border border-champagne/15 rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-between group hover:border-champagne/40 transition-all duration-500 shadow-[inset_0_1px_0_rgba(230,201,152,0.06)] sm:col-span-2 md:col-span-1">
                        <h3 className="font-sans uppercase tracking-widest text-xs text-champagne/60">Salon-at-Home Availability</h3>
                        <div className="flex-1 flex flex-col justify-center gap-2 mt-4">
                            <div className="grid grid-cols-7 gap-1">
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                    <div key={i} className="text-center font-sans text-[10px] text-white/50">{d}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-5 md:h-6 rounded-sm transition-all duration-300 ${[2, 5, 8, 9, 11].includes(i)
                                            ? 'bg-champagne/30 cursor-pointer hover:bg-champagne/80 hover:scale-110'
                                            : 'bg-white/8'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
