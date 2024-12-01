'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Home,
  Utensils,
  PiggyBank,
  MapPin,
  Sofa,
  Calendar,
  Key,
  Sparkles,
} from 'lucide-react';

const reasons = [
  {
    title: 'Space',
    content:
      'Unlike hotels, where you are either in separate rooms or all cramped together, elbowing each other for a good view of the TV, serviced apartments are typically bigger than equivalent hotels - most with comfortable seating enough for everyone.',
    icon: Home,
  },
  {
    title: 'Home Cooking',
    content:
      "Serviced apartments come with their own fully equipped kitchen, meaning you can enjoy your family's favorite meals and don't have to splash out in restaurants during your whole trip.",
    icon: Utensils,
  },
  {
    title: 'Cost Effective',
    content:
      'Rates are usually lower than similar hotels. Plus, beneficial rates are generally available for longer stays so you can enjoy the apartment with the satisfaction of getting value for money.',
    icon: PiggyBank,
  },
  {
    title: 'Central Locations',
    content:
      "It's not just hotels and B&Bs that get the top spots close to all the best attractions. Serviced apartments are also right there in the heart of the action, so if you've had a busy day exploring, sightseeing and visiting your chosen places you won't be too far back to your apartment to relax at the end of the day.",
    icon: MapPin,
  },
  {
    title: 'Home Comfort',
    content:
      'Providing a secure, comfortable environment, serviced apartments offer a home-from-home comfort. Apartments often include separate living and sleeping spaces as well as all the entertainment equipment.',
    icon: Sofa,
  },
  {
    title: 'Familiarity',
    content:
      "With your own kitchen and separate bedrooms and living spaces, serviced apartments allow you to maintain your normal family routine. If you're used to 7pm bedtimes and 6am breakfasts, there's nothing to stop you sticking to it with ease.",
    icon: Calendar,
  },
  {
    title: 'Freedom',
    content:
      "Once you've booked your serviced apartment, that's it: you can work, play and relax at any given moment. There's no need to reserve a conference room for a meeting - just host it in the living room or dining room.",
    icon: Key,
  },
  {
    title: 'House Keeping',
    content:
      "Possibly the best part of a serviced apartment stay is that you experience the best of both worlds: home-style living with hotel service. Cleaning and daily linen service is a given so you don't have to lift a finger.",
    icon: Sparkles,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicedApartmentsReasons() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        Why serviced apartments?
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Serviced apartments are a great alternative to staying in a hotel. It is
        ideal for business travelers, groups of friends, families and couples
        looking for independence and flexibility. Apart from more space, they
        give you a great base to enjoy the local life with all the amenities of
        the neighborhood on your doorstep.
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        8 Reasons to stay in serviced apartments over hotels
      </h2>

      {/* Mobile view */}
      <div className="md:hidden">
        <Accordion type="single" collapsible>
          {reasons.map((reason, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <span className="flex items-center">
                  <reason.icon className="w-5 h-5 mr-2" />
                  <span>{`${index + 1}. ${reason.title}`}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>{reason.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Tablet view */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full transform transition-transform duration-300 hover:scale-105"
          >
            <Card className="h-full hover:bg-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <reason.icon className="w-5 h-5 mr-2" />
                  <span>{`${index + 1}. ${reason.title}`}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>{reason.content}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:grid grid-cols-2 gap-8">
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full transform transition-transform duration-300 hover:scale-105"
            >
              <Card className="h-full hover:bg-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <reason.icon className="w-5 h-5 mr-2" />
                    <span>{`${index + 1}. ${reason.title}`}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>{reason.content}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
