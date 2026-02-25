import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-obsidian border-t border-champagne/10 py-16 px-6 md:px-12 text-center md:text-left relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                <div className="flex flex-col items-center md:items-start">
                    <img src="/logo.png" alt="Senses Salon Logo" className="h-16 w-auto object-contain mb-4 opacity-80 hover:opacity-100 transition-opacity" />
                    <p className="text-champagne/60 text-sm max-w-xs font-light">
                        Suite 2808, Oaks Liwa Heights, Cluster W, JLT, Dubai
                    </p>
                </div>

                <div className="text-center md:text-center">
                    <ul className="space-y-3">
                        <li><a href="#features" className="text-champagneDark hover:text-champagne transition-colors">Experience</a></li>
                        <li><a href="#treatments" className="text-champagneDark hover:text-champagne transition-colors">Treatments</a></li>
                        <li><a href="#pricing" className="text-champagneDark hover:text-champagne transition-colors">Beauty Menu</a></li>
                    </ul>
                </div>

                <div className="text-center md:text-right">
                    <h4 className="font-serif italic text-2xl text-champagne mb-4">Contact & Hours</h4>
                    <p className="text-champagneDark text-sm space-y-2">
                        <span className="block">Mon-Thu & Sat-Sun: 10:30 AM - 9:00 PM</span>
                        <span className="block">Fri: 3:00 PM - 9:00 PM</span>
                        <span className="block mt-4 mb-2">hello@sensessalon.com</span>
                        <span className="block">+971 50 123 4567</span>
                        <a href="https://www.instagram.com/sensessalonjlt/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-champagne hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </p>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-champagne/5 text-center text-champagne/40 text-xs">
                <p>&copy; {new Date().getFullYear()} Senses Salon JLT. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
