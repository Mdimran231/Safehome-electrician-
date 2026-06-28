import React, { useState } from 'react';

const Contact = () => {
    // Local Contact Information Mapping
    const contactInfo = [
        {
            icon: "📞",
            title: "Emergency Voice Desk",
            detail: "+91 9155536625",
            subtext: "Live support desk open 24/7",
            action: "tel:+919155536625"
        },
        {
            icon: "📧",
            title: "Official Correspondence",
            detail: "mdanwararman862@gmail.com",
            subtext: "Expect a response within 2 hours",
            action: "mailto:mdanwararman862@gmail.com"
        },
        {
            icon: "📍",
            title: "Central Operations Hub",
            detail: "Shop No. 12, Sector b, Police Colony, Patna, Bihar 800002",
            subtext: "Dispatched locally across all sectors",
            action: "https://maps.google.com"
        }
    ];

    // Controlled Form State
    const [formData, setFormData] = useState({
        customerName: '',
        phoneNumber: '',
        selectedService: 'General Fault Fixing & Repair',
        userMessage: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Outbound Request Registered:", formData);
        setFormSubmitted(true);
    };

    return (
        <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen pt-28 pb-16 overflow-hidden relative">
            {/* Ambient Lighting Accents (Light & soft yellow gradients for a premium feel) */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#EAB308]/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                
                {/* 1. SECTION LOGO & TITLE HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
                        <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse"></span>
                        <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">
                            Connect Instantly
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                        Let's Resolve Your <span className="text-[#CA8A04]">Electrical Issues</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 font-medium">
                        Need an electrician dispatched immediately, or planning a structural renovation? Reach out below. Our teams are deployed across Patna's major sectors.
                    </p>
                </div>

                {/* 2. MAIN LAYOUT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: DIRECT CORRESPONDENCE PATHWAYS */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="border-l-4 border-[#EAB308] pl-4">
                            <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide">Direct Access Channels</h2>
                            <p className="text-xs text-slate-500 mt-1 font-medium">Skip the queue by using direct shortcuts.</p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item, idx) => (
                                <a 
                                    href={item.action} 
                                    key={idx}
                                    target={item.action.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="block bg-white border border-slate-200/80 hover:border-[#EAB308] p-5 rounded-2xl transition-all duration-300 group hover:translate-x-1 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl group-hover:bg-[#EAB308] group-hover:text-white transition-all duration-300 shadow-inner">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs uppercase font-black tracking-wider text-slate-400 mb-0.5">{item.title}</p>
                                            <p className="text-base font-bold text-slate-800 group-hover:text-[#CA8A04] transition-colors truncate">{item.detail}</p>
                                            <p className="text-xs text-slate-500 font-semibold mt-1">{item.subtext}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Emergency Advisory Panel */}
                        <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl">
                            <p className="text-xs font-black text-amber-800 tracking-widest uppercase flex items-center gap-1.5">
                                ⚠️ Critical Safety Advisory
                            </p>
                            <p className="text-xs text-amber-900/80 leading-relaxed font-semibold mt-2">
                                If you smell electrical smoke, hear continuous arcing pops inside a wall panel, or experience a main meter sparking event, please drop your main breaker circuit immediately and dial our helpline directly. Do not touch open connections.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: BOOKING INTAKE WIDGET FORM */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border border-slate-200/60 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-xl shadow-slate-200/50">
                            {/* Decorative Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.4] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-xl font-black text-slate-800 tracking-wide">Schedule a Field Technician</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">Fill in your requirements below. Our service operator will call you back shortly.</p>
                                </div>

                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-3">
                                        <div className="text-4xl text-green-600">✅</div>
                                        <h4 className="text-lg font-bold text-slate-800">Booking Request Dispatched</h4>
                                        <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                                            Your details have been successfully mapped to our central Patna logistics hub. An engineer will call you to confirm your slot within minutes.
                                        </p>
                                        <button 
                                            onClick={() => setFormSubmitted(false)}
                                            className="text-xs font-bold text-[#CA8A04] underline mt-4 hover:text-amber-600"
                                        >
                                            Submit another request
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-5">
                                        
                                        {/* Field 1: Name */}
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-black tracking-wider text-slate-600">Your Full Name</label>
                                            <input 
                                                type="text" 
                                                name="customerName"
                                                required
                                                value={formData.customerName}
                                                onChange={handleInputChange}
                                                placeholder="e.g. Arman Khan" 
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#EAB308] focus:bg-white text-slate-800 font-medium transition-colors placeholder:text-slate-400"
                                            />
                                        </div>

                                        {/* Field 2: Phone Grid */}
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-black tracking-wider text-slate-600">Contact Number (Active)</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-3.5 text-sm font-bold text-slate-400">+91</span>
                                                <input 
                                                    type="tel" 
                                                    name="phoneNumber"
                                                    required
                                                    pattern="[0-9]{10}"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    placeholder="9155536625" 
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-14 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#EAB308] focus:bg-white text-slate-800 font-medium transition-colors tracking-wide placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>

                                        {/* Field 3: Service Dropdown */}
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-black tracking-wider text-slate-600">Required Service Architecture</label>
                                            <div className="relative">
                                                <select 
                                                    name="selectedService"
                                                    value={formData.selectedService}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#EAB308] focus:bg-white font-semibold transition-colors text-slate-700 appearance-none cursor-pointer"
                                                >
                                                    <option>General Fault Fixing & Repair</option>
                                                    <option>Complete Home Internal Concealed Wiring</option>
                                                    <option>Inverter, Battery & UPS Setups</option>
                                                    <option>Appliance Maintenance & AC Installation</option>
                                                    <option>Industrial Panel boards & Safety Inspections</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                                    ▼
                                                </div>
                                            </div>
                                        </div>

                                        {/* Field 4: Custom Message Area */}
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-black tracking-wider text-slate-600">Describe the Issue (Optional)</label>
                                            <textarea 
                                                name="userMessage"
                                                rows="4"
                                                value={formData.userMessage}
                                                onChange={handleInputChange}
                                                placeholder="Please provide details like frequent MCB tripping, burning smells, or standard setup timelines..." 
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#EAB308] focus:bg-white text-slate-800 font-medium transition-colors placeholder:text-slate-400 resize-none leading-relaxed"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button 
                                            type="submit" 
                                            className="w-full bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white font-black py-4 rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all tracking-wide uppercase mt-4"
                                        >
                                            ⚡ Dispatched Booking Request
                                        </button>
                                        
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;