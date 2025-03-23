import Image from 'next/image';
import Sector from '@/components/Sector'; // Adjust path based on your project structure

export default function Section() {
  return (
    <div className="bg-blue-500 min-h-screen">
      {/* Hero Section */}
      <Sector />

      {/* Text Section */}
      <div className="text-center text-white max-w-3xl mx-auto py-16 px-4 md:px-16">
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
            <h2 className="text-2xl font-bold">It Affects Us All</h2>
          </div>
          <p className="text-gray-700 mt-2">
            It may not be on your regular driving route, but what is happening in the most crime-ridden neighborhoods
            in your area affects the entire community.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/pen.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl font-bold">Neighborhoods Without Hope</h2>
          </div>
          <p className="text-gray-700 mt-2">
            These are neighborhoods where repeated efforts to bring change all seem to become another band-aid.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/education.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl font-bold">The Cycle Repeats Itself</h2>
          </div>
          <p className="text-gray-700 mt-2">
            Low educational outcomes, violence in the home, crime, and poor work prospects all pile up, perpetuating a
            never-ending cycle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <Image src="/mission.png" width={40} height={40} alt="Icon" />
            <h2 className="text-2xl font-bold">The Impact On Children</h2>
          </div>
          <p className="text-gray-700 mt-2">
            The lasting effects of growing up in these environments guarantee that the cycle will continue.
          </p>
        </div>
      </div>
    </div>
  );
}
