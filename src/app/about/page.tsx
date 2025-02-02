import HeroBanner from '@/components/hero-banner';
import { Metadata } from 'next';
import banner from '/public/assets/about-image.webp';
import ServicedApartmentsComponent from '@/components/serviced-apartments/about-serviced-apartments';
import HeroSection from '@/components/hero-section';
import ServicedApartmentsReasons from '@/components/ServicedApartmentsReasons';
import ContactFormComponent from '@/components/contact-form/contact-form';

export const metadata: Metadata = {
  title: 'About Mel P Rentals | Comfortable & Stylish Short-Stay Experts',
  description:
    'Learn about Mel P Rentals, your trusted choice for comfortable and stylish short-stay accommodations. Discover how we blend convenience and luxury for both leisure and business travelers.',
};

export default function AboutPage() {
  return (
    <div>
      <HeroBanner text="About Us" imageUrl={banner.src} />
      <ServicedApartmentsComponent />
      <HeroSection />
      <ServicedApartmentsReasons />
      <ContactFormComponent />
    </div>
  );
}
