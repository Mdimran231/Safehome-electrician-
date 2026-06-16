import React, { useState } from 'react';

const OurWork = () => {
    // Array of projects containing only tags and image URLs
    const projectsList = [
        {
            tag: "Residential Wiring",
            imgUrl: "work3.jpeg"
        },
        {
            tag: "Fault Diagnostics",
            imgUrl: "work2.jpeg"
        },
        {
            tag: "Inverter Setups",
            imgUrl:"work1.jpeg"
        },
        {
            tag: "Commercial Panels",
            imgUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80"
        },
        {
            tag: "Appliance Systems",
            imgUrl: "arman.png"
        }
    ];

    const [selectedFilter, setSelectedFilter] = useState('All');
    const [activeImage, setActiveImage] = useState(null); // Lightbox State

    const filters = ['All', ...new Set(projectsList.map(item => item.tag))];

    const filteredProjects = selectedFilter === 'All' 
        ? projectsList 
        : projectsList.filter(item => item.tag === selectedFilter);

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-28 pb-16 overflow-hidden relative">
            {/* Ambient Lighting Background Accents */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
                        <span className="h-2 w-2 rounded-full bg-[#EAB308]"></span>
                        <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">Our Live Gallery</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-slate-900">
                        Real Work, Real <span className="text-[#CA8A04]">Results</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                        Hum stock images use nahi karte. Har photo par click karke aap hamare on-site kaam ki scaling dekh sakte hain.
                    </p>
                </div>

                {/* FILTER TABS */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
                    {filters.map((filterName, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedFilter(filterName)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide border transition-all duration-200 ${
                                selectedFilter === filterName
                                    ? 'bg-[#EAB308] text-white border-[#EAB308] shadow-md shadow-amber-500/20'
                                    : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 shadow-sm'
                            }`}
                        >
                            {filterName}
                        </button>
                    ))}
                </div>

                {/* ONLY IMAGES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            onClick={() => setActiveImage(project.imgUrl)}
                            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-[#EAB308] transition-all duration-300 group shadow-md hover:shadow-xl shadow-slate-200/50 cursor-pointer aspect-[4/3] relative"
                        >
                            <img 
                                src={project.imgUrl} 
                                alt={project.tag} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                            />
                            
                            {/* Overlay tag and icon on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#EAB308] bg-slate-900/80 px-2.5 py-1 rounded-md w-fit backdrop-blur-sm mb-1">
                                    {project.tag}
                                </span>
                                <span className="text-white text-xs font-medium">Click to view full image</span>
                            </div>

                            {/* Default Static Micro Badge */}
                            <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest text-[#CA8A04] bg-white/95 border border-slate-200/60 px-2.5 py-1 rounded-md shadow-sm backdrop-blur-sm group-hover:hidden">
                                {project.tag}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* LIGHTBOX MODAL (Click karne par open hoga) */}
            {activeImage && (
                <div 
                    className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setActiveImage(null)} // Background click to close
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setActiveImage(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all text-xl font-bold"
                    >
                        ✕
                    </button>
                    
                    {/* Opened Image Container */}
                    <div 
                        className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()} // Preventing closure inside image area
                    >
                        <img 
                            src={activeImage} 
                            alt="Full Screen View" 
                            className="w-full h-full object-contain max-h-[85vh]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurWork;