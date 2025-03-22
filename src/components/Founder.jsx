import React from "react";

const Founder = () => {
  return (
    <section className="bg-[url('/Brick-image.jpeg')] bg-cover bg-center text-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">Founder</h2>
          <p className="mb-4 text-lg">
            I'm Joyce Pam, a dedicated and passionate tutor with a heartfelt commitment 
            to empowering children and adults to reach their full potential. I believe every 
            individual learns uniquely and has inherent strengths. My mission is to foster 
            a supportive environment where learners can develop their skills, confidence, 
            and talents at their own pace.
          </p>
          <p className="mb-4 text-lg">
            As a certified teacher with 14+ years of experience, I've tutored students 
            from primary to higher levels in English, Science, and other elementary school subjects. 
            My passion lies in adapting learning strategies to meet individual needs, fostering confidence 
            and academic success.
          </p>
          <p className="text-lg">
            Outside tutoring, I enjoy reading, running, and volunteering in community education initiatives. 
            I earned a BA in History and International Studies, PGCE, and Masters in Education. 
            I specialize in language learning.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/Her-image.jpeg"
            alt="Founder"
            className="w-[400px] h-auto md:h-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;
