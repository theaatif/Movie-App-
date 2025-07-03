import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const TopNav = () => {
  let [query, setQuery] = useState("");
  let [searches, setSearches] = useState("null");

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

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
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          class="ri-close-fill text-3xl text-zinc-400"
        ></i>
      )}
      {/* to show the cross marks when user search */}
      {/* search box hint */}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100"
          >
            <img src="" alt="" />
            <span>{s.name || s.title || s.original_name || s.original_title  }</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
