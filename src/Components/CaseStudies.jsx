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
    <div className="min-h-screen py-12 w-full bg-gray-50 dark:bg-dot-black/[0.3] relative flex flex-col items-center justify-center">
      {/* Background Decorations */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[60rem] w-[30rem] rounded-full blur-[8rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[1rem] left-[-25rem] -z-10 h-[60rem] w-[40rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]"></div>

      {/* Header */}
      <div className="text-black relative text-center py-12 flex flex-col gap-y-6">
        <h1 className="text-gray-700 font-extrabold text-2xl md:text-4xl lg:text-5xl">
          Case Studies
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-center px-4 text-gray-600">
          Witness the Impact From the Successful Implementation of Our Projects.
        </p>
      </div>

      {/* Case Studies Listing */}
      {Details.map((EachDetail, Index) => (
        <section key={Index} className="w-full max-w-5xl px-4 mb-12">
          <div
            className={`flex flex-col md:flex-row items-center gap-5 md:gap-8 bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Media Section (Image or Video) */}
            <div className="md:w-1/2 w-full">
              {EachDetail?.Image?.endsWith(".mp4") ? (
                <div className="rounded-md overflow-hidden">
                  <video
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/datalabb-db648.appspot.com/o/" +
                      encodeURIComponent(EachDetail.Image) +
                      "?alt=media&token=536a0c9e-8591-43a9-b798-d88a841e6ae6"
                    }
                    className="w-full h-auto rounded-md object-contain"
                    controls
                    autoPlay
                  />
                </div>
              ) : (
                <div className="rounded-md overflow-hidden">
                  <img
                    src={EachDetail.Image}
                    className="w-full h-auto object-cover rounded-md"
                    alt={EachDetail.Title}
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-between space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                {EachDetail?.Title}
              </h1>
              <p className="sm:text-base text-sm bg-blue-600 p-3 rounded-lg text-white shadow-md">
                {EachDetail?.Description}
              </p>
              <button
                className="text-start w-max px-4 py-2 text-white text-sm md:text-base rounded-full flex items-center gap-x-2 bg-black hover:bg-gray-900 transition-colors duration-300"
                onClick={() => RouteChange(EachDetail?.Title)}
              >
                Let's Dive In
                <TiLocationArrow className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CaseStudies;

