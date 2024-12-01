import Image from 'next/image';
import { Briefcase, Clock, Car, Tv } from 'lucide-react';
import { StayType } from './stay-type';
import Features from '/public/assets/features.jpeg';

export default function HomeToYours() {
  return (
    <div className="relative bg-[#FEFEFE] min-h-[70vh] p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Curved Backdrop */}
      <div className="absolute top-0 left-0 right-0 w-full h-[580px]">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-[#FFF6ED]"
            style={{
              borderRadius: '0 0 100% 100%/0 0 50% 50%',
              transform: 'scaleX(1.5)',
            }}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="md:flex md:items-center md:space-x-12 mt-8 md:mt-0">
          <div className="relative w-full max-w-md mx-auto md:w-1/2 aspect-square mb-8 md:mb-0">
            <div className="absolute inset-0 bg-white rounded-full p-4">
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src={Features}
                  alt="Luxurious living room"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#101828] mb-6">
              From our home to yours.
              <br />
              Your place to live.
            </h1>

            <StayType
              icon={<Briefcase className="w-6 h-6 text-white" />}
              title="Business stays"
              description="Enhance your business stays with our premium serviced accommodations, designed for work and relaxation."
              iconColor="bg-[#F0BB1F]"
            />

            <StayType
              icon={<Clock className="w-6 h-6 text-white" />}
              title="Short and long stays"
              description="Experience comfort and convenience for both short and long stays with our exceptional serviced accommodations."
              iconColor="bg-[#F15A2B]"
            />

            <StayType
              icon={<Car className="w-6 h-6 text-white" />}
              title="Relocation stays"
              description="Simplify your relocation with our top-notch serviced accommodations, designed for a smooth transition."
              iconColor="bg-[#006380]"
            />

            <StayType
              icon={<Tv className="w-6 h-6 text-white" />}
              title="Leisure stays"
              description="Unwind and enjoy your getaway in style with our fully equipped and cozy accommodations, perfect for relaxation."
              iconColor="bg-[#080809]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
