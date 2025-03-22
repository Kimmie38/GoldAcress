// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "/IMG-1.jpg", "/IMG-2.jpg", "/IMG-3.jpg", "/IMG-4.jpg",
  "/IMG-5.jpg", "/IMG-6.jpg", "/IMG-7.jpg", "/IMG-8.jpg",
  "/IMG-9.jpg", "/IMG-10.jpg", "/IMG-11.jpg", "/IMG-12.jpg",
  "/IMG-13.jpg", "/IMG-14.jpg", "/IMG-15.jpg", "/IMG-16.jpg",
  "/IMG-17.jpg", "/IMG-18.jpg", "/IMG-19.jpg", "/IMG-20.jpg",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 py-12"style={{ backgroundImage: "url('/Brick-image.jpeg')" }}>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Gallery</h1>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {images.map((image, index) => (
    <div key={index} className="w-full h-auto overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={`Gallery image ${index + 1}`} 
        className="w-full h-auto object-cover"
      />
    </div>
  ))}
</div>
      <Footer />
    </div>
  );
}
