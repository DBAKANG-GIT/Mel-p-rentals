import React from 'react'

const ServicedApartments: React.FC = () => {
  return (
    <div className="bg-[#FFF5EB] min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gradient-to-b from-[#FFF5EB] to-white h-16" />
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <h2 className="text-[#333333] text-2xl sm:text-3xl font-normal text-center mb-6">
            Why serviced apartments?
          </h2>
          <div className="text-[#6C6C6C] text-base sm:text-lg space-y-4">
            <p>
              Serviced apartments are a great alternative to staying in a hotel. It is
              an ideal for business travelers, groups of friends, families and
              couples looking for independence and flexibility.
            </p>
            <p>
              Apart from more space, they give you a great base to enjoy the
              local life with all the amenities of the neighborhood on your doorstep.
            </p>
            <p>
              The serviced part of serviced apartments means that your apartment
              is fully serviced, in that it's ready to move into and start living! All the utilities
              are switched on and included in the rate, bedroom and bathroom linen is
              provided, the kitchen is fully equipped and ready to start cooking, the cushions
              are plumped, it's sparkling clean and everything is in full working order.
            </p>
            <p>
              During your stay, the housekeeping team will come in once a week
              and clean all the rooms, change the bedroom and bathroom linen
              and of course, if there are any maintenance issues during your stay
              just let us know and we will get them fixed as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicedApartments

