import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-32 pb-10 overflow-hidden">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }}></div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-8">
          <Link href="#" className="text-4xl md:text-5xl font-bold tracking-tighter text-white hover:text-white inline-block">
            Tharul Bandara<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Small Sentence */}
        <p className="text-gray-400 leading-relaxed max-w-lg mb-12" style={{ fontFamily: 'Heebo, sans-serif', fontWeight: 300, fontSize: '16px' }}>
          Elevating brands through striking visuals, cinematic edits, and thoughtful design. Let&apos;s create something extraordinary together.
        </p>

        {/* Contact Details */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-lg font-light" style={{ fontFamily: 'Heebo, sans-serif' }}>
          <Link href="mailto:tharul@frametoque.com" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
            tharul@frametoque.com
          </Link>
          <span className="hidden sm:block text-gray-700">|</span>
          <Link href="tel:+94778609356" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
            +94 77 860 9356
          </Link>
        </div>

        {/* Social Media */}
        <ul className="flex items-center gap-4 mb-20">
          {[
            { icon: 'facebook-f', url: 'https://facebook.com/bandara.tharul' },
            { icon: 'instagram', url: 'https://instagram.com/bandara.tharul' },
            { icon: 'whatsapp', url: 'https://wa.me/94778609356' }
          ].map((social, i) => (
            <li key={i}>
              <Link 
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright & Developed By */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-8 pb-6 border-t border-white/5 w-full max-w-2xl text-gray-500" style={{ fontFamily: 'Heebo, sans-serif', fontWeight: 300, fontSize: '12px' }}>
          <p>
            © {new Date().getFullYear()} Tharul Bandara. All rights reserved.
          </p>
          <span className="hidden sm:block text-gray-700">|</span>
          <p>
            Developed by <Link href="https://frametoque.com" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 underline decoration-red-500/30 underline-offset-4 transition-colors">Frametoque Digital Media</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
