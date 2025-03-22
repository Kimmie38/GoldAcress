import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="relative bg-cover bg-center p-6 md:p-12 flex items-center" style={{ backgroundImage: "url('/Brick-image.jpeg')" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center  bg-opacity-80 p-8 md:p-10 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <Image 
            src="/Welcome-image.jpg" 
            alt="Welcome" 
            width={500} 
            height={350} 
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-12 md:ml-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Welcome to Gold Acres Learning Center</h2>
          <p className="mb-4 text-lg  text-amber-900">
            At Gold Acres, we believe every individual possesses hidden treasures waiting to be unearthed. Our mission is to provide a nurturing environment where learners of all abilities discover, develop, and showcase their unique strengths.
          </p>
          <p className="mb-4 text-amber-900 text-lg">
            We foster creativity, critical thinking, and a passion for lifelong learning. Through engaging activities and personalized guidance, we empower students to shine in their own unique ways.
          </p>
        </div>
      </div>
      <div className="absolute  top-1/8 right-1/12 transform -translate-x-1/2 animate-bounce">
              <Image 
                src="/stickers/practice.png"
                alt="Scroll Down"
                width={100}
                height={100}
              />
            </div>

            <div className="absolute bottom-5 left-1/19 transform -translate-x-1/2 animate-bounce">
                    <Image 
                      src="/stickers/alumni.png"
                      alt="Scroll Down"
                      width={80}
                      height={80}
                    />
                  </div>
    </section>
  );
}
