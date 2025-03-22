import React from "react";

const Mini = () => {
  return (
    <section className="bg-[#d2d4d899]  py-12 px-4 flex justify-center">
      <div className="max-w-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-2 gap-y-8 gap-x-30 justify-center">
          {/* Image 1 */}
          <div className="flex justify-center">
            <img
              src="/IMG-14.jpg"
              alt="Image 1"
              className="w-64 aspect-square object-cover rounded-full shadow-md"
            />
          </div>
          {/* Image 2 */}
          <div className="flex justify-center">
            <img
              src="/IMG-7.jpg"
              alt="Image 2"
              className="w-64 aspect-square object-cover rounded-full shadow-md"
            />
          </div>
          {/* Image 3 */}
          <div className="flex justify-center">
            <img
              src="/IMG-11.jpg"
              alt="Image 3"
              className="w-64 aspect-square object-cover rounded-full shadow-md"
            />
          </div>
          {/* Image 4 */}
          <div className="flex justify-center">
            <img
              src="/IMG-26.jpg"
              alt="Image 4"
              className="w-64 aspect-square object-cover rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mini;
