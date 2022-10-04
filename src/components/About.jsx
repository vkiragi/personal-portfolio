import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#173e43] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-emerald-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm: text-right text-4xl font-bold">
            <p>Hi, I'm Varun. Please take a look at some of my recent work.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I am well versed in fullstack
              development. What would you do if you had an experienced developer
              easily available?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
