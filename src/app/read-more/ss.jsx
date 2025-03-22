'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar'; // Adjusted path
import Footer from '@/components/Footer'; // Adjusted path
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ReadMore() {
  const ballRef = useRef(null);
  const floatingRef1 = useRef(null);
  const floatingRef2 = useRef(null);

  useEffect(() => {
    gsap.to(ballRef.current, {
      y: 40,
      scale: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut"
    });

    gsap.to([floatingRef1.current, floatingRef2.current], {
      y: 30,
      scale: 1.4,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white px-6 py-10 md:px-20 md:py-16 relative" style={{ backgroundImage: "url('/Brick-image.jpeg')" }}>
      {/* Navbar */}
      <Navbar />

      {/* Doodle Animations */}
      <div ref={ballRef} className="absolute top-10 left-10 w-16 h-16 bg-yellow-500 rounded-full shadow-lg"></div>
      <div ref={floatingRef1} className="absolute top-1/3 right-10 w-20 h-20 bg-blue-500 rounded-full shadow-lg"></div>
      <div ref={floatingRef2} className="absolute bottom-1/4 left-20 w-14 h-14 bg-red-500 rounded-full shadow-lg"></div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Gold Acres Learning Center
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Gold Acres, we believe every individual possesses hidden treasures waiting to be unearthed. 
          Our mission is to provide a nurturing environment where learners of all abilities discover, develop, 
          and showcase their unique strengths.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 flex-grow">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image 
            src="/Middle-image.jpg" 
            alt="Educational support" 
            width={400} 
            height={400} 
            className="w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-md transform rotate-3"
          />
        </div>
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-black">Our Philosophy</h2>
          <p className="text-gray-800 mt-2 leading-relaxed">
            We recognize each person learns differently and at their own pace. Our expert team:
          </p>
          <ul className="list-disc mt-4 pl-5 text-gray-800 font-medium">
            <li>Supports diverse learning styles and needs</li>
            <li>Reinforces school curricula through personalized instruction</li>
            <li>Provides therapy for children with special needs</li>
            <li>Fosters confidence through strength-based development</li>
            <li>Encourages community engagement and social growth</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10 flex-grow">
        <div className="flex justify-center">
          <Image 
            src="/IMG-32.jpg" 
            alt="Interactive learning" 
            width={400} 
            height={400} 
            className="w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-md transform -rotate-3"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-black">Empowering Potential</h2>
          <p className="text-gray-800 mt-2 leading-relaxed">
            At GoldAcres we:
          </p>
          <ul className="list-disc mt-4 pl-5 text-gray-800 font-medium">
            <li>Identify and cultivate individual talents</li>
            <li>Build resilience and self-esteem</li>
            <li>Offer adaptive skill training</li>
            <li>Create inclusive opportunities for socialization</li>
            <li>Collaborate with families and educators for holistic support</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10 flex-grow">
        <div className="flex justify-center">
          <Image 
            src="/IMG-26.jpg" 
            alt="Educational support" 
            width={400} 
            height={400} 
            className="w-[400px] h-[400px] bg-gray-300 rounded-lg shadow-md transform rotate-6"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-black">Unlocking Hidden Treasures</h2>
          <p className="text-gray-800 mt-2 leading-relaxed">
            Join us in uncovering the gold within every learner.
          </p>
          <p className="text-gray-800 mt-2 leading-relaxed">
            "Gold Acres Learning Center: Uncovering the hidden treasures within every individual."
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
}
