

const images = [
    // TODO: Replace with actual Senses Salon photos
    {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop",
        alt: "Luxury Salon Interior",
        span: "md:col-span-2 md:row-span-2"
    },
    // TODO: Replace with actual Senses Salon photos
    {
        src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2672&auto=format&fit=crop",
        alt: "Hair Blowout Styling",
        span: "md:col-span-1 md:row-span-1"
    },
    // TODO: Replace with actual Senses Salon photos
    {
        src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2669&auto=format&fit=crop",
        alt: "Dubai Skyline Night",
        span: "md:col-span-1 md:row-span-2"
    },
    // TODO: Replace with actual Senses Salon photos
    {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop",
        alt: "Manicure Detail",
        span: "md:col-span-1 md:row-span-1"
    }
];

const BentoGallery = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-obsidian relative z-10 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider mb-4">
                        Aesthetic <span className="italic text-champagne lowercase">Gallery</span>
                    </h2>
                    <p className="font-sans text-champagne/60 max-w-xl">
                        A visual exploration of the Midnight Luxe experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {images.map((img, index) => (
                        <div key={index} className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${img.span} min-h-[250px] md:min-h-0`}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-obsidian/60 opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGallery;
