import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `
          linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),
          url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
          })
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRapeat: "no-repeat"

      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start  p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 mb-2 text-white">
        {data.overview.slice(0, 200)}....
        <Link className="text-blue-400"> more </Link>
      </p>

      <p className="text-white flex items-center ">
        <i className="text-[#7565DE] text-2xl mr-2 ri-calendar-schedule-fill"></i>{" "}
        {data.release_date || data.first_air_date}
        <i className="ml-5 text-[#7565DE] text-2xl mr-2 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="text-white bg-[#6556CD] p-4 mt-3 rounded ">Watch Trailer</Link>
    </div>
  );
};

export default Header;
