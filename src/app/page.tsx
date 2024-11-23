import { CozyRetreatComponent } from '@/components/cozy-retreat/cozy-retreat';
import Banner from '/public/logo/png/300ppi/melp-banner.webp';
import { ResponsiveStayCard } from '@/components/responsive-stay-card/responsive-stay-card';
import { Metadata } from 'next';
import ServicedApartment from '@/components/serviced-apartments/serviced-apartment';
import Features from '@/components/features/features';
import HomeToYours from '@/components/home-to-yours';
import ContactFormComponent from '@/components/contact-form/contact-form';
// import Compliance from '@/components/compliance';

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
          <ServicedApartment />
          <Features />
          <HomeToYours />
          <ContactFormComponent />
          {/* <Compliance /> */}
          {/* <ResponsiveStayCard /> */}
        </div>
      </div>
    </>
  );
}
