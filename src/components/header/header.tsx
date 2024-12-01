'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import CustomButton from '../custom-button/custom-button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const fadeIn = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/45 backdrop-blur-[2.5px] h-[116px] px-4 md:px-[52.5px]">
      <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/png/300ppi/melp-logo.png"
            alt="Mel P Rentals Logo"
            width={180}
            height={64}
            className="h-10 w-auto md:h-12 lg:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-hover font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="text-gray-400">|</span>
          <CustomButton
            href="/book"
            text="Book Now"
            color="bg-supportColor"
            textColor="text-white"
            hoverColor="bg-hover"
            props="text-lg font-bold py-3 px-6"
          />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white z-50">
              {isOpen ? (
                <X className="h-6 w-6 text-red-500 z-50" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full h-[100dvh] bg-black/90 backdrop-blur-lg border-none pt-20"
          >
            <animated.div
              style={fadeIn}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#B4925E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <CustomButton
                href="/book"
                text="Book Now"
                color="bg-supportColor"
                textColor="text-white"
                hoverColor="bg-hover"
                props="text-lg font-bold py-3 px-6"
              />
            </animated.div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
