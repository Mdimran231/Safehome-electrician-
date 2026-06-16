import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../Data/servicesData';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Locating targeted service details entry point
    const activeService = servicesData.find(item => item.id === id);

    // Dynamic Failure Guard System (404 State)
    if (!activeService) {
        return (
            <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col items-center justify-center p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 to-transparent pointer-events-none"></div>
                <p className="text-5xl mb-3 animate-pulse">⚡</p>
                <h2 className="text-xl font-black text-slate-800">Technical Service Signature Not Detected</h2>
                <p className="text-xs text-slate-500 mt-1 max-w-xs text-center font-medium leading-relaxed">
                    The specified routing node does not point to a valid corporate architectural outline.
                </p>
                <button 
                    onClick={() => navigate('/services')} 
                    className="mt-6 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-xs font-bold hover:text-[#CA8A04] hover:border-amber-300 shadow-sm hover:shadow transition-all"
                >
                    Back to Core Grid
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-28 pb-16 relative">
            {/* Ambient Soft Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                
                {/* Back Control Navigation */}
                <button 
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-[#CA8A04] transition-colors mb-6 group"
                >
                    <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                    <span>Return to Grid Architecture</span>
                </button>

                {/* Main Identity Banner */}
                <div className="relative border border-slate-200 rounded-3xl overflow-hidden aspect-[21/9] bg-slate-100 mb-10 shadow-md">
                    <img 
                        src={activeService.bgImage} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover brightness-[0.85]"
                    />
                    {/* Soft Bottom Shadow Transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
                        <span className="text-2xl bg-white border border-slate-200 p-3 rounded-2xl hidden sm:inline-block shadow-md backdrop-blur-sm">
                            {activeService.icon}
                        </span>
                        <div>
                            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm">
                                {activeService.title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Structured Text Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Comprehensive Scope Writeups */}
                    <div className="md:col-span-8 space-y-6">
                        <div className="border-b border-slate-200 pb-3">
                            <h2 className="text-sm font-black uppercase tracking-wider text-slate-400">Detailed Structural Scope</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            {activeService.fullDetails}
                        </p>

                        {/* Iterated Working Steps Map */}
                        <div className="space-y-4 pt-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#CA8A04]">Standard Execution Guidelines:</h3>
                            <div className="space-y-3">
                                {activeService.includedSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm">
                                        <span className="text-xs font-black text-[#CA8A04] h-7 w-7 rounded-lg bg-amber-50/60 border border-amber-100 flex items-center justify-center shrink-0">
                                            {idx + 1}
                                        </span>
                                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pt-0.5">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Meta Metadata Metrics Callout */}
                    <div className="md:col-span-4 space-y-4 sticky top-28">
                        <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-4">
                            <div>
                                <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Service Deployment Period</p>
                                <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 flex items-center gap-1.5">
                                    <span>⏱️</span> {activeService.timeFrame}
                                </p>
                            </div>
                            <div className="border-t border-slate-100 pt-3">
                                <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Commercial Estimation Basis</p>
                                <p className="text-xs sm:text-sm font-black text-[#CA8A04] mt-1 flex items-center gap-1.5">
                                    <span>🏷️</span> {activeService.priceEstimation}
                                </p>
                            </div>
                        </div>

                        {/* Direct Line Triggers */}
                        <a 
                            href="tel:+919155536625"
                            className="block text-center bg-[#EAB308] hover:bg-[#CA8A04] text-white font-black py-4 rounded-xl text-xs sm:text-sm tracking-wide uppercase shadow-md shadow-amber-500/10 hover:shadow-lg transition-all transform active:scale-[0.99]"
                        >
                            📞 Call Operator Desk
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;