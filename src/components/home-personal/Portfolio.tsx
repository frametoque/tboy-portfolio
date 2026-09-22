'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

function Portfolio() {
  const [filter, setFilter] = useState('*');

  // Removed arbitrary 'col' definitions, Masonry handles columns automatically.
  const designs = [
    { src: '/designs/nalanda-70.jpg', category: 'posters' },
    { src: '/designs/magazine.webp', category: 'branding' },
    { src: '/designs/kuppiya.webp', category: 'event-campaign' },
    { src: '/designs/short-film-3.webp', category: 'flyers' },
    { src: '/designs/photography-open-2-1.webp', category: 'manipulation' },
  ];

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Posters', value: '.posters' },
    { label: 'Branding', value: '.branding' },
    { label: 'Event Campaign', value: '.event-campaign' },
    { label: 'Flyers', value: '.flyers' },
    { label: 'Manipulation', value: '.manipulation' },
  ];

  const filteredDesigns = filter === '*'
    ? designs
    : designs.filter(d => `.${d.category}` === filter);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="portfolio" className="work-minimal section-padding">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-3">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">My Portfolio</h6>
              <h3>Selected Works.</h3>
            </div>
          </div>
          <div className="filtering col-lg-9 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                {filters.map((f) => (
                  <span
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={filter === f.value ? 'active' : ''}
                    data-count={
                      f.value === '*'
                        ? designs.length.toString().padStart(2, '0')
                        : designs.filter(d => `.${d.category}` === f.value).length.toString().padStart(2, '0')
                    }
                  >
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="sm-marg mt-10">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredDesigns.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="items"
              >
                <div className="item">
                  <div className="img">
                    <Image
                      src={item.src}
                      alt="Portfolio Work"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="rounded-xl"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
