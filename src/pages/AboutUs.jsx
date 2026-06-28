import React from 'react';

const About = () => {
    // Core Service Commitments - Upgraded to integrate both AC and Electrical Systems
    const pillars = [
        {
            icon: "❄️",
            title: "Advanced Cooling Engineering",
            desc: "We don't just clear dust; we employ high-pressure anti-bacterial deep jet washing, sub-ambient diagnostic checks, and digital gauge gas charging to protect your compressor."
        },
        {
            icon: "🛡️",
            title: "Industrial Safety Standards",
            desc: "For heavy summer loads like multi-split AC plants, geysers, or flat wiring, we use double-insulated, fire-retardant premium copper matrix materials to avoid hazardous short-circuits."
        },
        {
            icon: "👨‍🔧",
            title: "Background-Verified Experts",
            desc: "Our field team consists entirely of certified technicians who have undergone thorough legal background verification checks and continuous tech-infrastructure mapping."
        },
        {
            icon: "⚡",
            title: "45-Minute Doorstep Response",
            desc: "With localized mobile service hubs stationed strategically across Kankarbagh, Fraser Road, Patna City, and Patna Sahib, we dispatch immediately during emergency breakdowns."
        }
    ];

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-32 pb-16 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* 1. HEADER SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">
                            Our Operational Mission
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 text-slate-900 leading-tight">
                        Safeguarding Patna Households With <br />
                        <span className="text-[#CA8A04]">Expert AC & Electrical Engineering</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                        Safe Home is a high-reliability, full-stack home optimization platform dedicated to shielding your residential and commercial assets from intense summer breakdowns, severe short circuits, and unexpected power outages.
                    </p>
                </div>

                {/* 2. VISION & IMAGE SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    {/* Left text matrix */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-wide border-b border-slate-200 pb-4 text-slate-800">
                            Why Safe Home Was Founded
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            During peak summer seasons, heavy thermal appliances experience extreme wear. Incorrect refrigerant levels, clogged cooling coils, faulty distribution panels (DB boxes), and loose power loops frequently combine to generate system failure or serious fire risks.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            We integrated field-tested technical resources with advanced industrial testing meters. Our structure removes freelance reliability issues, ensuring that premium installation, preventative maintenance, and rapid emergency intervention are affordable for every household in Patna.
                        </p>

                        {/* Direct Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                                <p className="text-2xl sm:text-3xl font-black text-blue-600">5K+</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Appliances Fixed</p>
                            </div>
                            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                                <p className="text-2xl sm:text-3xl font-black text-[#CA8A04]">45 Min</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Response Guarantee</p>
                            </div>
                            <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                                <p className="text-2xl sm:text-3xl font-black text-emerald-600">100%</p>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Safety Compliant</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="lg:col-span-6 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-[#EAB308]/10 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity duration-300 pointer-events-none opacity-70"></div>
                        <div className="relative border border-slate-200/80 rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xl">
                            <img 
                                src="arman.png" 
                                alt="Professional HVAC and Electrical Diagnostics" 
                                className="w-full h-full object-cover brightness-95 hover:scale-102 transition-all duration-500"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200/60 p-4 rounded-xl backdrop-blur-sm shadow-md">
                                <p className="text-xs text-[#CA8A04] font-black tracking-widest uppercase">Precision Engineering At Your Doorstep</p>
                                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Armed with calibrated digital manifolds, laser thermal checkers, and certified safety gears.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CORE PILLARS MATRIX */}
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg shadow-slate-200/40">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.6] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center max-w-xl mx-auto mb-12">
                            <h3 className="text-2xl sm:text-3xl font-black tracking-wide text-slate-800">Our Operational Philosophy</h3>
                            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">The quality guidelines that make us Patna's most trusted choice for comfort and protection.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pillars.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl hover:border-blue-400/50 hover:shadow-md transition-all duration-300 group shadow-sm hover:bg-white">
                                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-base font-bold text-slate-800 mb-2 tracking-wide group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. CALL TO ACTION INNER BAR */}
                <div className="mt-20 text-center bg-white border border-slate-200 p-8 rounded-3xl max-w-4xl mx-auto relative overflow-hidden shadow-xl shadow-slate-200/60">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EAB308]/5 rounded-full blur-2xl"></div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 text-slate-800">Don't Wait For System Overheats Or Failures</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6 font-semibold">
                        Facing weak cooling airflow, tripping circuit switches, or high electrical loads? Schedule an executive service engineer instantly.
                    </p>
                    <a 
                        href="tel:+919155536625" 
                        className="inline-block bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-slate-900 font-black px-8 py-3.5 rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all uppercase tracking-wide"
                    >
                        📞 Request An Expert On-Site Now
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;