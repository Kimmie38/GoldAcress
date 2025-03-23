import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Sector from '@/learnmore/Sector'; 
import Testimonial from '@/learnmore/Testimonial'; // Adjust path if needed
import Footer from "@/components/Footer"

export default function Section() {
  return (
    <div className="bg-gradient-to-br from-purple-200 via-blue-100 to-blue-300 bg-opacity-70 min-h-screen">
      {/* Hero Section */}
      <Navbar />
      <Sector />

      {/* Text Section */}
      <div className="text-center text-black max-w-3xl mx-auto py-16 px-4 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold">Breaking The Barriers</h1>
        <p className="text-lg mt-4">
          Unfortunately, numerous kids in my area face significant reading challenges, performing below grade level,
          which highlights the need for improved educational standards.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-16 pb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/values.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl text-black font-bold">GoldAcres Mission</h2>
          </div>
          <p className="text-black mt-2">
            My goal is to create a supportive and inclusive environment where learners
            can develop their skills, confidence, and talents at their own pace.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/pen.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl text-black font-bold">Experience</h2>
          </div>
          <p className="text-black mt-2">
            With 14+ years of experience as a certified teacher, I've had the privilege of tutoring students from primary to higher
            levels in English, Science, and other elementary school subjects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/education.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl text-black font-bold">Approach</h2>
          </div>
          <p className="text-black mt-2">
            Differentiated instruction, personalized learning, and a growth mindset drive our student-centered approach, 
            ensuring that every learner receives the support they need to thrive.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/mission.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl text-black font-bold">Impacts & Aim</h2>
          </div>
          <p className="text-black mt-2">
            At GoldAcres, we strive to build a love of reading by creating a free and welcoming atmosphere—not just for children, but for learners of all ages. 
            Through engaging programs, accessible books, and community-driven initiatives.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonial />
      <Footer />
    </div>
  );
}
