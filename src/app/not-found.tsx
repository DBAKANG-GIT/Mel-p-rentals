'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Astronaut from '/public/assets/astronaut.png';
import Earth from '/public/assets/earth-clouds.png';

export default function Custom404() {
  const [showAstronaut, setShowAstronaut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAstronaut(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Earth background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500 rounded-l-full overflow-hidden">
        <Image
          src={Earth}
          alt="Earth from space"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-2xl mb-4">error</h1>
        <h2 className="text-9xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Oops! something went wrong...</p>
        <Link
          href="/"
          className="inline-block bg-supportColor hover:bg-hover text-white  px-6 py-3 rounded-full transition-colors"
        >
          ← Back to Homepage
        </Link>
      </div>

      {/* Floating astronaut */}
      {showAstronaut && (
        <div className="absolute top-1/3 right-1/4 animate-float">
          <Image
            src={Astronaut}
            alt="Floating astronaut"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}
