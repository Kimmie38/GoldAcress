import Image from "next/image";
import Link from "next/link";
import SwiperSlider from '@/components/SwiperSlider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-300 via-blue-200 to-blue-400 bg-opacity-80 relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full min-h-screen  flex items-center justify-center text-black bg-gradient-to-br from-purple-300 via-blue-200 to-blue-400 bg-opacity-80 relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/IMG-17.jpg"
            alt="Background Image"
            fill
            className="object-cover brightness-30"
          />
        </div>
        <div className="relative z-10 w-full lg:w-1/3 mt-6 lg:mt-0 px-4 sm:px-6 md:px-8">
          <SwiperSlider />
        </div>
      </section>
    
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center shadow-lg px-6 py-12 max-w-6xl mx-auto text-black bg-gradient-to-br from-purple-200 via-blue-100 to-blue-300 bg-opacity-70 ">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/Abbt.jpeg" width={400} height={300} alt="About Image" className="shadow-lg rounded-lg w-full max-w-sm md:max-w-md" />
        </div>
        <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">The Birth Of GoldAcres:</h2>
          <p className="mt-4 pr-4 md:pr-9 text-justify">
          In 2023, a chance encounter with a 22year old young girl with special needs re-ignited a long vision.
            I saw an opportunity to make a difference by providing personalized attention and patient instruction. From the fundamentals of fine motor skills
            cutting paper, using scissors, tying shoelaces, and buttoning shirts to encouraging gross motor skills, our journey began.
            Soon, I was also tutoring a boy suspected to have dyslexia, and adults seeking basic reading and writing skills started reaching out. 
            As demand grew, a pressing need emerged: a dedicated space for learners to gather and continue their education after school, rather than dispersing to individual homes.
          </p>
        </div>
      </section>

      {/* Floating Home Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition">
            Home
          </button>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
