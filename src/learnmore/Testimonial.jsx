import Image from "next/image";

const Testimonials = () => {
    return (
      <section className="bg-gradient-to-br from-blue-300 via-blue-100 to-purple-300 bg-opacity-70 py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center text-black mb-12">A Bit of what GoldAcres has given</h2>
  
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
          <p className="mt-4 text-black font-semibold">-Mafengs Story</p>
            <p className="text-lg text-gray-700">
            
                    "My grandson Mafeng has shown great improvement in his interest for reading,he reads now with confidence and uses more words.
                          He is always excited about going to this after school classes."
            </p>
            <p className="mt-4 text-black font-semibold">- Mrs Deborah Dung-</p>
            <p className="mt-4 text-black font-semibold">- Parent of a Student</p>
          </div>
  
          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">

          <p className="mt-4 text-black font-semibold">-Micah & Asher</p>
            <p className="text-lg text-gray-700">
            "Gold Acres provided my kids with the confidence to face the challenge to read....
            they made them feel like learning to read was fun rather than a chore. Gold Acres teaches difficult stuff in the most understandable way, 
            their patience and passion is second to none.... Thank you ❤️"
            </p>
            <p className="mt-4 text-black font-semibold">- Parent of a Student</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  