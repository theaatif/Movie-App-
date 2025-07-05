import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.png";

const TopNav = () => {
 
  let [query, setQuery] = useState("");
  let [searches, setSearches] = useState([]);

  // Function to fetch search results from the API
  const GetSearches = async () => {
    try {
      // API call to fetch search results based on the query
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results); // Update the search results state
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // useEffect to call GetSearches whenever the query changes
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="realtive w-full h-[10vh] relative pl-[10%] flex  items-center">
      
      <i className=" relative ri-search-line text-3xl text-zinc-400"></i>
      {/* Search input box */}
      <input
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        value={query}
        className="w-[50%] border-none outline-none bg-transparent text-xl text-zinc-200 mx-6 p-3"
        type="text"
        placeholder="Search..."
      />
      {/* Show cross icon to clear search when query is not empty */}
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="relative ri-close-fill text-3xl text-zinc-400 "
        ></i>
      )}

      {/* Dropdown for search results */}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[15%] overflow-auto duration-300 rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify start items-center border-b-2 border-zinc-100"
          >
            {/* Show result image or noimage if not available*/}
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-md"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            {/* Show result title/name */}
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
