import React, { useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Details from "../Details";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  let navigate = useNavigate();
  const RouteChange = (ID) => {
    navigate("/case-studies/" + ID + "/details");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[50rem] md:py-24 w-full dark:bg-dot-black/[0.3] bg-dot-black/[0.3] relative flex gap-y-5 flex-col items-center justify-center">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[91.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>

      <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[91.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <div className="text-black relative text-center py-12 flex gap-y-12 flex-col">
        <h1 className="text-gray-700 font-bold text-lg md:text-2xl lg:text-5xl justify-self-start relative">
          Case Studies
        </h1>

        <p className="text-xs md:text-md lg:text-lg text-center px-4">
          Witness The Impact From The Successful Implementation Of Our Projects.
        </p>
      </div>

      {Details.map((EachDetail, Index) => {
        return (
          <section>
            <div
              key={Index}
              className={`flex flex-col md:flex-row md:justify-evenly md:space-x-5 space-y-5 text-justify h-auto relative p-4`}
            >
              {EachDetail?.Image?.endsWith(".mp4") ? (
                <div className="md:w-[40%] rounded-md md:max-h-[40vh] box">
                  <video
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/datalabb-db648.appspot.com/o/" +
                      encodeURIComponent(EachDetail.Image) +
                      "?alt=media&token=536a0c9e-8591-43a9-b798-d88a841e6ae6"
                    }
                    className="w-full rounded-md object-contain md:max-h-[40vh] md:h-auto p-2"
                    alt={EachDetail.Title}
                    controls
                    autoPlay
                  />
                </div>
              ) : (
                <div className="md:w-[40%] p-2 rounded-md md:max-h-[40vh] box">
                  <img
                    src={EachDetail.Image}
                    className="w-full rounded-md object-cover md:max-h-full md:h-auto"
                    alt={EachDetail.Title}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="text-black md:w-[40%] w-full flex flex-col justify-between space-y-5">
                {" "}
                <h1 className="mb-2 text-xl md:text-xl lg:text-2l xl:text-4xl font-bold tracking-tight text-gray-900">
                  {EachDetail?.Title}
                </h1>
                <p className="sm:text-base text-xs bg-blue-600 p-2 rounded-md  text-white">
                  {EachDetail?.Description}
                </p>
                <button
                  className="text-start w-max md:p-2 md:px-4 p-1 px-3 text-white text-xs md:text-base rounded-full flex items-center gap-x-2 group bg-black hover:text-white transition-all ease-in-out"
                  onClick={() => {
                    RouteChange(EachDetail?.Title);
                  }}
                >
                  Let's Dive In
                  <TiLocationArrow className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110" />
                </button>
              </div>
            </div>

            <div className="Border h-[10vh] w-full md:w-[30%] mx-auto md:py-12"></div>
          </section>
        );
      })}
    </div>
  );
};

export default CaseStudies;
