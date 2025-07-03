import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-film-fill mr-2"></i>
        <span>Movie App</span>
      </h1>

      {/* side nav list */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-6 ">
          News Feeds
        </h1>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Show
        </Link>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-team-fill"></i>
          people
        </Link>
      </nav>

      {/* Website Information */}
      <hr className="border-none h-[1px] bg-zinc-400 mt-1" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 ">
          Website Information
        </h1>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className=" mr-2 ri-information-fill"></i>
          About
        </Link>
        <Link className=" hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg p-5">
          <i className="mr-2 ri-contacts-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
