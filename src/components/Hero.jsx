import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-black/50">
      <div className="absolute inset-0">
        <Image
          src="/IMG-17.jpg"
          alt="Children reading books"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-60"
        />
      </div>

      <div className="relative text-white text-left px-6 md:px-12 max-w-3xl ml-8">
      <h1 className="text-6xl md:text-6xl font-bold leading-tight mb-4 w-full text-center">
    <span className="block">Give A Child</span>
    <span className="block">The Gift</span>
    <span className="block">Of Learning</span>
    </h1>

        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Transforming lives one step at a time
        </p>
        <Link 
          href="/read-more"
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </Link>
      </div>

      {/* Down Arrow Sticker */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Image 
          src="/stickers/down-arrow.png"
          alt="Scroll Down"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default Hero;
