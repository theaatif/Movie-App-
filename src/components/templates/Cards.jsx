import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-[full] justify-center">
      {data.map((c, i) => (
        <Link key={i} className="w-[25vh] mr-[5%] mb-[5%]">
          <img className="object-cover h-[30vh] shadow-[8px_17px_38px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.poste_path || c.backdrop_path
            }`}
            alt=""
          />
          <h1 className="2xl text-zinc-300 mt-3 font-semibold">
          {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
