'use client';
import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Unmount cleanly from React DOM after CSS slide-up transition completes
    const dismissTimer = setTimeout(() => {
      setIsDismissed(true);
    }, 2400);

    return () => clearTimeout(dismissTimer);
  }, []);

  if (isDismissed) {
    return null;
  }

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
