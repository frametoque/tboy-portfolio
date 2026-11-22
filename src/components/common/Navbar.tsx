'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        navScroll
          ? 'bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent backdrop-blur-none border-b border-transparent py-5'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 999,
        transform: 'none',
        backdropFilter: navScroll ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: navScroll ? 'blur(20px)' : 'none',
        backgroundColor: navScroll ? 'rgba(15, 15, 15, 0.9)' : 'transparent',
        borderBottomColor: navScroll ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link
          className="logo text-3xl md:text-4xl font-bold tracking-tighter text-white hover:text-white flex items-center"
          href="#"
          style={{ fontFamily: 'Heebo, sans-serif' }}
        >
          TB<span className="text-red-500">.</span>
        </Link>

        <button
          className="navbar-toggler lg:hidden text-white p-2 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="icon-bar">
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </span>
        </button>

        <div
          className={`${
            mobileOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:justify-center flex-grow w-full lg:w-auto mt-4 lg:mt-0`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 list-none p-0 m-0">
            <li className="nav-item">
              <Link
                className="nav-link text-white/90 hover:text-red-500 text-sm uppercase tracking-widest transition-colors"
                href="#home"
                onClick={() => setMobileOpen(false)}
              >
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white/90 hover:text-red-500 text-sm uppercase tracking-widest transition-colors"
                href="#about"
                onClick={() => setMobileOpen(false)}
              >
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white/90 hover:text-red-500 text-sm uppercase tracking-widest transition-colors"
                href="#portfolio"
                onClick={() => setMobileOpen(false)}
              >
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white/90 hover:text-red-500 text-sm uppercase tracking-widest transition-colors"
                href="#services"
                onClick={() => setMobileOpen(false)}
              >
                <span className="rolling-text">Services</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button hidden lg:block">
          <Link
            href="#contact"
            className="butn butn-sm butn-bg bg-red-600 hover:bg-red-700 text-white radius-5 border-red-600 hover:border-red-700 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            <span className="text">Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
