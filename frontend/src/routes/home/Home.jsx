import React from "react";
import NavBar from "../../components/home/NavBar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import GetStarted from "../../components/home/GetStarted";
import Testimonial from "../../components/home/Testimonial";
import Footer from "../../components/home/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col  items-center justify-center min-h-screen p-5 bg-gradient-to-b from-[#f7f9ff] via-[#fffbee] to-[#f7f9ff] h-full ">
        <NavBar />
        <Hero />
        <Features />
       
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default Home;
