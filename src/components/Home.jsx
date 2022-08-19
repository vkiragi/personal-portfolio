import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#173e43]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-emerald-500">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Varun Kiragi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a software developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          I'm a software developer with a passion for frontend and web
          development.
        </p>
        <div>
          <button className="text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-emerald-500 hover:border-emerald-500 hover:duration-300">
            <Link to="work" spy={true} smooth={true} duration={500}>
              My Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
