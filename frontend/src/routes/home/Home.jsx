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
      <div className="flex flex-col items-center justify-center min-h-screen pb-20 ">
        <NavBar />
        <Hero />
        <Features />
        <Testimonial />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default Home;
