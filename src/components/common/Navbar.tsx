'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg backdrop-blur-xl bg-black/40 border-b border-white/5 transition-all duration-300">
      <div className="container">
        <Link className="logo text-3xl md:text-4xl font-bold tracking-tighter text-white hover:text-white" href="#" style={{ fontFamily: 'Heebo, sans-serif' }}>
          TB<span className="text-red-500">.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="hidden lg:flex justify-center items-center flex-grow"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#home">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#portfolio">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <Link
            href="#contact"
            className="butn butn-sm butn-bg bg-red-600 hover:bg-red-700 text-white radius-5 border-red-600 hover:border-red-700"
          >
            <span className="text">Let's Connect</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
