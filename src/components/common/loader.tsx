'use client';
import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [isSliding, setIsSliding] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setIsSliding(true);
    }, 1200);

    const dismissTimer = setTimeout(() => {
      setIsDismissed(true);
    }, 2000);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(dismissTimer);
    };
  }, []);

  if (isDismissed) {
    return null;
  }

  return (
    <div
      className="loader-wrap"
      style={{
        transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.4s ease',
        transform: isSliding ? 'translateY(-100%)' : 'translateY(0)',
        pointerEvents: isSliding ? 'none' : 'auto',
      }}
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div
        className="loader-wrap-heading"
        style={{
          transition: 'transform 0.4s ease, opacity 0.4s ease',
          transform: isSliding ? 'translateY(-50px)' : 'translateY(0)',
          opacity: isSliding ? 0 : 1,
        }}
      >
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
