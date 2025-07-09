import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
  
     
      <div className="w-[100%] p-5 mb-2 flex overflow-y-hidden">
        {/* card container */}
        {data.map((d, i) => (
          <div key={i} className="min-w-[20%]  mr-5 mb-5 bg-zinc-900">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white h-[45%] p-3">
              <h1 className=" text-xl font-semibold  ">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-2">
                {d.overview.slice(0, 50)}....
                <span className="text-zinc-400"> more </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default HorizontalCards;
