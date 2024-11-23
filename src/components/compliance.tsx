import Image from 'next/image';
import Link from 'next/link';
import Prs from '/public/assets/prs.png';
import Ico from '/public/assets/ico.png';
export default function Compliance() {
  return (
    <footer className="bg-[#FFF6ED] py-8 px-4 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          <h2 className="text-lg md:text-xl lg:text-2xl text-center text-gray-800 font-medium tracking-wide">
            Legal and Compliance
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <Link
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src={Ico}
                alt="Information Commissioner's Office"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>

            <Link
              href="https://theprs.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src={Prs}
                alt="Property Redress Scheme"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
