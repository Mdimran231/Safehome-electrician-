import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../Data/servicesData';

const Home = () => {
    // Main Lead form state handling - Fallback changed to AC Service for Summer Season
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: servicesData.find(s => s.category === 'ac')?.title || 'Professional AC Repair & Servicing',
        area: ''
    });

    // Hero quick form independent state handling
    const [heroData, setHeroData] = useState({
        name: '',
        phone: '',
        service: servicesData.find(s => s.category === 'ac')?.title || 'Professional AC Repair & Servicing'
    });

    const [activeIndex, setActiveIndex] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Google-friendly FAQ Data with Schema structured content
    const faqData = [
        {
            question: "What is your response time for emergency AC repair and electrician services in Patna?",
            answer: "For emergency calls like AC breakdowns, short circuits, or frequent tripping in Patna City, Kankarbagh, Patna Sahib, and Fraser Road, we prioritize a rapid 45 to 60-minute doorstep arrival time after booking confirmation."
        },
        {
            question: "Do you provide deep jet cleaning and gas charging for Split/Window ACs?",
            answer: "Yes, we specialize in complete AC maintenance, including high-pressure anti-bacterial deep jet cleaning, accurate refrigerant gas charging (R32/R410), leak detection, and master installation services."
        },
        {
            question: "Is there a diagnostic or inspection fee for fault-finding?",
            answer: "If you proceed with the repair work order with us after diagnostics, we provide a Zero Inspection Fee. If you require only inspection and choose not to proceed with the work order, a minimum standard visit charge applies."
        },
        {
            question: "What materials do you use for complete flat wiring or AC power lines in Patna?",
            answer: "We prioritize safety above all. For heavy loads like AC wiring or complete home flat wiring, we use only ISO-certified, heat-resistant, and fire-retardant (FR) premium copper wires, heavy-duty concealed conduits, and branded safety MCBs."
        },
        {
            question: "Do you offer automated inverter and battery setup solutions?",
            answer: "Yes, we specialize in power backup automation, integrating automatic changeover switch assemblies that provide uninterrupted power within microseconds of a blackout."
        },
        {
            question: "Are your technicians background-verified and certified?",
            answer: "Absolutely. 'Your Safety, Our Responsibility' is our core principle. All our cooling experts and electrical experts are background-verified, technically trained, and field-licensed to ensure maximum security."
        }
    ];

    // Main Lead Form Submit Handler
    const handleBookingSubmit = (e) => {
        e.preventDefault();

        const message = `❄️ *NEW SERVICE BOOKING RECEIVED* ❄️%0A%0A` +
            `👤 *Customer Name:* ${formData.name}%0A` +
            `📞 *Phone Number:* ${formData.phone}%0A` +
            `🛠️ *Service Required:* ${formData.service}%0A` +
            `📍 *Location in Patna:* ${formData.area}%0A%0A` +
            `⚡ _Please respond promptly to finalize this local booking!_`;

        const whatsappUrl = `https://wa.me/919155536625?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setFormSubmitted(true);

        setFormData({
            name: '',
            phone: '',
            service: servicesData.find(s => s.category === 'ac')?.title || 'Professional AC Repair & Servicing',
            area: ''
        });
    };

    // Hero Dropdown Quick Callback Handler
    const handleHeroFormSubmit = (e) => {
        e.preventDefault();

        const message = `❄️ *NEW HERO DROP-DOWN BOOKING* ❄️%0A%0A` +
            `👤 *Customer Name:* ${heroData.name || 'Valued Customer'}%0A` +
            `📞 *Phone Number:* ${heroData.phone || 'Not Provided'}%0A` +
            `🛠️ *Service Required:* ${heroData.service}%0A` +
            `📍 *Location:* Patna Area (Rapid Callback)%0A%0A` +
            `⚡ _Finalize this rapid booking immediately!_`;

        const whatsappUrl = `https://wa.me/919155536625?text=${message}`;
        window.open(whatsappUrl, '_blank');

        setHeroData({
            name: '',
            phone: '',
            service: servicesData.find(s => s.category === 'ac')?.title || 'Professional AC Repair & Servicing'
        });
    };

    // FAQ JSON-LD Schema Script (SEO Engine)
    const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            {/* SEO METADATA */}
            <Helmet>
                <title>24/7 Expert AC Repair & Electrician in Patna | Split & Window AC Service | Safe Home</title>
                <meta name="description" content="Safe Home Electricals offers background-verified, 24/7 certified AC repair, installation, and deep jet cleaning services in Patna. Experts in cooling solutions and new concealed home wiring. Quick 45-min arrival." />
                <meta name="keywords" content="Best AC repair in Patna, Split AC installation near Kankarbagh, Window AC service Patna City, Emergency electrician Patna Sahib, Fraser Road AC gas filling, new house wiring Patna" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchemaData)}
                </script>
            </Helmet>

            <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center overflow-hidden pt-32 pb-16 px-4"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')`
                }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content Side */}
                        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-[#1E293B]/80 border border-white/20 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                                    ❄️ Peak Summer Special: Instant AC & Electrical Care
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                                SAFE HOME <br />
                                <span className="text-[#EAB308]">
                                    AC & ELECTRICAL SERVICES
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl font-bold text-yellow-400 italic tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                                "Your Comfort & Safety, Our Responsibility"
                            </p>

                            <p className="text-sm sm:text-base text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                Beat the intense Patna heat. Get rapid, expert Split/Window AC servicing, gas charging, jet cleaning, and high-load electrical diagnostics at your doorstep today.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                                <a
                                    href="tel:+919155536625"
                                    className="w-full sm:w-auto text-center bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-slate-900 font-black px-8 py-4 rounded-xl text-base shadow-[0_4px_25px_rgba(234,179,8,0.4)] hover:brightness-110 transition-all duration-200 transform hover:-translate-y-0.5 block tracking-wide"
                                >
                                    📞 CALL NOW: +91 9155536625
                                </a>
                            </div>

                            {/* Updated Grid with 4 items to include Visiting Charge */}
                            <div className="pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">₹299</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Visiting Charge</p>
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">45 Min</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Patna Response</p>
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">Verified</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Certified Staff</p>
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">5.0 ⭐</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Google Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Quick Form Side */}
                        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
                            <div className="bg-white/95 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_25px_50px_rgba(0,0,0,0.25)] relative overflow-hidden backdrop-blur-md">
                                <div className="mb-6">
                                    <h3 className="text-xl font-black text-[#1E293B] tracking-wide">
                                        Book AC / Electrical Service
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">
                                        Background-verified local professionals. Safe, clean & insured.
                                    </p>
                                </div>

                                <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={heroData.name}
                                            onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Contact Number</label>
                                        <input
                                            type="tel"
                                            required
                                            pattern="[0-9]{10}"
                                            value={heroData.phone}
                                            onChange={(e) => setHeroData({ ...heroData, phone: e.target.value })}
                                            placeholder="Enter mobile number"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Required Service</label>
                                        <div className="relative">
                                            <select
                                                value={heroData.service}
                                                onChange={(e) => setHeroData({ ...heroData, service: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all appearance-none cursor-pointer"
                                            >
                                                {[...servicesData].sort((a, b) => (b.category === 'ac') - (a.category === 'ac')).map((s, idx) => (
                                                    <option key={idx} value={s.title} className="bg-white text-[#1E293B]">{s.title}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                ▼
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inline Visiting Charge Notice inside Form */}
                                    <div className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-800 font-bold">
                                        <span>Standard Visiting Charge:</span>
                                        <span className="text-base font-black text-amber-900">₹299</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#1E293B] text-white font-bold py-4 rounded-xl text-sm tracking-wider uppercase shadow-md hover:bg-[#334155] transition-all duration-200 mt-2"
                                    >
                                        ❄️ Secure Instant Callback
                                    </button>
                                </form>

                                <p className="text-[10px] text-center text-slate-400 mt-4 font-bold tracking-wide">
                                    🛡️ Zero Inspection Fee with Work Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT INTRO SECTION */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center space-x-2 bg-[#1E293B]/5 border border-[#1E293B]/10 px-4 py-1.5 rounded-full mx-auto lg:mx-0 shadow-inner">
                                <span className="text-xs font-black tracking-widest text-[#1E293B] uppercase flex items-center gap-1">
                                    ❄️ Peak Summer Experts in Patna
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                                Trusted AC Servicing & <span className="text-[#EAB308]">Electrical Experts in Patna</span>
                            </h2>

                            <div className="w-20 h-1.5 bg-[#EAB308] rounded-full mx-auto lg:mx-0 shadow-sm"></div>

                            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                                <p>
                                    Managing heavy cooling appliances and residential electrical grids during peak summer requires absolute precision. A minor diagnostic error can lead to quick AC compressor failure, high electricity bills, or power tripping.
                                </p>
                                <p className="border-l-4 border-blue-500 pl-4 italic bg-gray-100 py-2.5 rounded-r-2xl text-sm md:text-base text-[#1E293B] font-semibold shadow-sm">
                                    "Your Comfort and Electrical Safety is Our Core Objective. We never compromise on service standards."
                                </p>
                                <p className="text-sm md:text-base text-gray-700">
                                    We deliver technical reliability with advanced diagnostic instruments to families in **Patna City**, **Kankarbagh**, **Patna Sahib**, and **Fraser Road**. Every installation, gas refill, or wiring check is executed under strict quality safety guidelines.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 lg:pt-0">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">❄️</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">Fast AC Cooling</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Advanced jet washing and precise gas charging for maximum airflow.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-slate-200 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">🔬</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">High-Tech Tools</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Accurate fault-finding using digital pressure gauges and multi-meters.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-yellow-100 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">💰</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">100% Transparent</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Upfront rate estimation without hidden charges. Zero Inspection Fee option.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-slate-200 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">📍</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">Localized Team</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Express 45-min arrival with localized tracking, from Kankarbagh to Patna Sahib.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES GRID SECTION */}
            <section className="py-20 px-4 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#EAB308]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-16 relative z-10">

                    {/* AC SERVICES */}
                    <div className="space-y-12">
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Top Summer Demand</span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                                Premium <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Air Conditioner Services</span>
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                                Keep your home cool with our top-rated split and window AC repair, gas charging, and deep jet cleaning.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesData
                                .filter(service => service.category === 'ac')
                                .slice(0, 3)
                                .map((service) => (
                                    <Link
                                        key={service.id}
                                        to={`/services/${service.id}`}
                                        className="bg-white rounded-3xl border border-slate-100 hover:border-blue-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-300 block relative group overflow-hidden shadow-md"
                                    >
                                        {/* Top Media / Thumbnail Section */}
                                        <div className="h-52 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                                            <img
                                                src={service.bgImage}
                                                alt={service.title}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

                                            <div className="absolute top-4 left-4 bg-white/90 border border-white h-11 w-11 rounded-xl flex items-center justify-center text-xl shadow-md backdrop-blur-sm">
                                                {service.icon}
                                            </div>

                                            {/* Floating Top Right Price Token */}
                                            {service.priceEstimation  && (
                                                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1.5 rounded-xl shadow-md tracking-wider uppercase">
                                                    {service.priceEstimation.split(' ')[0]}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Info & CTA Frame */}
                                        <div className="p-6 sm:p-8 flex flex-col justify-between h-56">
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-snug line-clamp-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-medium">
                                                    {service.shortDesc || service.fullDetails}
                                                </p>
                                            </div>

                                            {/* Clean Pricing Meta Strip */}
                                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                                                {service.priceEstimation ? (
                                                    <div className="flex flex-col">
                                                        <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider leading-none mb-0.5">Rate Card Price</span>
                                                        <span className="text-sm font-black text-slate-800 tracking-tight">
                                                            {service.priceEstimation}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-blue-600">Explore Details</span>
                                                )}

                                                <div className="text-blue-600 flex items-center gap-1">
                                                    <span className="hidden sm:inline-block">View Scope</span>
                                                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className="border-t border-slate-200/60 my-12 max-w-4xl mx-auto"></div>

                    {/* ELECTRICAL SERVICES */}
                    <div className="space-y-12">
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Certified Experts</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                                Our Professional <span className="bg-gradient-to-r from-[#EAB308] to-amber-500 bg-clip-text text-transparent">Electrical Services</span>
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                                Operated exclusively by background-verified local electricians in Patna for complete safety.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesData
                                .filter(service => service.category === 'electrical' || !service.category)
                                .slice(0, 6)
                                .map((service) => (
                                    <Link
                                        key={service.id}
                                        to={`/services/${service.id}`}
                                        className="bg-white rounded-3xl border border-slate-100 hover:border-[#EAB308]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)] transition-all duration-300 block relative group overflow-hidden shadow-md"
                                    >
                                        <div className="h-52 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                                            <img
                                                src={service.bgImage}
                                                alt={service.title}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 border border-white h-11 w-11 rounded-xl flex items-center justify-center text-xl shadow-md backdrop-blur-sm">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="p-6 sm:p-8 flex flex-col justify-between h-56">
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 group-hover:text-[#EAB308] transition-colors duration-200 leading-snug line-clamp-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-medium">
                                                    {service.shortDesc}
                                                </p>
                                            </div>
                                            <div className="text-xs font-black uppercase tracking-wider text-[#EAB308] flex items-center gap-1.5 border-t border-slate-100 pt-4 mt-auto">
                                                <span>Explore Details</span>
                                                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. WHY CHOOSE US SECTION */}
            <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#EAB308] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                            Why Choose Safe Home
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                            Engineered For Your <span className="text-[#EAB308]">Safety & Peace of Mind</span>
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                            We bridge the gap between skilled engineering standards and doorstep local convenience in Patna.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl">⏱️</div>
                            <h3 className="text-lg font-bold text-white">45-Min Express Arrival</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Strategically localized teams stationed near Kankarbagh, Fraser Road, and Patna City ensure we hit your location in minutes.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl">🛡️</div>
                            <h3 className="text-lg font-bold text-white">Verified Technicians</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Every expert undergoes rigorous background documentation verification and strict technical skill certification mapping.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl">💎</div>
                            <h3 className="text-lg font-bold text-white">No Hidden Pricing</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Transparent itemized rate structures. Get transparent pricing details upfront before any work execution begins.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-all duration-300">
                            <div className="text-3xl">🛠️</div>
                            <h3 className="text-lg font-bold text-white">Post-Service Warranty</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Enjoy structured assurance with a reliable warranty support pipeline on executed service works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ ACCORDION SECTION */}
            <section className="py-20 px-4 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                            Frequently Asked <span className="text-blue-600">Queries</span>
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
                            Clear and direct insights regarding our specialized local diagnostic standards.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, idx) => {
                            const isOpen = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white transition-all duration-200 shadow-sm hover:border-slate-300"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-600 transition-colors duration-150 group"
                                    >
                                        <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                                        <span className={`text-xl font-light transform transition-transform duration-200 text-slate-400 group-hover:text-blue-500 ${isOpen ? 'rotate-45 text-blue-600' : ''}`}>
                                            ＋
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}
                                    >
                                        <p className="p-6 text-slate-600 text-xs sm:text-sm leading-relaxed bg-slate-50/50 font-medium">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;