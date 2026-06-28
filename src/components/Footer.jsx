import React from 'react';

const Footer = () => {
    // Upgraded array representing both advanced AC/Cooling and Technical Electrical works
    const servicesList = [
        "AC Installation & Deep Jet Washing",
        "HVAC Gas Charging & Leak Testing",
        "Home Wiring & Internal Concealing",
        "Inverter, Battery & Geyser Setup",
        "Short Circuit & Fault Diagnostics",
        "Industrial Panel & DB Board Setup"
    ];

    return (
        <footer className="relative bg-[#070D1F] text-slate-400 border-t border-white/5 pt-16 pb-8 overflow-hidden w-full">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c2541_1px,transparent_1px),linear-gradient(to_bottom,#1c2541_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.15] pointer-events-none"></div>
            
            {/* Decorative Top Glowing Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EAB308]/60 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
                    
                    {/* Column 1: Brand & Unified Identity */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl animate-pulse">❄️</span>
                            <span className="text-xl font-black tracking-wider text-white">
                                SAFE HOME <span className="text-[#EAB308]">SERVICES</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">
                            Patna's premier certified AC engineering and electrical solutions provider. We safeguard your households with precision cooling diagnostics and fire-retardant safety frameworks.
                        </p>
                        <div className="flex items-center space-x-3 pt-2">
                            <div className="inline-flex items-center space-x-2 bg-[#1C2541] border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-slate-300">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
                                <span>Booking Open: 24/7 Response</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Service Links */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 border-l-2 border-[#EAB308] pl-2.5">
                            Our Core Expertise
                        </h4>
                        <ul className="space-y-2.5 text-sm font-semibold">
                            {servicesList.map((service, idx) => (
                                <li key={idx}>
                                    <a href="#services" className="hover:text-[#EAB308] transition-colors duration-200 flex items-center gap-1.5 group text-slate-400">
                                        <span className="text-[#EAB308] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0 text-xs">⚡</span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Local Hotspots */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 border-l-2 border-[#EAB308] pl-2.5">
                            Patna Service Hubs
                        </h4>
                        <ul className="space-y-2 text-sm font-semibold text-slate-400">
                            <li className="flex items-center gap-2">📍 <span className="hover:text-white transition-colors">Kankarbagh</span></li>
                            <li className="flex items-center gap-2">📍 <span className="hover:text-white transition-colors">Patna City</span></li>
                            <li className="flex items-center gap-2">📍 <span className="hover:text-white transition-colors">Fraser Road</span></li>
                            <li className="flex items-center gap-2">📍 <span className="hover:text-white transition-colors">Bailey Road</span></li>
                            <li className="flex items-center gap-2">📍 <span className="hover:text-white transition-colors">Rajendra Nagar</span></li>
                        </ul>
                    </div>

                    {/* Column 4: Emergency Contacts with Live Hyperlink */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 border-l-2 border-[#EAB308] pl-2.5">
                            Emergency Contact
                        </h4>
                        <div className="space-y-3">
                            <a href="tel:+919155536625" className="flex items-center gap-3 bg-[#1C2541]/50 border border-white/5 hover:border-[#EAB308]/30 p-3 rounded-xl transition-all group">
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center text-[#0B1329] font-bold text-base shadow-md">
                                    📞
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Direct Helpline</p>
                                    <p className="text-sm font-bold text-white group-hover:text-[#EAB308] transition-colors">+91 9155536625</p>
                                </div>
                            </a>
                            
                            <div className="flex items-center gap-3 bg-[#1C2541]/20 border border-white/5 p-3 rounded-xl">
                                <div className="w-9 h-9 rounded-lg bg-[#1C2541] border border-white/10 flex items-center justify-center text-base">
                                    📧
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Support Mail</p>
                                    <p className="text-xs font-bold text-slate-200">mdanwararman862@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright and Badges */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-slate-400">
                            © {new Date().getFullYear()} Safe Home Services. All Rights Reserved.
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                            Operated by technically certified, background-verified field engineers across Patna districts.
                        </p>
                    </div>
                    
                    {/* Security Trust Badges */}
                    <div className="flex items-center gap-3 opacity-70">
                        <div className="px-2.5 py-1 bg-white/5 rounded text-[10px] font-bold tracking-wider text-slate-300 uppercase border border-white/10">
                            🔒 ISO Certified
                        </div>
                        <div className="px-2.5 py-1 bg-white/5 rounded text-[10px] font-bold tracking-wider text-slate-300 uppercase border border-white/10">
                            ⚡ 100% Insured
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Safe Space */}
            <div className="h-12 md:hidden"></div>
        </footer>
    );
};

export default Footer;