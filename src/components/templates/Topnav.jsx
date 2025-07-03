import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  let [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] border-none outline-none bg-transparent text-xl text-zinc-200 mx-10 p-5"
        type="text"
        placeholder="Search..."
      />
      {query.length > 0 && <i onClick={()=>setQuery("")} class="ri-close-fill text-3xl text-zinc-400"></i>} {/* to show the cross marks when user search */}
      {/* search box hint */}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Shah Rukh Khan...</span>
        </Link>


        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600  w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Shah Rukh Khan...</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600  w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Shah Rukh Khan...</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600  w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Shah Rukh Khan...</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600  w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Shah Rukh Khan...</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
