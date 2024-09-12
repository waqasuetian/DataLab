import React, { useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Details from "../Details";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  let navigate = useNavigate();

  const RouteChange = (id) => {
    navigate(`/case-studies/${id}/details`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Case Studies</h1>
      <p className="text-lg text-gray-800 mb-12 text-center">
        Witness the impact of our successful projects and how they have shaped industries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {Details.map((EachDetail) => (
          <div
            key={EachDetail.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              {EachDetail?.Image?.endsWith(".mp4") ? (
                <video
                  src={EachDetail.Image}
                  className="w-full h-auto rounded-md"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={EachDetail.Image}
                  className="w-full h-auto rounded-md"
                  alt={EachDetail.Title}
                />
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {EachDetail?.Title}
            </h2>
            <p className="text-gray-800 mb-4">{EachDetail?.Description}</p>

            {/* Displaying Keywords */}
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Keywords: {EachDetail.Keywords}
            </p>

            {/* Displaying Challenges */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Challenges:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {EachDetail.Challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            {/* Displaying Tools */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Tools Used:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {EachDetail.Tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Button to navigate to detailed view */}
            <button
              className="bg-[#2E8B57] text-white px-4 py-2 rounded-full flex items-center gap-x-2"
              onClick={() => RouteChange(EachDetail.id)}
            >
              Let's Dive In
              <TiLocationArrow className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;



