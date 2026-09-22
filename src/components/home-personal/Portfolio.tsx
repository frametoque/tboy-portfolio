'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const VideoItem = ({ src }: { src: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="rounded-xl"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  );
};

function Portfolio() {
  const [filter, setFilter] = useState('*');

  // Removed arbitrary 'col' definitions, Masonry handles columns automatically.
  const designs = [
    { src: '/designs/nalanda-college.jpg', category: 'manipulation', type: 'image' },
    { src: '/designs/untitled-1.png', category: 'branding', type: 'image' },
    { src: '/designs/w1.jpeg', category: 'photography', type: 'image' },
    { src: '/designs/w2.jpeg', category: 'photography', type: 'image' },
    { src: '/designs/a-seat-watch.png', category: 'manipulation', type: 'image' },
    { src: '/designs/w3.jpeg', category: 'event-campaign', type: 'image' },
    { src: '/designs/gravity.png', category: 'posters', type: 'image' },
    { src: '/designs/motion-graphics-1.mp4', category: 'motion-graphics', type: 'video' },
    { src: '/designs/w4.jpeg', category: 'manipulation', type: 'image' },
    { src: '/designs/nalanda-college-tharul.png', category: 'posters', type: 'image' },
    { src: '/designs/w5.jpeg', category: 'posters', type: 'image' },
    { src: '/designs/forensic-imprint.png', category: 'branding', type: 'image' },
    { src: '/designs/w6.jpeg', category: 'event-campaign', type: 'image' },
    { src: '/designs/earth-2.png', category: 'manipulation', type: 'image' },
    { src: '/designs/senior-graphics.png', category: 'posters', type: 'image' },
    { src: '/designs/untitled-12.png', category: 'branding', type: 'image' },
  ];

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Posters', value: '.posters' },
    { label: 'Branding', value: '.branding' },
    { label: 'Event Campaign', value: '.event-campaign' },
    { label: 'Manipulation', value: '.manipulation' },
    { label: 'Motion Graphics', value: '.motion-graphics' },
    { label: 'Photography', value: '.photography' },
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
          <div className="col-xl-2 col-lg-3">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">My Portfolio</h6>
              <h3>Selected Works.</h3>
            </div>
          </div>
          <div className="filtering col-xl-10 col-lg-9 d-flex justify-content-end align-items-end">
            <div style={{ maxWidth: '100%' }}>
              <div className="filter" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                {filters.map((f) => (
                  <span
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={filter === f.value ? 'active' : ''}
                    style={{ margin: '0 12px', whiteSpace: 'nowrap' }}
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
                    {item.type === 'video' ? (
                      <VideoItem src={item.src} />
                    ) : (
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
                    )}
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
