'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  const roles = ['a Photographer', 'a Graphics Designer', 'an Editor'];
  const [roleIndex, setRoleIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => { tl.kill(); };
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      id="home"
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.png"
      data-overlay-dark="2"
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* Pulsing Red Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title mb-10" style={{ fontWeight: 400, fontSize: '1.2rem' }}>I am</h6>
              <h1 className="fw-700 mb-10 mt-10">
                Tharul <span className="main-color">Bandara</span>
              </h1>
              <h3>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block main-color"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Owner and Co-Founder of <Link href="https://frametoque.com" target="_blank" rel="noreferrer" className="main-color">Frametoque Digital Media</Link>. From the inception of a project to its completion, we
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <Link
                      href="#contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </Link>
                    <div className="icon-img-60 ml-20">
                      <Image
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
