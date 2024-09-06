import React from "react";
import { TypewriterEffectSmooth } from "../UI/TypeWriter";

const Hero = () => {
  return (
    <div className="md:h-max h-[60vh] flex flex-col items-center justify-center relative overflow-hidden md:border-b-[2px] border-b-[1px] border-black border-dashed">
      <div className="max-w-4xl pb-2 md:pt-24">
        <p className="text-lg md:text-2xl lg:text-5xl text-gray-700 font-bold inter-var text-center px-2">
          Unveiling the Power of AI, Data Science & Machine Learning
        </p>
        <p className="text-xs md:text-md lg:text-lg mt-4 text-black font-normal inter-var text-center md:px-24 px-8 lg:py-8">
          Dive into our Vibrant case studies and witness the power of technology as it
          collaborates with our clients to achieve their wildest digital
          innovation dreams. Explore how our projects have revolutionized
          industries, empowered businesses, and left a lasting impact on the
          world.
        </p>

        <TypewriterEffectSmoothDemo />

        <div className="py-5 flex items-center justify-center w-[90vw] mx-auto flex-wrap gap-x-2 space-y-2 sm:hidden">
          <p className="p-2 bg-red-500 rounded-full w-max text-xs text-white">
            Data Science
          </p>
          <p className="p-2 bg-yellow-500 rounded-full w-max text-xs text-white">
            Artificial Intelligence
          </p>
          <p className="p-2 bg-blue-500 rounded-full w-max text-xs text-white">
            Machine Learning
          </p>

          <p className="p-2 bg-purple-500 rounded-full w-max text-xs text-white">
            Deep Learning
          </p>
          <p className="p-2 bg-green-500 rounded-full w-max text-xs text-white">
            Gen AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Data Science |",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: "Artificial Intelligence |",
      className: "text-yellow-500 dark:text-yellow-500",
    },
    {
      text: "Machine Learning | ",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Deep Learning |",
      className: "text-purple-500 dark:text-purple-500",
    },
    {
      text: "Gen AI",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="md:flex flex-col items-center justify-center lg:my-12 hidden">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
