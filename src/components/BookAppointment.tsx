import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X } from 'lucide-react';

const BookAppointment = () => {
    const containerRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        // Magnetic hover effect (simplified for react without removing event listeners manually)
        const btn = btnRef.current;
        if (btn) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.1,
                    y: y * 0.1,
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
    }, { scope: containerRef });

    useEffect(() => {
        const handleOpenBookingModal = () => setIsOpen(true);
        window.addEventListener('openBookingModal', handleOpenBookingModal);
        return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.to(modalRef.current, {
                autoAlpha: 1,
                duration: 0.4,
                ease: 'power3.out'
            });
            gsap.fromTo(iframeRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power4.out' }
            );
            document.body.style.overflow = 'hidden';
        } else {
            gsap.to(modalRef.current, {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power3.in'
            });
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <section id="booking" ref={containerRef} className="py-32 bg-charcoal relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
                <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
                    Select Your <span className="italic text-champagne block mt-2">Experience.</span>
                </h2>

                <p className="font-sans text-champagne/60 max-w-xl mx-auto">
                    Reserve your time in our sanctuary above Dubai. Spaces are highly coveted.
                </p>

                <div className="pt-8">
                    <button
                        ref={btnRef}
                        onClick={() => setIsOpen(true)}
                        className="group relative inline-flex items-center justify-center px-12 py-6 bg-champagne text-obsidian rounded-full font-sans uppercase tracking-[0.2em] font-semibold text-sm transition-all shadow-[0_0_40px_rgba(230,201,152,0.1)] hover:shadow-[0_0_60px_rgba(230,201,152,0.2)]"
                    >
                        Secure Your Appointment
                    </button>
                </div>
            </div>

            {/* Cinematic Modal */}
            <div
                ref={modalRef}
                className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 opacity-0 hidden"
                style={{ display: isOpen ? 'flex' : 'none' }}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[101]"
                >
                    <X size={32} />
                </button>

                <div
                    ref={iframeRef}
                    className="w-full max-w-5xl h-[80vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl relative"
                >
                    {/* Google Calendar Appointment Link */}
                    <iframe
                        src="https://calendar.app.google/n8Vj31kM3taievuTA"
                        className="w-full h-full border-none z-10 relative bg-white"
                        title="Senses Salon Booking"
                    />
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;
