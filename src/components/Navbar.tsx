import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 z-10">
                        <img src="/assets/logo.png" alt="Senses Salon Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase text-champagne/80">
                        <a href="#services" className="hover:text-champagne transition-colors duration-300">Services</a>
                        <a href="#features" className="hover:text-champagne transition-colors duration-300">Experience</a>
                        <a href="#pricing" className="hover:text-champagne transition-colors duration-300">Membership</a>
                    </div>

                    {/* Desktop CTA */}
                    <button
                        ref={btnRef}
                        onClick={() => {
                            window.dispatchEvent(new CustomEvent('openBookingModal'));
                        }}
                        className="hidden md:block relative overflow-hidden group px-8 py-3 rounded-full border border-champagne bg-champagne text-obsidian font-sans uppercase tracking-widest text-xs font-bold transition-all shadow-[0_0_20px_rgba(230,201,152,0.4)] hover:shadow-[0_0_30px_rgba(230,201,152,0.6)] hover:bg-white hover:border-white"
                    >
                        <span className="relative z-10">Book Now</span>
                    </button>

                    {/* Mobile: Book Now + Hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                            className="px-5 py-2 rounded-full border border-champagne bg-champagne text-obsidian font-sans uppercase tracking-widest text-[10px] font-bold transition-all"
                        >
                            Book
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-champagne p-1"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed top-[80px] left-0 right-0 z-40 bg-obsidian/95 backdrop-blur-xl border-b border-champagne/10 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col items-center py-6 gap-6 font-sans text-sm tracking-widest uppercase text-champagne/80">
                    <a href="#features" onClick={closeMenu} className="hover:text-champagne transition-colors duration-300">Experience</a>
                    <a href="#treatments" onClick={closeMenu} className="hover:text-champagne transition-colors duration-300">Treatments</a>
                    <a href="#pricing" onClick={closeMenu} className="hover:text-champagne transition-colors duration-300">Membership</a>
                    <a href="#reviews" onClick={closeMenu} className="hover:text-champagne transition-colors duration-300">Reviews</a>
                    <a href="#booking" onClick={closeMenu} className="hover:text-champagne transition-colors duration-300">Booking</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
