import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <style>
        {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                    *{
                        font-family: "Poppins", sans-serif;
                    }`}
      </style>
      <section className="flex flex-col items-center  px-4 py-16">
        <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5  rounded-full bg-white/50 border border-white">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </div>
          <p className="text-sm text-black/60">
            Join 12,450+ brands growing with us
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
          Create ATS-Friendly
          <br />{" "}
          <span className=" bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">
            {" "}
            Resumes{" "}
          </span>{" "}
          That Get You Hired
        </h1>
        <p className="text-sm text-gray-600 text-center max-w-[630px] mt-4">
          Create professional resumes with smart layouts, real-time editing, and
          modern design.
        </p>

        <div className="flex gap-3 mt-10">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer"
          >
            Get Started Now
          </button>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="bg-white hover:bg-white/5 border border-violet-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer"
          >
            Book a demo
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
