import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    // Fixed wrapper with top spacing to show the floating curved capsule design
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 mt-3">
      <nav className="max-w-7xl mx-auto bg-[#070D1F]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl overflow-hidden">
        
        {/* Decorative Top Accent Inner Ribbon */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#EAB308] via-[#FDE047] to-[#EAB308]"></div>
        
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <Link to="/" className="text-xl sm:text-2xl font-black tracking-wider block text-white transition-opacity hover:opacity-90">
                <span className="text-[#EAB308] drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">⚡</span> SAFE HOME
              </Link>
              <p className="text-[9px] sm:text-[10px] text-slate-300 font-bold tracking-widest uppercase opacity-80 operational-subtitle">
                Your Safety, Our Responsibility
              </p>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-1 bg-white/5 border border-white/10 p-1.5 rounded-xl backdrop-blur-md">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-[#EAB308] text-[#0B1329] shadow-sm'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

           {/* Emergency Call Action - Ultra Responsive Edition */}
<div className="flex items-center">
  <a
    href="tel:+919155536625"
    className="inline-flex items-center justify-center bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-[#0B1329] font-black rounded-xl hover:brightness-110 shadow-md hover:shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide
    /* Mobile styles: Chhota layout */
    p-3 text-base
    /* Tablet & Desktop styles: Full button layout */
    sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
  >
    <span>📞</span>
    {/* Ye text mobile par hide rahega, sm screens se visible hoga */}
    <span className="hidden sm:inline-block ml-2 uppercase">Call Now</span>
  </a>
</div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#EAB308] bg-white/5 border border-white/10 p-2.5 rounded-xl focus:outline-none"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between relative">
                  <span className={`h-[2px] w-full bg-[#EAB308] rounded transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                  <span className={`h-[2px] w-full bg-[#EAB308] rounded transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-[2px] w-full bg-[#EAB308] rounded transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Panel inside Curved Frame */}
        <div className={`${isOpen ? 'max-h-[400px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'} lg:hidden overflow-hidden bg-[#0B1329]/95 backdrop-blur-2xl transition-all duration-300 ease-in-out`}>
          <div className="px-4 py-4 space-y-1 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-[#EAB308] text-[#0B1329]'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;