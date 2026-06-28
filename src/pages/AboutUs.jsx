import React from 'react';

const About = () => {
    const pillars = [
        {
            icon: "❄️",
            title: "Advanced Deep Jet Cooling",
            desc: "We don't just clear surface dust. Our team uses high-pressure anti-bacterial deep jet washing, sub-ambient diagnostic checks, and digital gauge gas charging to boost compressor lifespan."
        },
        {
            icon: "🛡️",
            title: "Industrial Safety Standards",
            desc: "For heavy summer loads like multi-split AC plants, commercial geysers, or flat rewiring, we deploy double-insulated, fire-retardant premium copper matrices to mitigate short-circuit hazards."
        },
        {
            icon: "👨‍🔧",
            title: "Background-Verified Experts",
            desc: "Our field network consists entirely of verified technicians who have undergone rigorous technical mapping and background checks. No random third-party freelancers."
        },
        {
            icon: "⚡",
            title: "45-Minute Supercharged Response",
            desc: "With localized mobile service hubs moving strategically across Kankarbagh, Fraser Road, Patna City, and Bailey Road, we dispatch immediately during emergency system failures."
        }
    ];

    const steps = [
        { num: "01", title: "Instant Booking", detail: "Call or book online. Our automated routing systems assign the nearest specialist immediately." },
        { num: "02", title: "Smart Diagnostics", detail: "Technicians arrive with laser thermal meters and calibrated digital multi-meters to locate the exact leak or fault." },
        { num: "03", title: "Precision Repair", detail: "Transparent pricing upfront before we replace or service any component. No hidden surprises." },
        { num: "04", title: "Post-Job Warranty", detail: "Get formal digital bills along with our standard post-service real-time warranty assurance." }
    ];

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-32 pb-16 overflow-hidden relative">
            {/* High-Tech Glow Effects */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* 1. HERO HEADER SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-6">
                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-xs font-black tracking-wider text-slate-600 uppercase">
                            Premium Doorstep Solutions
                        </span>
                    </div>
                    {/* Exact requested heading with a striking design */}
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-slate-900 leading-tight">
                        Patna's No.1 Trusted <br />
                        <span className="bg-gradient-to-r from-blue-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                            AC Servicing & Electrical Experts.
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
                        Safe Home Services brings you quick, premium, and affordable doorstep solutions for complete AC jet servicing, gas refilling, repairs, and home electrical diagnostics.
                    </p>

                    {/* Dynamic Highlighting Tags to Hook Customers */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-xl mx-auto">
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-blue-100">❄️ Jet AC Service Experts</span>
                        <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-amber-100">⚡ Certified Electricians</span>
                        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-emerald-100">🛡️ Fixed Rates & No Hidden Charges</span>
                    </div>
                </div>

                {/* 2. VISION & BRAND MATRIX */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
                    {/* Left Details Panel */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-3xl font-black tracking-tight text-slate-800">
                            Why Hundreds of Patna Families Rely On Us Daily
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            During peak sub-tropical summers, domestic appliances run under intense structural stress. Low gas pressure, structural clogs, uneven power phases, and faulty switchboards combine to destroy expensive setups or introduce safety loops.
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            Safe Home Services was structured precisely to counter unverified freelancer issues. We operate specialized diagnostic systems, use original certified spare matrices, and back every deployment with immediate emergency support options.
                        </p>

                        {/* Counter Metrics Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <p className="text-3xl font-black text-blue-600">5,000+</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mt-1">Jobs Executed</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <p className="text-3xl font-black text-amber-500">45 Min</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mt-1">Arrival Promise</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                <p className="text-3xl font-black text-emerald-600">Zero</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mt-1">Hidden Costs</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Container Asset */}
                    <div className="lg:col-span-6 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="relative border-4 border-white rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-2xl shadow-slate-300">
                            <img 
                                src="arman.png" 
                                alt="Professional Safe Home Experts" 
                                className="w-full h-full object-cover brightness-95 scale-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl">
                                <p className="text-xs text-amber-400 font-black tracking-widest uppercase flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                    Advanced System Inspections
                                </p>
                                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1">Equipped with premium tools, testing instruments, and authentic corporate safety kits.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CORE SERVICE VALUE PILLARS */}
                <div className="mb-28">
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <h3 className="text-3xl font-black tracking-tight text-slate-800">Built Different From The Ground Up</h3>
                        <p className="text-sm text-slate-400 mt-2 font-medium">The parameters that set us miles apart from local unorganized technicians.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/70 p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-300"></div>
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {item.icon}
                                </div>
                                <h4 className="text-base font-black text-slate-800 mb-2 tracking-wide group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. TRANSPARENT STRATEGY STEPS */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl mb-24">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.4] pointer-events-none"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="max-w-xl mb-14">
                            <span className="text-xs text-amber-400 font-bold tracking-widest uppercase">Our Operational Blueprints</span>
                            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">4 Easy Steps to Reset Comfort</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="border-t border-slate-800 pt-6 relative group">
                                    <div className="absolute -top-3 left-0 text-xs font-black tracking-widest text-amber-400 bg-slate-900 pr-3 transition-colors group-hover:text-white">
                                        {step.num}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-amber-400 transition-colors">{step.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">{step.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. HIGH CONVERTING CALL TO ACTION SECTION */}
                <div className="text-center bg-white border-2 border-slate-200 p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden shadow-xl shadow-slate-200/50 group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform"></div>
                    
                    <h3 className="text-2xl sm:text-4xl font-black mb-3 text-slate-800 tracking-tight">Stop Dealing With Constant Breakdowns</h3>
                    <p className="text-xs sm:text-base text-slate-500 max-w-xl mx-auto mb-8 font-semibold leading-relaxed">
                        Experiencing dripping split AC coils, poor indoor airflow circulation, or heavy electrical switch overloads? Hire our certified technicians right away.
                    </p>
                    <a 
                        href="tel:+919155536625" 
                        className="inline-block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-900 font-black px-10 py-4 rounded-xl text-sm shadow-xl shadow-amber-500/30 hover:brightness-105 transition-all uppercase tracking-wider hover:scale-[1.01]"
                    >
                        📞 Book Your Service Visit Instantly
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;