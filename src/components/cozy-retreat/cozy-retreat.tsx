'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CustomButton from '../custom-button/custom-button';
import useNavigateWithSpinner from '@/hook/use-navigate-with-spinner';

type CozyRetreatComponentProps = {
  backgroundImage: string;
};

export function CozyRetreatComponent({
  backgroundImage,
}: CozyRetreatComponentProps) {
  const [location, setLocation] = useState('');
  const [property, setProperty] = useState('');
  const { isLoading, navigate } = useNavigateWithSpinner();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.60) 14%, rgba(0, 0, 0, 0.00) 73%),
            linear-gradient(0deg, rgba(28, 33, 43, 0.35) 0%, rgba(28, 33, 43, 0.35) 100%),
            url(${backgroundImage})
          `,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 max-w-3xl">
          Inspired by Living: A Cozy Retreat for Short-Term Stays
        </h1>
        <div className="hidden md:flex items-center gap-2 mb-8"></div>
        <div className="w-full max-w-[30rem] bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col md:flex-row gap-4">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full md:w-[180px] bg-white text-black">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="paris">Paris</SelectItem>
            </SelectContent>
          </Select>
          <Select value={property} onValueChange={setProperty}>
            <SelectTrigger className="w-full md:w-[180px] bg-white text-black">
              <SelectValue placeholder="Property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
          <CustomButton
            href="/book"
            text="Search"
            color="bg-[#A9324D]"
            textColor="text-white"
            hoverColor="bg-[#8D2A40]"
            props="w-full md:w-auto"
            isLoading={isLoading}
            onClick={() => navigate('/book')}
          />
        </div>
      </div>
    </div>
  );
}
