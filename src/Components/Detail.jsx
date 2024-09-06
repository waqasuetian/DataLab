import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Details from "../Details";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { PiCompassToolBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";

const Detail = () => {
  const { caseid } = useParams();
  let [EachDetail, setEachDetail] = useState({});
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
    <div className="flex flex-col min-h-screen relative">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <Header />
      <div className="h-auto text-black flex flex-col md:py-16 py-12 mx-auto md:space-y-24 space-y-12 w-[90vw] md:w-[70vw]">
        <Link to={"/"}>
          <button className="flex justify-between items-center w-max md:gap-x-6 gap-x-4 rounded-full p-2 px-4 bg-blue-500 text-white fixed bottom-2 right-2 text-xs md:text-base">
            <IoHome className="h-4 w-4 md:h-6 md:w-6" />
            Home Page
          </button>
        </Link>

        <div className="flex justify-start">
          <div className="flex items-center justify-between flex-col md:flex-row gap-y-12">
            <div className="md:w-[50%] rotate-6 hover:rotate-0 transition-all ease-out p-2 rounded-md box h-auto relative">
              {EachDetail && EachDetail?.Image?.endsWith(".mp4") ? (
                <div className="w-full rounded-md object-contain">
                  <video
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/datalabb-db648.appspot.com/o/" +
                      encodeURIComponent(EachDetail.Image) +
                      "?alt=media&token=536a0c9e-8591-43a9-b798-d88a841e6ae6"
                    }
                    className="w-full rounded-md object-contain max-h-[40vh] bg-black"
                    alt={EachDetail.Title}
                    controls
                    autoPlay
                  />
                </div>
              ) : (
                <div className="w-full rounded-md h-[40vh] object-contain">
                  <img
                    src={EachDetail?.Image}
                    className="w-full rounded-md object-cover max-h-full h-auto bg-black"
                    loading="lazy"
                    alt={EachDetail?.Title}
                    style={{ height: "100%" }}
                  />
                </div>
              )}
            </div>

            <div
              className="text-black md:w-[40%] w-full flex flex-col justify-evenly space-y-5 h-full"
              style={{ height: "100%" }}
            >
              {" "}
              <h1 className="mb-2 text-xl md:text-xl lg:text-2l xl:text-4xl font-bold tracking-tight text-gray-700">
                {EachDetail?.Title}
              </h1>
              <p className="sm:text-base text-xs text-justify">
                {EachDetail?.Description}
              </p>
              <p className="sm:text-base text-xs text-justify">
                <span className="font-semibold ">Keywords: </span>
                {EachDetail?.Keywords}
              </p>
            </div>
          </div>
        </div>

        <section className="flex items-start justify-between flex-col md:flex-row space-y-12 md:space-y-0">
          <div className="space-y-12">
            <div className="flex items-center gap-x-5">
              <TbTriangleSquareCircleFilled className="md:h-24 md:w-24 w-12 h-12 text-black" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-black font-bold">
                Challenges
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Challenges?.map((item, Ind) => (
                <li className="text-black list-disc" key={Ind}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-12">
            <div className="flex items-center gap-x-5">
              <PiCompassToolBold className="md:h-24 md:w-24 w-12 h-12 text-black" />
              <h1 className="text-xl md:text-xl lg:text-2l xl:text-4xl text-black font-bold">
                Tools Used
              </h1>
            </div>
            <ul className="flex flex-col gap-y-6 md:ml-32 ml-6 self-end sm:text-base text-xs">
              {EachDetail?.Tools?.map((item, Ind) => (
                <li className="text-black list-disc" key={Ind}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
