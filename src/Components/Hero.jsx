import React, { useState } from "react";
import { TypewriterEffectSmooth } from "../UI/TypeWriter";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#F5F7F8] text-white overflow-hidden">
      {/* Hero Text Section */}
      <div className="max-w-4xl pb-4 md:pt-16 text-center">
        <p className="text-black text-2xl md:text-4xl lg:text-6xl font-bold leading-snug animate-fadeIn">
          Unveiling the Power of AI, Data Science & Machine Learning
        </p>

        <p className="text-black md:text-lg lg:text-xl mt-6 font-light leading-relaxed px-6 md:px-24 lg:py-8 animate-fadeIn">
          Dive into our vibrant case studies and witness the power of technology
          as it collaborates with our clients to achieve their boldest digital
          innovation dreams. Explore how our projects have revolutionized
          industries, empowered businesses, and left a lasting impact.
        </p>

        {/* Typewriter Effect */}
        <TypewriterEffectSmoothDemo />

        {/* Tags Section for Small Screens */}
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
    { text: "Artificial Intelligence |", className: "text-yellow-500" },
    { text: "Machine Learning |", className: "text-blue-500" },
    { text: "Deep Learning |", className: "text-purple-500" },
    { text: "Gen AI", className: "text-green-500" },
  ];

  return (
    <div className="flex overflow-x-scroll w-full my-8 no-scrollbar">
      <div className="flex animate-scroll space-x-6">
        {words.map((word, index) => (
          <MovingWord key={index} text={word.text} className={word.className} />
        ))}
      </div>
    </div>
  );
}

// MovingWord component to handle word movement and hover effect
function MovingWord({ text, className }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`text-base md:text-2xl font-semibold transition-transform duration-300 ${className} ${
        isPaused ? "scale-125" : "scale-100"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        whiteSpace: "nowrap",
        animationPlayState: isPaused ? "paused" : "running",
      }}
    >
      {text}
    </div>
  );
}

// Tailwind CSS animation for moving words
// Add this to your Tailwind CSS config or global CSS file
// You can adjust the timing for mobile screens if necessary

// Example:
// @keyframes scroll {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
// .animate-scroll {
//   animation: scroll 10s linear infinite;
// }

// Tag Component for Reusability
function Tag({ label, bgColor }) {
  return (
    <p
      className={`p-2 ${bgColor} rounded-full text-xs md:text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
    >
      {label}
    </p>
  );
}
