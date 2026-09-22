'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    { title: 'Branding & Identity Design', icon: 'fas fa-fingerprint' },
    { title: 'Social Media Design', icon: 'fas fa-hashtag' },
    { title: 'Marketing & Promotional', icon: 'fas fa-bullhorn' },
    { title: 'Print & Stationery Design', icon: 'fas fa-print' },
    { title: 'Digital & Web Graphics', icon: 'fas fa-laptop-code' },
    { title: 'Short-Form Video Editing', icon: 'fas fa-mobile-alt' },
    { title: 'Long-Form Video Editing', icon: 'fas fa-film' },
    { title: 'Social Media Video Editing', icon: 'fas fa-play-circle' },
    { title: 'Motion Graphics & Animation', icon: 'fas fa-magic' },
    { title: 'Corporate & Business Videos', icon: 'fas fa-briefcase' },
    { title: 'Content Creator Editing', icon: 'fas fa-gamepad' },
    { title: 'Custom Solutions', icon: 'fas fa-lightbulb' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="services-clas relative overflow-hidden">
      <div className="container section-padding">
        
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-red-500 mb-4 block">
            My Specialties
          </span>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Featured <span className="text-red-500 font-light italic">Services.</span>
          </h3>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((srv, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 group flex flex-col h-full cursor-default shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                <i className={`${srv.icon} text-2xl text-gray-400 group-hover:text-red-500 transition-colors duration-500`}></i>
              </div>
              
              <h5 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300 leading-tight">
                {srv.title}
              </h5>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
