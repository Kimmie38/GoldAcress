import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from  "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import WhyChooseUs from  "../components/WhyChooseUs";
import Founder from "../components/Founder"
import Mini from "../components/Mini"
import Footer from "../components/Footer"
// import About from "@/components/About";
// import Courses from "@/components/Courses";
// import ChooseUs from "@/components/ChooseUs";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>GoldAcres - Home</title>
        <meta name="description" content="Welcome to GoldAcres Learning Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>    
      <Navbar />
      <Hero />
      <div>
      {/* Hero Content */}
      <WelcomeSection />
    </div>
    <div>
      {/* Other components or content */}
      <WhyChooseUs />
    </div>
    <div>
      {/* Other components or content */}
      <Founder />
    </div>
    <div>
      {/* Other components or content */}
      <Mini />
    </div>
    <div>
      {/* Other sections of your page */}
      
      <Footer />
    </div>
      {/* <About />
      <Courses />
      <ChooseUs />
      <Contact />
      <Footer /> */}
    </>
  );
}
