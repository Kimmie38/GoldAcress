"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative">
    {/* // <div className="absolute inset-0 z-0">
    //   <Image
    //     src="/Middle-image.jpg"
    //     alt="Background Image"
    //       fill
    //       className="object-cover brightness-50"
    //   />
    // </div> */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full h-full relative z-10 mr-7"
      >
        <SwiperSlide>
          
        <Image src="/IMG-1.jpg" 
        fill style={{ objectFit: "cover" }}
         alt="Description" />;
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/IMG-2.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src="/IMG-3.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            src="/IMG-4.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src="/IMG-5.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image
            src="/IMG-6.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image
            src="/IMG-7.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            src="/IMG-8.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/IMG-29.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/IMG-32.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src="/IMG-17.jpg"
            fill style={{ objectFit: "cover" }}
            alt="Description" />;
        </SwiperSlide> */}
      </Swiper>
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white p-3 rounded-full hover:bg-black transition"
      >
        &#10094;
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white p-3 rounded-full hover:bg-black transition"
      >
        &#10095;
      </button>
    </section>
    
  );
};

export default HeroSection;