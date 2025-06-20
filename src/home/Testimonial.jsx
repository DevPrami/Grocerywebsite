import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional
import 'swiper/css/pagination'; // optional

import { Navigation,  Autoplay , Pagination } from 'swiper/modules'; // for modules


export default function Testimonial() {
  const test = [
    {
      name: "Aarav Mehta",
      designation: "CEO, Mehta Enterprises",
      message:
        "The team was amazing! Their creativity and professionalism made our event unforgettable.",
      rating: 5,
       image: "https://example.com/images/alice.jpg",
    },
    {
      name: "Priya Sharma",
      designation: "Marketing Head, GlowUp",
      message: "Their service exceeded all expectations. Highly recommended!",
      rating: 4.5,
    },
    {
      name: "Rohit Verma",
      designation: "Founder, CodeCraft",
      message:
        "They truly care about their clients and it shows in every detail.",
      rating: 5,
    },
    {
      name: "Sanya Kapoor",
      designation: "Event Planner",
      message:
        "Working with them was seamless and enjoyable from start to finish!",
      rating: 4,
    },
    {
      name: "suyash",
      designation: "Event Planner",
      message:
        "Working with them was seamless and enjoyable from start to finish!",
      rating: 4,
    },
    {
      name: "Pramia",
      designation: "Event Planner",
      message:
        "Working with them was seamless and enjoyable from start to finish!",
      rating: 4,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
        <div >
          <Swiper
        modules={[ Autoplay]}
        
        
        spaceBetween={20}
        slidesPerView={4}
        
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="py-4"

          >
          {test.map((testimonial, index) => (
            <SwiperSlide>
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">“{testimonial.message}”</p>
              <div className="text-yellow-500 text-sm">
                {"⭐".repeat(Math.floor(testimonial.rating)) +
                  (testimonial.rating % 1 !== 0 ? "⭐½" : "")}
              </div>

            </div>
            </SwiperSlide>
            
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
