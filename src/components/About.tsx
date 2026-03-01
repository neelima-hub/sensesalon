
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const image = imageRef.current;

        if (section && content && image) {
            gsap.fromTo(content.children,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(image,
                { filter: 'grayscale(100%)', scale: 0.95, opacity: 0 },
                {
                    filter: 'grayscale(0%)', scale: 1, opacity: 1, duration: 1.5, ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 60%",
                    }
                }
            );
        }
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 bg-obsidian relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div ref={contentRef} className="order-2 lg:order-1 relative z-10">
                    <span className="text-champagne tracking-[0.2em] text-sm uppercase mb-4 block">Our Philosophy</span>
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-champagne mb-8 leading-tight">
                        Elevating Beauty to an Art Form.
                    </h2>
                    <p className="text-champagneLight font-light mb-6 text-lg tracking-wide leading-relaxed">
                        At Senses Salon JLT, we believe that true beauty emerges when you are completely at peace. Our sanctuary is designed to transport you from the bustling streets of Dubai into a realm of Midnight Luxe.
                    </p>
                    <p className="text-champagneDark font-light mb-10 text-lg tracking-wide leading-relaxed">
                        Expert stylists and therapists curate personalized experiences using only the finest products, ensuring every visit leaves you feeling rejuvenated, confident, and exquisitely pampered.
                    </p>

                    <div className="flex items-center gap-8">
                        <div>
                            <span className="block text-4xl font-serif text-champagne mb-2">15+</span>
                            <span className="text-champagneDark text-sm tracking-widest uppercase">Years Experience</span>
                        </div>
                        <div className="w-px h-16 bg-champagne/20"></div>
                        <div>
                            <span className="block text-4xl font-serif text-champagne mb-2">5k+</span>
                            <span className="text-champagneDark text-sm tracking-widest uppercase">Happy Clients</span>
                        </div>
                    </div>
                </div>

                <div
                    ref={imageRef}
                    className="order-1 lg:order-2 h-[500px] lg:h-[700px] w-full relative group overflow-hidden bg-obsidian border border-champagne/10 p-4"
                >
                    <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                    <img
                        src="https://images.unsplash.com/photo-1562322140-8baeececf3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Salon Interior"
                        className="w-full h-full object-contain rounded-sm origin-center scale-[0.98] group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-6 -left-6 lg:left-6 bg-charcoal border border-champagne/20 p-6 z-20 backdrop-blur-md hidden md:block w-72">
                        <p className="text-champagne font-serif italic text-xl">"A truly transformative experience in the heart of JLT."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
