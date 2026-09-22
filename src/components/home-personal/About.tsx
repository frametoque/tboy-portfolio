'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Optional faint background element for modern feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container">
        <div className="row items-center gap-y-12">
          {/* Image Column */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"></div>
              <Image
                src="/assets/imgs/header/p2.png"
                alt="Tharul Bandara"
                width={800}
                height={1000}
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="col-lg-6 offset-lg-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cont text-center flex flex-col items-center">
              <span className="uppercase tracking-[0.2em] text-[15px] font-bold text-red-500 mb-4 block">
                About Me
              </span>

              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-medium mb-10 leading-[1.6] text-gray-300" style={{ fontFamily: 'Heebo, sans-serif' }}>
                I&apos;m Tharul, Co-Founder of <Link href="https://frametoque.com" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 transition-colors font-semibold">Frametoque Digital Media</Link> — from LK. Since I started my creative journey, I&apos;ve focused on <span className="text-red-500 font-semibold">video editing</span>, graphic design, and <span className="text-red-500 font-semibold">branded content production</span>, helping clients stand out through cinematic visuals & purposeful design. Every frame I deliver is built with <span className="text-red-500 font-semibold">intention</span>.
              </h3>

              <div className="w-full">
                <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-red-500 mb-6 block text-center">
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Illustrator' },
                    { name: 'Photoshop' },
                    { name: 'Premiere Pro' },
                    { name: 'DaVinci Resolve' },
                    { name: 'Blender' },
                    { name: 'Figma' },
                  ].map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-3 rounded-2xl bg-white/5 backdrop-blur-md shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      <span className="text-sm font-medium text-gray-200 tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
