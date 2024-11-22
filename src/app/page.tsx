import { CozyRetreatComponent } from '@/components/cozy-retreat/cozy-retreat';
import Banner from '/public/logo/png/300ppi/melp-banner.webp';
import { FeatureSection } from '@/components/features/feature-section';
import { ResponsiveStayCard } from '@/components/responsive-stay-card/responsive-stay-card';
import WhatWeOffer from '@/components/what-we-offer/what-we-offer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mel P Rentals | Homepage',
  description:
    'Mel P Rentals provides exceptional short-stay accommodations, blending comfort, convenience, and style. Discover our premium properties, perfect for business professionals and leisure travelers alike.',
};

export default function Home() {
  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-2 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500"></div> */}
      <div>
        <div className="min-h-screen">
          <CozyRetreatComponent backgroundImage={Banner.src} />
          {/* <FeatureSection /> */}
          {/* <WhatWeOffer /> */}
          {/* <ResponsiveStayCard /> */}
        </div>
      </div>
    </>
  );
}
