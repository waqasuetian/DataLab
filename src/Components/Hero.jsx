import React from "react";
import { TypewriterEffectSmooth } from "../UI/TypeWriter";

const Hero = () => {
  return (
    <div className="md:h-max h-[60vh] flex flex-col items-center justify-center relative overflow-hidden md:border-b-[2px] border-b-[1px] border-black border-dashed bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Hero Text Section */}
      <div className="max-w-4xl pb-4 md:pt-16 text-center">
        <p className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-snug px-4 animate-fadeIn">
          Unveiling the Power of AI, Data Science & Machine Learning
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-6 text-gray-600 font-light px-6 md:px-24 lg:py-8 leading-relaxed animate-fadeIn">
          Dive into our vibrant case studies and witness the power of technology
          as it collaborates with our clients to achieve their boldest digital
          innovation dreams. Explore how our projects have revolutionized
          industries, empowered businesses, and left a lasting impact on the world.
        </p>

        {/* Typewriter Effect */}
        <TypewriterEffectSmoothDemo />

        {/* Tags Section (Visible on Small Screens) */}
        <div className="py-5 flex items-center justify-center w-full mx-auto flex-wrap gap-x-2 gap-y-2 sm:hidden">
          <Tag label="Data Science" bgColor="bg-red-500" />
          <Tag label="Artificial Intelligence" bgColor="bg-yellow-500" />
          <Tag label="Machine Learning" bgColor="bg-blue-500" />
          <Tag label="Deep Learning" bgColor="bg-purple-500" />
          <Tag label="Gen AI" bgColor="bg-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Data Science |", className: "text-red-500 dark:text-red-500" },
    {
      text: "Artificial Intelligence |",
      className: "text-yellow-500 dark:text-yellow-500",
    },
    {
      text: "Machine Learning |",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Deep Learning |",
      className: "text-purple-500 dark:text-purple-500",
    },
    { text: "Gen AI", className: "text-green-500 dark:text-green-500" },
  ];

  return (
    <div className="hidden md:flex flex-col items-center justify-center my-8">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

// Tag Component for Reusability
function Tag({ label, bgColor }) {
  return (
    <p
      className={`p-2 ${bgColor} rounded-full text-xs md:text-sm text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
    >
      {label}
    </p>
  );
}

