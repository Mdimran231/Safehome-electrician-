import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../Data/servicesData';

const Home = () => {
    // Lead form state handling
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Emergency Short Circuit & Tripping Repair',
        area: ''
    });

    // FAQ active index handle karne ke liye state
    const [activeIndex, setActiveIndex] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Google-friendly FAQ Data with Schema structured content
    const faqData = [
        {
            question: "What is your electrician response time for emergency calls in Patna?",
            answer: "For emergency calls like short circuits or frequent tripping in Patna City, Kankarbagh, Patna Sahib, and Fraser Road, we prioritize a rapid 45 to 60-minute doorstep arrival time after booking confirmation."
        },
        {
            question: "Do you provide professional modular kitchen and room lighting installation services?",
            answer: "Yes, we specialize in modern electrical solutions, including luxury false ceiling profile layouts, ambient COB & LED strip integration, and dedicated load-mapped wiring panels specifically designed for modern modular kitchens and rooms."
        },
        {
            question: "Is there a diagnostic or inspection fee for fault-finding?",
            answer: "If you proceed with the repair work order with us after diagnostics, we provide a Zero Inspection Fee. If you require only inspection and choose not to proceed with the work order, a minimum standard visit charge applies."
        },
        {
            question: "What materials do you use for complete flat wiring projects in Patna?",
            answer: "We prioritize safety above all. For complete home or flat wiring, we use only ISO-certified, heat-resistant, and fire-retardant (FR) premium copper wires, concealed conduit pipelines, and branded safety switches/MCBs."
        },
        {
            question: "Do you offer automated inverter and battery setup solutions?",
            answer: "Yes, we specialize in power backup automation, integrating automatic changeover switch assemblies that provide uninterrupted power within microseconds of a blackout."
        },
        {
            question: "Are your electricians background-verified and certified?",
            answer: "Absolutely. 'Your Safety, Our Responsibility' is our core principle. All our electrical experts are background-verified, technically trained, and field-licensed to ensure maximum security."
        }
    ];

    // WhatsApp Redirect Form Handler with completed validation and reset
    const handleBookingSubmit = (e) => {
        e.preventDefault();

        const message = `⚡ *NEW ELECTRICIAN BOOKING RECEIVED* ⚡%0A%0A` +
            `👤 *Customer Name:* ${formData.name}%0A` +
            `📞 *Phone Number:* ${formData.phone}%0A` +
            `🛠️ *Service Required:* ${formData.service}%0A` +
            `📍 *Location in Patna:* ${formData.area}%0A%0A` +
            `⚡ _Please respond promptly to finalize this local booking!_`;

        const whatsappUrl = `https://wa.me/919155536625?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setFormSubmitted(true);

        // Form reset logic using servicesData safely
        setFormData({
            name: '',
            phone: '',
            service: servicesData[0]?.title || 'Emergency Short Circuit & Tripping Repair',
            area: ''
        });
    };

    // Hero dropdown fast submission logic completed
    const handleHeroFormSubmit = (e) => {
        e.preventDefault();
        const heroName = e.target.elements.heroName.value || 'Valued Customer';
        const heroPhone = e.target.elements.heroPhone.value || 'Not Provided';
        const heroService = e.target.elements.heroService.value;

        const message = `⚡ *NEW HERO DROP-DOWN BOOKING* ⚡%0A%0A` +
            `👤 *Customer Name:* ${heroName}%0A` +
            `📞 *Phone Number:* ${heroPhone}%0A` +
            `🛠️ *Service Required:* ${heroService}%0A` +
            `📍 *Location:* Patna Area (Rapid Callback)%0A%0A` +
            `⚡ _Finalize this rapid booking immediately!_`;

        const whatsappUrl = `https://wa.me/919155536625?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // FAQ JSON-LD Schema Script (Crucial for SEO visibility)
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
                <title>24/7 Certified Electrician in Patna | Home Wiring & AC Repair | Safe Home</title>
                <meta name="description" content="Safe Home Electricals offers background-verified, 24/7 certified electrician services near Patna. Specialists in new concealed home wiring, AC installation, inverter setup, and emergency fault repairs. Quick 45-min arrival." />
                <meta name="keywords" content="Best electrician in Patna City, Emergency electrician near Kankarbagh, Certified tech Patna Sahib, Fraser Road electrical repair, new house wiring Patna, modular kitchen lighting installation, rapid response electrical service Bihar" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchemaData)}
                </script>
            </Helmet>

            {/* 1. HERO SECTION */}
            <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center overflow-hidden pt-32 pb-16 px-4"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')`
                }}
            >
                {/* Image ka original look maintain karne ke liye transparent soft shading */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side Section */}
                        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-[#1E293B]/80 border border-white/20 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse"></span>
                                <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                                    ⚡ Certified 24/7 Local Technicians
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                                SAFE HOME <br />
                                <span className="text-[#EAB308]">
                                    ELECTRICAL SERVICE
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl font-bold text-yellow-400 italic tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                                "Your Safety, Our Responsibility"
                            </p>

                            <p className="text-sm sm:text-base text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                We deliver precision engineering solutions to safeguard Patna households from hidden wiring hazards and catastrophic power overloads.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                                <a
                                    href="tel:+919155536625"
                                    className="w-full sm:w-auto text-center bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-slate-900 font-black px-8 py-4 rounded-xl text-base shadow-[0_4px_25px_rgba(234,179,8,0.4)] hover:brightness-110 transition-all duration-200 transform hover:-translate-y-0.5 block tracking-wide"
                                >
                                    📞 CALL NOW: +91 9155536625
                                </a>
                            </div>

                            <div className="pt-8 border-t border-white/20 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">45 Min</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Patna Response</p>
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">Verified</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Licensed Staff</p>
                                </div>
                                <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    <p className="text-2xl sm:text-3xl font-black text-[#EAB308]">5.0 ⭐</p>
                                    <p className="text-[11px] text-slate-200 font-bold uppercase tracking-wider">Google Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Section: Hero Lead Booking Form */}
                        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
                            <div className="bg-white/95 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_25px_50px_rgba(0,0,0,0.25)] relative overflow-hidden backdrop-blur-md">
                                <div className="mb-6">
                                    <h3 className="text-xl font-black text-[#1E293B] tracking-wide">
                                        Book an Electrician
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">
                                        Background-verified local professionals. Safe & insured.
                                    </p>
                                </div>

                                <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name</label>
                                        <input
                                            name="heroName"
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Contact Number</label>
                                        <input
                                            name="heroPhone"
                                            type="tel"
                                            required
                                            pattern="[0-9]{10}"
                                            placeholder="Enter mobile number"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Required Service</label>
                                        <div className="relative">
                                            <select name="heroService" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 focus:outline-none focus:border-[#EAB308] focus:bg-white transition-all appearance-none cursor-pointer">
                                                {servicesData.map((s, idx) => (
                                                    <option key={idx} value={s.title} className="bg-white text-[#1E293B]">{s.title}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                ▼
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#1E293B] text-white font-bold py-4 rounded-xl text-sm tracking-wider uppercase shadow-md hover:bg-[#334155] transition-all duration-200 mt-2"
                                    >
                                        ⚡ Secure Instant Callback
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
                                    🛠️ Certified Patna Experts
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                                Trusted Electrical Expert <span className="text-[#EAB308]">Service in Patna City</span>
                            </h2>

                            <div className="w-20 h-1.5 bg-[#EAB308] rounded-full mx-auto lg:mx-0 shadow-sm"></div>

                            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                                <p>
                                    Managing commercial and residential electrical grids requires absolute precision and engineering expertise. A minor oversight can lead to major damage, costly appliance failure, or dangerous short circuits.
                                </p>
                                <p className="border-l-4 border-[#EAB308] pl-4 italic bg-gray-100 py-2.5 rounded-r-2xl text-sm md:text-base text-[#1E293B] font-semibold shadow-sm">
                                    "Your Safety is Our Baseline Objective. We never compromise on technical standards."
                                </p>
                                <p className="text-sm md:text-base text-gray-700">
                                    We deliver technical reliability with high-tech diagnostic tools to families in **Patna City**, **Kankarbagh**, **Patna Sahib**, and **Fraser Road**. Every project of ours is executed under strict, zero-compromise security check-sheets.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 lg:pt-0">
                            {/* Card 1 */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-yellow-100 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">📋</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">Zero Compromise</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Strict security audits and verification check-sheets with every delivery.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-slate-200 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">🔬</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">High-Tech Tools</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Accurate fault-finding using advanced digital diagnostic instruments.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-yellow-100 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50/50 rounded-bl-3xl z-0 group-hover:scale-110 transition-transform"></div>
                                <div className="text-3xl mb-4 relative z-10">💰</div>
                                <h3 className="font-bold text-[#1E293B] text-base mb-1 relative z-10">100% Transparent</h3>
                                <p className="text-gray-500 text-xs leading-normal relative z-10">
                                    Upfront estimation without hidden charges. Zero Inspection Fee option.
                                </p>
                            </div>

                            {/* Card 4 */}
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

            {/* 3. SERVICES GRID SECTION (Light Modern Background) */}
            <section className="py-20 px-4 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
                {/* Ambient Subtle Warm Highlights */}
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#EAB308]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                    {/* Section Header Grid */}
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Certified Solutions</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                            Our Professional <span className="bg-gradient-to-r from-[#EAB308] to-amber-500 bg-clip-text text-transparent">Electrical Services</span>
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                            Operated exclusively by certified, background-verified technicians. Select any service node to explore detailed layouts and implementation steps.
                        </p>
                    </div>

                    {/* Dynamic Mapping Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                        {servicesData.slice(0, 6).map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="bg-white rounded-3xl border border-slate-100 hover:border-[#EAB308]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)] transition-all duration-300 block relative group overflow-hidden shadow-md"
                            >
                                {/* Card Image Cover */}
                                <div className="h-52 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                                    <img
                                        src={service.bgImage}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80";
                                        }}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 border border-white h-11 w-11 rounded-xl flex items-center justify-center text-xl shadow-md backdrop-blur-sm">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Text Body */}
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
                                        <span>Explore Technical Details</span>
                                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Services Button */}
                    <div className="text-center pt-8">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-slate-900 font-black px-10 py-4 rounded-xl text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(234,179,8,0.25)] hover:brightness-110 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            ⚙️ View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US SECTION (Dark Premium Background) */}
            <section className="py-20 px-4 bg-[#0F172A] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-0"></div>

                <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EAB308] tracking-tight">Why Choose Safe Home Electricals?</h2>
                        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">We enforce premium operating protocols, high-grade security audits, and absolute clarity in pricing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-[#1E293B] p-8 rounded-3xl border border-white/5 space-y-4 text-center shadow-lg transform hover:-translate-y-1 group transition-all duration-300">
                            <div className="text-5xl mb-3 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-300">🛡️</div>
                            <h3 className="text-xl font-bold text-[#EAB308]">Safe Homes Baseline</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-normal opacity-90">
                                Your safety is our prime operational baseline. From exact load calculations to utilizing heat-resistant cabling, we minimize technical errors to zero.
                            </p>
                        </div>

                        <div className="bg-[#1E293B] p-8 rounded-3xl border border-white/5 space-y-4 text-center shadow-lg transform hover:-translate-y-1 group transition-all duration-300">
                            <div className="text-5xl mb-3 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-300">🤝</div>
                            <h3 className="text-xl font-bold text-[#EAB308]">Reliable & On-Time</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-normal opacity-90">
                                Zero delays and missed appointments. Our closest localization team arrives at your doorstep within 60 minutes after task generation.
                            </p>
                        </div>

                        <div className="bg-[#1E293B] p-8 rounded-3xl border border-white/5 space-y-4 text-center shadow-lg transform hover:-translate-y-1 group transition-all duration-300">
                            <div className="text-5xl mb-3 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-300">🧰</div>
                            <h3 className="text-xl font-bold text-[#EAB308]">Engineering Grade Tools</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-normal opacity-90">
                                We operate using advanced digital instrumentation, insulation test equipment, and loop calibration tools for profound accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-20 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center space-x-2 bg-[#1E293B]/5 px-4 py-1.5 rounded-full shadow-inner">
                            <span className="text-xs font-black tracking-wider text-[#1E293B] uppercase flex items-center gap-1">
                                🤔 Patna Local Context
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
                            Frequently Asked <span className="text-[#EAB308]">Questions</span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                            Find rapid answers about our services, safety protocols, response times, and pricing in Patna City.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100/80 transition-all duration-200"
                                    >
                                        <span className="font-bold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                                        <span className={`text-xl transition-transform duration-200 text-slate-500 ${isOpen ? 'rotate-180 text-[#EAB308]' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="p-5 bg-white border-t border-slate-50 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    )}
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