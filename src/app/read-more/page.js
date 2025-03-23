'use client';

import Image from 'next/image';
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function ReadMore() {
  useEffect(() => {
    gsap.to('.floating', {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-blue-300 bg-opacity-70 relative">
      {/* Navbar */}
      <Navbar />

      {/* Stickers with floating effect and responsive positioning */}
      <img src="/stickers/education.png" alt="Education" className="absolute top-20 left-4 md:top-1/11 md:left-10 w-16 h-16 md:w-24 md:h-24 floating hidden md:block" />
      <img src="/stickers/stationery.png" alt="Stationery" className="absolute bottom-1/4 right-4 md:bottom-1/3 md:right-10 w-14 h-14 md:w-20 md:h-20 floating hidden md:block" />
      <img src="/stickers/pen.png" alt="Pen" className="absolute bottom-1/6 left-10 md:bottom-1/4 md:left-20 w-12 h-12 md:w-16 md:h-16 floating hidden md:block" />
      <img src="/stickers/textbook.png" alt="Textbook" className="hidden md:block absolute bottom-10 right-32 w-24 h-24 floating" />
      <img src="/stickers/medal.png" alt="Medal" className="absolute top-1/4 right-4 md:top-1/3 md:right-1/14 w-14 h-14 md:w-20 md:h-20 floating hidden md:block" />

      {/* Add padding-top to prevent navbar overlap */}
      <main className="flex-grow px-6 py-10 md:px-20 md:py-16 pt-24 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Gold Acres Learning Center
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            We're a flexible and supportive community that provides basic literacy skills and an after-school program to empower local
            children. Our personalized learning approach fosters confidence and creativity in each child, and ofcourse, fun is a 
            vital part of the learning process! We believe in learning through play.
          </p>
          <Link 
            href="/more"
            className="mt-6 inline-block bg-blue-600 text-white text-2xl px-8 py-2 rounded-lg hover:bg-blue-700 transition fixed bottom-10 right-10 animate-bounce"
          >
            Learn More
          </Link>
        </div>

        {/* First Content Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="/Middle-image.jpg" 
              alt="Educational support" 
              width={350} 
              height={350} 
              className="w-[350px] h-[350px] bg-gray-300 rounded-lg shadow-md transform rotate-3"
            />
          </div>
          {/* Text */}
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

        {/* Second Content Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="/IMG-32.jpg" 
              alt="Interactive learning" 
              width={350} 
              height={350} 
              className="w-[350px] h-[350px] bg-gray-300 rounded-lg shadow-md transform -rotate-3"
            />
          </div>
          {/* Text */}
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
