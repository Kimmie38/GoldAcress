"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-300 via-blue-200 to-blue-400 bg-opacity-80 ">
      {/* Navbar with reduced height */}
      <div className="h-12">
        <Navbar />
      </div>

      {/* Contact Section */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">BACK</span>
        </button>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-200 shadow-lg rounded-xl p-6 max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>

          {/* Email */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaEnvelope className="text-blue-600 text-lg" />
            <a
              href="mailto:info@goldacres.com"
              className="text-gray-700 hover:text-blue-600 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@goldacres.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaPhone className="text-green-600 text-lg" />
            <a href="tel:+2348068517911" className="text-gray-700 hover:text-green-600 text-sm">
              +234 806 851 7911
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://facebook.com/goldacres" target="_blank" className="text-blue-600 text-xl hover:scale-110">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com/goldacres" target="_blank" className="text-pink-500 text-xl hover:scale-110">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer with reduced height */}
      <div className="h-16">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
