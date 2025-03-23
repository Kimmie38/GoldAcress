export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src="/logogo.svg" alt="GoldAcres Logo" className="h-12" />
        </div>

        {/* Location Section */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>Ladura Du, Jos South</p>
          <p>Plateau State, Nigeria</p>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>goldacres@gmail.com</p>
          <p>+234 806 851 7911</p>
        </div>
      </div>
      <div className="text-center text-1xl mt-4 opacity-70 font-bold">
      Motto: Only leave Discover, Develop,Thrive
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4 opacity-70">
        &copy; 2024 GoldAcres. All rights reserved.
      </div>
    </footer>
  );
}
