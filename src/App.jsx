import CaseStudies from "./Components/CaseStudies";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { FaArrowUpLong } from "react-icons/fa6";

import { useEffect, useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <section className="flex flex-col relative">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <button
        style={{ display: visible ? "inline" : "none" }}
        onClick={() => {
          ScrollToTop();
        }}
        className="flex cursor-pointer justify-between items-center w-max md:gap-x-6 gap-x-4 rounded-full p-2 bg-black text-green-300 fixed bottom-2 right-2 text-xs md:text-base z-[1000]"
      >
        <FaArrowUpLong className="h-4 w-4 md:h-4 md:w-4" />
      </button>

      <Header />
      <Hero />
      <CaseStudies />
    </section>
  );
}
