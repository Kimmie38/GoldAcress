import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#d2d4d899] bg-cover bg-center text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black p-6 rounded-lg shadow-md h-80 w-full max-w-[400px] flex flex-col justify-center items-center text-center mx-auto sm:w-[90%]">
            <h3 className="text-4xl font-bold mb-2 flex items-center justify-center">
              Vision 
              <img src="/vision.svg" alt="Vision Icon" className="ml-2 w-8 h-8" />
            </h3>
            <p className="w-10/12 font-bold">
              Empowering every individual to learn in their unique way, fostering inclusive and accessible education for all.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md h-80 w-full max-w-[400px] flex flex-col justify-center items-center text-center mx-auto sm:w-[90%]">
            <h3 className="text-4xl font-bold mb-2 flex items-center justify-center">
              Mission 
              <img src="/mission.svg" alt="Vision Icon" className="ml-2 w-8 h-8" />
            </h3>
            <p className="w-10/12 font-bold">
              Transforming the lives of children and adults by making learning fun, interactive, and accessible, resulting in improved academic achievement and lifelong enthusiasm for education.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md h-80 w-full max-w-[400px] flex flex-col justify-center items-center text-center mx-auto sm:w-[90%]">
            <h3 className="text-4xl font-bold mb-2 flex items-center justify-center">
              Values 
              <img src="/value.svg" alt="Vision Icon" className="ml-2 w-8 h-8" />
            </h3>
            <p className="w-10/ font-bold">
              Nurturing holistic growth, empowering learners to excel in academics, moral character, essential life skills, and spiritual well-being.
            </p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md mt-8 mx-auto max-w-6xl h-32 flex flex-col justify-center items-center text-center sm:w-[90%]">
          <h3 className="text-4xl font-bold mb-2 flex items-center justify-center">
            Motto 
            <img src="/motto.svg" alt="Vision Icon" className="ml-2 w-8 h-8" />
          </h3>
          <p className="text-center font-bold w-full">Discover, Develop, Thrive, and Make a Difference</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;