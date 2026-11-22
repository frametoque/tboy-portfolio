'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function LoadingScreen() {
  useEffect(() => {
    const svg = document.getElementById('svg');
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    const dismiss = () => {
      const loader = document.querySelector('.loader-wrap') as HTMLElement;
      if (loader) {
        loader.style.display = 'none';
        loader.style.zIndex = '-1';
      }
    };

    const tl = gsap.timeline({
      onComplete: dismiss,
    });

    tl.to('.loader-wrap-heading .load-text, .loader-wrap-heading .cont', {
      delay: 1.2,
      y: -100,
      opacity: 0,
      duration: 0.5,
    });

    if (svg) {
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: 'power2.easeIn',
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: 'power2.easeOut',
      });
    }

    tl.to('.loader-wrap', {
      y: -1500,
      duration: 0.8,
    });

    tl.to('.loader-wrap', {
      zIndex: -1,
      display: 'none',
      duration: 0.1,
    });

    // Safety fallback: ensure loader is always dismissed even if animation is interrupted
    const fallbackTimer = setTimeout(dismiss, 3500);

    return () => {
      clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          {'THARUL BANDARA'.split('').map((char, index) => (
            <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
