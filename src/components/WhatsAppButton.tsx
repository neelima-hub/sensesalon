import React, { useState, useEffect, useRef } from "react";
const WHATSAPP_NUMBER = '00971567973569';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to book an appointment at Senses Salon JLT.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 group"
            style={{ filter: 'drop-shadow(0 4px 24px rgba(37,211,102,0.35))' }}
        >
            {/* Tooltip label — visible on hover (desktop) */}
            <span
                className={`hidden sm:flex items-center bg-[#1a1a1a] text-white text-xs font-sans tracking-wide px-4 py-2 rounded-full border border-white/10 whitespace-nowrap transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            >
                Chat with us
            </span>

            {/* WhatsApp icon button */}
            <div className="relative">
                {/* Outer pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                {/* Second subtle ring */}
                <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-10 animate-pulse" />

                {/* Main button */}
                <div
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center transition-all duration-300 ${hovered ? 'scale-110 shadow-[0_0_30px_rgba(37,211,102,0.6)]' : 'scale-100 shadow-[0_0_20px_rgba(37,211,102,0.3)]'}`}
                >
                    {/* WhatsApp SVG Icon */}
                    <svg
                        viewBox="0 0 32 32"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 sm:w-8 sm:h-8"
                    >
                        <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.338.633 4.622 1.833 6.622L2.667 29.333l6.9-1.8A13.27 13.27 0 0 0 16.003 29.333C23.364 29.333 29.333 23.362 29.333 16S23.364 2.667 16.003 2.667zm0 24.266a11.2 11.2 0 0 1-5.713-1.564l-.41-.244-4.094 1.068 1.09-3.978-.267-.41A11.2 11.2 0 0 1 4.8 16c0-6.178 5.025-11.2 11.2-11.2S27.2 9.822 27.2 16s-5.022 11.2-11.197 11.2v.267-.267zm6.146-8.4c-.337-.168-1.99-.98-2.3-1.094-.31-.112-.535-.168-.76.168-.226.337-.873 1.094-1.07 1.318-.197.224-.394.252-.731.084-.337-.168-1.421-.524-2.706-1.668-1-.896-1.674-2.002-1.871-2.34-.197-.337-.021-.52.148-.687.152-.152.337-.394.505-.591.168-.197.224-.337.337-.561.112-.225.056-.421-.028-.589-.084-.168-.76-1.832-1.042-2.508-.274-.66-.553-.57-.76-.58l-.645-.012a1.24 1.24 0 0 0-.898.421c-.309.337-1.177 1.15-1.177 2.803s1.205 3.25 1.373 3.474c.168.224 2.372 3.622 5.746 5.078.804.346 1.43.553 1.919.708.806.256 1.54.22 2.12.133.647-.097 1.99-.813 2.272-1.6.281-.787.281-1.46.197-1.6-.084-.14-.309-.224-.645-.392z" />
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
