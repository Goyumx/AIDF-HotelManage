import { Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import * as React from "react"

const testimonials = [
    {
      id: 1,
      name: "Miguel Santos",
      country: "Portugal",
      avatar: "M",
      rating: 5,
      text: "Hotel Haven helped me find a stunning resort in the Algarve. Best trip ever!"
    },
    {
      id: 2,
      name: "Emily Carter",
      country: "USA",
      avatar: "E",
      rating: 4,
      text: "Loved their hotel recommendations! Everything was smooth from booking to check-out."
    },
    {
      id: 3,
      name: "Noah Petersen",
      country: "Denmark",
      avatar: "N",
      rating: 5,
      text: "Their platform made it easy to find the perfect hotel for my vacation in Copenhagen."
    },
    {
      id: 4,
      name: "Valentina Russo",
      country: "Italy",
      avatar: "V",
      rating: 5,
      text: "Booking my honeymoon in Venice through Hotel Haven was the best decision ever!"
    },
    {
      id: 5,
      name: "Daniel Kim",
      country: "South Korea",
      avatar: "D",
      rating: 4,
      text: "Great service and seamless experience. Found an amazing stay in Seoul!"
    },
    {
      id: 6,
      name: "Hugo Blanc",
      country: "France",
      avatar: "H",
      rating: 5,
      text: "The luxury hotel selection is incredible! Got a fantastic deal for my Paris trip."
    },
    {
      id: 7,
      name: "Isla Henderson",
      country: "Scotland",
      avatar: "I",
      rating: 4,
      text: "I always book through Hotel Haven. Their exclusive deals are a game-changer!"
    },
    {
      id: 8,
      name: "Elias Berg",
      country: "Sweden",
      avatar: "E",
      rating: 5,
      text: "Their hotel reviews are trustworthy. Every recommendation has been spot-on!"
    },
    {
      id: 9,
      name: "Carlos Fernandez",
      country: "Argentina",
      avatar: "C",
      rating: 4,
      text: "Excellent support team! They helped me reschedule my hotel in Buenos Aires with ease."
    },
    {
      id: 10,
      name: "Aya Nakamura",
      country: "Japan",
      avatar: "A",
      rating: 5,
      text: "Quick and reliable! Found a cozy ryokan in Kyoto with amazing views."
    },
    {
      id: 11,
      name: "Oliver Müller",
      country: "Germany",
      avatar: "O",
      rating: 5,
      text: "Superb selection of hotels! My stay in Berlin was perfect thanks to Hotel Haven."
    },
    {
      id: 12,
      name: "Fatima Al-Hassan",
      country: "UAE",
      avatar: "F",
      rating: 4,
      text: "Loved the convenience! Booked a last-minute luxury resort in Dubai with no hassle."
    },
    {
      id: 13,
      name: "Zane Taupo",
      country: "New Zealand",
      avatar: "Z",
      rating: 5,
      text: "Easy-to-use platform! Found a dreamy beachfront villa in Fiji effortlessly."
    },
    {
      id: 14,
      name: "Amara Singh",
      country: "India",
      avatar: "A",
      rating: 4,
      text: "The best site for booking unique stays. Had an amazing trip to Jaipur!"
    },
    {
      id: 15,
      name: "Ethan Roberts",
      country: "Canada",
      avatar: "E",
      rating: 5,
      text: "I appreciate their verified reviews! Found a fantastic ski lodge in Whistler."
    }
];
  
const Testimonials = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-12">
          Hear from our satisfied customers about their experience with our products and services.
        </p>
        <Carousel
        plugins={[plugin.current]}
        className="w-full relative mt-6"
        opts={{
            loop: true,
        }}>

        <CarouselContent>
            {testimonials.map((testimonial,index) => (
            <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/3 xl:basis-1/3 pb-4 select-none"> 
              <div className="p-1  h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex gap-1 align-end">
					{Array.from({ length: 5 }).map((_, index) => (
						<Star key={index} size={16} fill={index < testimonial.rating ? "#FFE234" : "transparent"}strokeWidth={index < testimonial.rating ? "0" : "2"} className="text-[#FFE234]"/>
                ))}
				</div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
		<CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;