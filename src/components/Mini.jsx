"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const Mini = () => {
  useEffect(() => {
    gsap.to(".floating", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-blue-300 bg-opacity-70 py-16 px-6 flex justify-center relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-white rounded-full opacity-50 floating"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full opacity-50 floating"></div>

      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          A Bit Of Us
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          {/* We provide exceptional education with a nurturing approach, ensuring 
          each student flourishes in a supportive environment. */}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {/* Image 1 */}
          <div className="flex justify-center">
            <img
              src="/IMG-14.jpg"
              alt="Image 1"
              className="w-64 aspect-square object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl floating"
            />
          </div>
          {/* Image 2 */}
          <div className="flex justify-center">
            <img
              src="/IMG-7.jpg"
              alt="Image 2"
              className="w-64 aspect-square object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl floating"
            />
          </div>
          {/* Image 3 */}
          <div className="flex justify-center">
            <img
              src="/IMG-11.jpg"
              alt="Image 3"
              className="w-64 aspect-square object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl floating"
            />
          </div>
          {/* Image 4 */}
          <div className="flex justify-center">
            <img
              src="/IMG-26.jpg"
              alt="Image 4"
              className="w-64 aspect-square object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mini;
