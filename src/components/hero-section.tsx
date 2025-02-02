import Image from 'next/image';
import Banner from '/public/assets/features.jpeg';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px]">
      {/* Background Image */}
      <Image
        src={Banner.src}
        alt="Luxury apartment interior"
        fill
        className="object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold text-center max-w-4xl">
          8 Reasons to stay in serviced apartments over hotels.
        </h1>
      </div>
    </div>
  );
}
