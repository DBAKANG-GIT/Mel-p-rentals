import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Award from '/public/assets/tick-icon.png';
import Wifi from '/public/assets/wifi.svg';
import Calendar from '/public/assets/calendar.png';
import X from '/public/assets/book.png';
import FeatureImage from '/public/assets/features.jpeg';

import { Send, Map, Leaf } from 'lucide-react';

export default function ServicedApartment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Our Serviced Apartment
            </h1>
            <p className="text-xl text-muted-foreground">
              Fully-furnished, self-catering accommodations for corporate
              housing, short-term stay, or temporary home
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="text-amber-500">
                <Image src={Award} alt="tick-icon" className="h-6 w-6" />
              </div>
              <span className="font-medium">Best Rate Guaranteed</span>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="text-amber-500">
                <Image src={Wifi} alt="Wifi-icon" className="h-6 w-6" />
              </div>
              <span className="font-medium">Free Wi-Fi</span>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="text-amber-500">
                <Image src={Calendar} alt="calendar-icon" className="h-6 w-6" />
              </div>
              <span className="font-medium">Reserve Now, Pay Later</span>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="text-amber-500">
                <Image src={X} alt="calendar-icon" className="h-6 w-6" />
              </div>
              <span className="font-medium">Free Cancellation</span>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="absolute left-4 top-4 z-20">
              <Badge variant="secondary" className="text-lg py-1.5">
                Coming Soon
              </Badge>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={FeatureImage}
                alt="Apartment Interior"
                className="object-cover w-full"
                height={400}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Mel P Apartments</h3>
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-accent rounded-md">
                  <Leaf className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-accent rounded-md">
                  <Map className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-accent rounded-md">
                  <Send className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
