import { Mail, Zap, ChefHat, MapPin, Home, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Affordable Prices',
    description:
      'We offer competitive pricing without compromising on quality, ensuring exceptional value for your stay.',
  },
  {
    icon: Zap,
    title: 'Housekeeping Services',
    description:
      'Enjoy hassle-free living with our professional housekeeping services, keeping your space spotless and welcoming.',
  },
  {
    icon: ChefHat,
    title: 'Fully Equipped Kitchen',
    description:
      'Cook your favorite meals in our modern kitchens, complete with all essential appliances and cookware.',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description:
      'Our properties are situated in strategic locations, offering easy access to local attractions and amenities.',
  },
  {
    icon: Home,
    title: 'Fully Furnished Homes',
    description:
      'Experience the comfort of home with our stylishly furnished spaces, designed for both work and relaxation.',
  },
  {
    icon: MessageCircle,
    title: 'Dedicated Support',
    description:
      'Our team is available to assist you throughout your stay, ensuring a seamless and enjoyable experience.',
  },
];

export default function Features() {
  return (
    <div className="bg-[#FEFEFE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="my-4 text-center">
          <button className="bg-[#9A1840] text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
            Our Features
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF6ED] mb-4 transition-all duration-300 ease-in-out hover:bg-hover group">
                  <feature.icon className="w-8 h-8 text-[#F48F27] transition-colors duration-300 ease-in-out group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#101828] mb-2 text-center">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[#667085] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-[#9A1840] text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
}
