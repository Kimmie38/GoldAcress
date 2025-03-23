"use client"; // ← Add this at the top

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const images = [
  "/IMG-1.jpg", "/IMG-2.jpg", "/IMG-3.jpg", "/IMG-4.jpg",
  "/IMG-5.jpg", "/IMG-6.jpg", "/IMG-7.jpg", "/IMG-8.jpg",
  "/IMG-9.jpg", "/IMG-10.jpg", "/IMG-11.jpg", "/IMG-45.jpg",
  "/IMG-13.jpg", "/IMG-14.jpg", "/IMG-15.jpg", "/IMG-16.jpg",
  "/IMG-17.jpg", "/IMG-24.jpg", "/IMG-40.jpg", "/IMG-20.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100" style={{ backgroundImage: "url('/Brick-image.jpeg')" }}>
      <Navbar />
      <h1 className="text-5xl font-bold text-center text-gray-800 my-18">Gallery🌈</h1>

      {/* Main Content Wrapper */}
      <div className="flex-grow">
        {/* Image Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="w-full h-auto overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-blue-300 via-blue-100 to-purple-300 bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer Sticks to Bottom */}
      <Footer />
    </div>
  );
}
