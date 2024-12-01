import Image from 'next/image';
import Link from 'next/link';
import { NewsletterForm } from './newsletter-form';
import { ScrollToTop } from './scroll-to-top';
import logo from '/public/logo/png/300ppi/logo-secondary.png';
import Ico from '/public/assets/ico.png';
import Prs from '/public/assets/prs.png';
import Instagram from '/public/assets/instagram-logo.svg';
import Facebook from '/public/assets/facebook-logo.svg';
import LinkedIn from '/public/assets/linkedin-logo.svg';

export function Footer() {
  return (
    <footer className=" py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src={logo}
              alt="Mel P Rentals"
              width={150}
              height={80}
              className="mb-4"
            />
            <div className="text-center md:text-left">
              <p className="font-bold">71-75 Shelton Street,</p>
              <p className="font-bold">
                Covenant Garden London WC2H 9JQ United Kingdom
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="tel:+44784098970" className="hover:underline">
                + 44 784098970
              </Link>
              <Link
                href="mailto:ishmael@melprentals.com"
                className="hover:underline"
              >
                ishmael@melprentals.com
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-semibold">Stay up to date</h3>
            <NewsletterForm />
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src={Instagram}
                  alt="instagram-icon"
                  className="h-6 w-6"
                />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={Facebook} alt="facebook-icon" className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src={LinkedIn} alt="linkedin-icon" className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Image
                src={Ico}
                alt="ICO Certification"
                width={80}
                height={40}
                className="h-auto"
              />
              <Image
                src={Prs}
                alt="PRS Certification"
                width={120}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              Copyright © 2024 • Mel P Rentals
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <Link href="/terms" className="hover:underline">
                Terms & conditions
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
