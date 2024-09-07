import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Details from "../Details";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { PiCompassToolBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";

const Detail = () => {
  const { caseid } = useParams();
  const [EachDetail, setEachDetail] = useState({});

  useEffect(() => {
    Details.map((item) => {
      if (item.Title === caseid) {
        setEachDetail(item);
      }
    });
  }, [caseid]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-gray-50">
      {/* Background Effects */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
      <div className="bg-[#dbd7fb] absolute top-[1rem] left-[-25rem] -z-10 h-[30rem] w-[40rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]"></div>

      <Header />

      {/* Case Study Details Section */}
      <div className="container mx-auto text-black flex flex-col py-12 md:py-16 px-4 md:px-8 w-full">
        {/* Back to Home Button */}
        <Link to={"/"}>
          <button className="flex items-center gap-x-2 md:gap-x-4 p-2 px-4 bg-blue-500 text-white rounded-full fixed bottom-4 right-4 text-xs md:text-base shadow-lg hover:bg-blue-600 transition duration-300">
            <IoHome className="h-5 w-5 md:h-6 md:w-6" />
            Home Page
          </button>
        </Link>

        {/* Detail Section */}
        <div className="flex flex-col md:flex-row items-start gap-y-8 md:gap-x-12">
          {/* Media (Image/Video) */}
          <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {EachDetail?.Image?.endsWith(".mp4") ? (
              <video
                src={
                  "https://firebasestorage.googleapis.com/v0/b/datalabb-db648.appspot.com/o/" +
                  encodeURIComponent(EachDetail.Image) +
                  "?alt=media&token=536a0c9e-8591-43a9-b798-d88a841e6ae6"
                }
                className="w-full h-auto rounded-md object-cover bg-black"
                controls
                autoPlay
              />
            ) : (
              <img
                src={EachDetail?.Image}
                className="w-full h-auto object-cover bg-black rounded-md"
                alt={EachDetail?.Title}
              />
            )}
          </div>

          {/* Textual Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-between space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800">
              {EachDetail?.Title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {EachDetail?.Description}
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              <span className="font-semibold">Keywords: </span>
              {EachDetail?.Keywords}
            </p>
          </div>
        </div>

        {/* Challenges and Tools Section */}
        <section className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 mt-16">
          {/* Challenges */}
          <div className="space-y-8">
            <div className="flex items-center gap-x-4">
              <TbTriangleSquareCircleFilled className="md:h-12 md:w-12 w-8 h-8 text-blue-500" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                Challenges
              </h2>
            </div>
            <ul className="flex flex-col space-y-4 pl-6 list-disc text-gray-600 text-sm md:text-base">
              {EachDetail?.Challenges?.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Tools Used */}
          <div className="space-y-8">
            <div className="flex items-center gap-x-4">
              <PiCompassToolBold className="md:h-12 md:w-12 w-8 h-8 text-blue-500" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                Tools Used
              </h2>
            </div>
            <ul className="flex flex-col space-y-4 pl-6 list-disc text-gray-600 text-sm md:text-base">
              {EachDetail?.Tools?.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;

