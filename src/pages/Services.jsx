import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../Data/servicesData';

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-28 pb-16 relative">
            {/* Ambient Lighting Accent (Soft warm yellow glow) */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full mb-4 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-[#EAB308]"></span>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Expert Architecture</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-slate-900">
                        Our Premium <span className="text-[#CA8A04]">Electrical & AC Solutions</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 font-medium">
                        Click on any technical service node below to examine complete scope procedures, workflow steps, and delivery timelines.
                    </p>
                </div>

                {/* Cards Container Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div 
                            key={service.id}
                            onClick={() => navigate(`/services/${service.id}`)}
                            className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#EAB308] transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-md hover:shadow-xl shadow-slate-200/50"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                                <img 
                                    src={service.bgImage} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                bag/>
                                {/* Overlay to ensure image looks clean on light theme */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                
                                {/* Floating Icon Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 border border-slate-200/50 h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-md backdrop-blur-sm">
                                    {service.icon}
                                </div>

                                {/* Dynamic Condition: Shows Green Price Tag ONLY for AC Services */}
                                {service.category === 'ac' && service.priceEstimation && (
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[11px] font-black px-3 py-1.5 rounded-xl shadow-md tracking-wide uppercase border border-emerald-400/30">
                                        ✓ {service.priceEstimation.includes('Starts') ? 'Best Deal' : service.priceEstimation.split(' ')[0]}
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                                <div>
                                    <h3 className="text-lg font-black text-slate-800 group-hover:text-[#CA8A04] transition-colors leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium leading-relaxed">
                                        {service.shortDesc || service.fullDetails}
                                    </p>
                                </div>

                                {/* Bottom Action Strip (With integrated pricing layout for AC) */}
                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                                    {service.category === 'ac' && service.priceEstimation ? (
                                        <div className="flex flex-col">
                                            <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider leading-none mb-0.5">Rate Card Price</span>
                                            <span className="text-sm font-black text-slate-800 tracking-tight">
                                                {service.priceEstimation}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-[#CA8A04]">Review Technical Scope</span>
                                    )}
                                    <span className="text-[#CA8A04] group-hover:translate-x-1 transition-transform inline-block">Explore ➔</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;