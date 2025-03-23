import Image from "next/image";

const Sector = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/IMG-3.jpg"
          alt="Children reading books"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative text-white text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          GoldAcres Love
        </h1>
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

export default Sector;
