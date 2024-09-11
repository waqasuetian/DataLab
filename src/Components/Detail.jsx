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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="container mx-auto py-12 px-4">
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full fixed bottom-4 right-4 shadow-lg hover:bg-blue-600 transition duration-300">
            <IoHome className="w-6 h-6 inline" /> Home Page
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {EachDetail?.Image?.endsWith(".mp4") ? (
              <video src={EachDetail.Image} className="w-full h-auto" controls />
            ) : (
              <img src={EachDetail.Image} className="w-full h-auto" alt={EachDetail?.Title} />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{EachDetail?.Title}</h1>
            <p className="text-lg text-gray-600 mb-6">{EachDetail?.Description}</p>
            <p className="text-lg text-gray-600">
              <span className="font-bold">Keywords:</span> {EachDetail?.Keywords}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <TbTriangleSquareCircleFilled className="w-8 h-8 text-blue-500 mr-2" /> Challenges
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              {EachDetail?.Challenges?.map((challenge, idx) => (
                <li key={idx} className="mb-2">{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <PiCompassToolBold className="w-8 h-8 text-blue-500 mr-2" /> Tools Used
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              {EachDetail?.Tools?.map((tool, idx) => (
                <li key={idx} className="mb-2">{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;


