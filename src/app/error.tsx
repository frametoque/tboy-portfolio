'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely if monitoring is attached
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-white mb-4">
        500<span className="text-red-500">.</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
        Something went wrong
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="butn butn-md butn-bord radius-30 px-6 py-3 text-white border border-white/20 hover:border-red-500 transition-colors"
        >
          <span className="text">Try Again</span>
        </button>
        <Link
          href="/"
          className="butn butn-md butn-bord radius-30 px-6 py-3 text-white border border-white/20 hover:border-red-500 transition-colors"
        >
          <span className="text">Home</span>
        </Link>
      </div>
    </div>
  );
}
