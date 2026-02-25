import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        // Morphing background on scroll
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'bg-obsidian/80', targets: navRef.current },
            onToggle: (self) => {
                if (self.isActive) {
                    gsap.to(navRef.current, { backdropFilter: 'blur(12px)', duration: 0.3, ease: 'power3.out' });
                } else {
                    gsap.to(navRef.current, { backdropFilter: 'blur(0px)', duration: 0.3, ease: 'power3.out' });
                }
            }
        });

        // Magnetic hover effect for CTA
        const btn = btnRef.current;
        if (btn) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.2,
                    y: y * 0.2,
                    scale: 1.03,
                    duration: 0.3,
                    ease: 'power3.out'
                });
            };

            const handleMouseLeave = () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.3)'
                });
            };

            btn.addEventListener('mousemove', handleMouseMove);
            btn.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                btn.removeEventListener('mousemove', handleMouseMove);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, { scope: navRef });

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 z-10">
                    <img src="/assets/logo.png" alt="Senses Salon Logo" className="h-12 w-auto object-contain mix-blend-screen" />
                </a>

                <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase text-champagne/80">
                    <a href="#services" className="hover:text-champagne transition-colors duration-300">Services</a>
                    <a href="#features" className="hover:text-champagne transition-colors duration-300">Experience</a>
                    <a href="#pricing" className="hover:text-champagne transition-colors duration-300">Membership</a>
                </div>

                <button
                    ref={btnRef}
                    onClick={() => {
                        window.dispatchEvent(new CustomEvent('openBookingModal'));
                    }}
                    className="relative overflow-hidden group px-8 py-3 rounded-full border border-champagne bg-champagne text-obsidian font-sans uppercase tracking-widest text-xs font-bold transition-all shadow-[0_0_20px_rgba(230,201,152,0.4)] hover:shadow-[0_0_30px_rgba(230,201,152,0.6)] hover:bg-white hover:border-white"
                >
                    <span className="relative z-10">Book Now</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
