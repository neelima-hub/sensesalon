import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-obsidian border-t border-champagne/10 py-12 md:py-16 px-5 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start text-center md:text-left">

                {/* Logo + Address */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/logo.png"
                        alt="Senses Salon Logo"
                        className="h-12 md:h-16 w-auto object-contain mb-4 opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <p className="text-champagne/60 text-sm max-w-xs font-light leading-relaxed">
                        Suite 2808, Oaks Liwa Heights,<br />Cluster W, JLT, Dubai
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                    <p className="text-champagne/40 text-xs uppercase tracking-widest mb-4">Quick Links</p>
                    <ul className="space-y-3">
                        <li><a href="#features" className="text-champagneDark hover:text-champagne transition-colors text-sm">Experience</a></li>
                        <li><a href="#treatments" className="text-champagneDark hover:text-champagne transition-colors text-sm">Treatments</a></li>
                        <li><a href="#pricing" className="text-champagneDark hover:text-champagne transition-colors text-sm">Beauty Menu</a></li>
                        <li><a href="#gallery" className="text-champagneDark hover:text-champagne transition-colors text-sm">Gallery</a></li>
                        <li><a href="#reviews" className="text-champagneDark hover:text-champagne transition-colors text-sm">Reviews</a></li>
                    </ul>
                </div>

                {/* Contact + Hours */}
                <div className="text-center md:text-right">
                    <h4 className="font-serif italic text-xl md:text-2xl text-champagne mb-4">Contact & Hours</h4>
                    <div className="text-champagneDark text-sm space-y-2 font-light">
                        <span className="block">Mon–Thu & Sat–Sun: 10:30 AM – 9:00 PM</span>
                        <span className="block">Fri: 3:00 PM – 9:00 PM</span>
                        <span className="block mt-4">hello@sensessalon.com</span>
                        <a
                            href="https://wa.me/00971567973569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[#25D366] hover:text-white transition-colors"
                        >
                            +971 56 797 3569
                        </a>
                    </div>
                    {/* Social icons */}
                    <div className="flex items-center justify-center md:justify-end gap-4 mt-5">
                        <a
                            href="https://www.instagram.com/sensessalonjlt/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-champagne hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        {/* WhatsApp icon */}
                        <a
                            href="https://wa.me/00971567973569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-white transition-colors"
                            aria-label="WhatsApp"
                        >
                            <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                                <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.338.633 4.622 1.833 6.622L2.667 29.333l6.9-1.8A13.27 13.27 0 0 0 16.003 29.333C23.364 29.333 29.333 23.362 29.333 16S23.364 2.667 16.003 2.667zm6.146 15.866c-.337-.168-1.99-.98-2.3-1.094-.31-.112-.535-.168-.76.168-.226.337-.873 1.094-1.07 1.318-.197.224-.394.252-.731.084-.337-.168-1.421-.524-2.706-1.668-1-.896-1.674-2.002-1.871-2.34-.197-.337-.021-.52.148-.687.152-.152.337-.394.505-.591.168-.197.224-.337.337-.561.112-.225.056-.421-.028-.589-.084-.168-.76-1.832-1.042-2.508-.274-.66-.553-.57-.76-.58l-.645-.012a1.24 1.24 0 0 0-.898.421c-.309.337-1.177 1.15-1.177 2.803s1.205 3.25 1.373 3.474c.168.224 2.372 3.622 5.746 5.078.804.346 1.43.553 1.919.708.806.256 1.54.22 2.12.133.647-.097 1.99-.813 2.272-1.6.281-.787.281-1.46.197-1.6-.084-.14-.309-.224-.645-.392z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 md:mt-16 pt-6 md:pt-8 border-t border-champagne/5 text-center text-champagne/40 text-xs">
                <p>&copy; {new Date().getFullYear()} Senses Salon JLT. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
