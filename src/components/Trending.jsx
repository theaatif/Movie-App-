import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios.jsx";
import Cards from "./templates/Cards";
import Loading from "./Loading.jsx"

const Trending = () => {

   // function to navigate
  const navigate = useNavigate();

  let [category, setCategory] = useState("all");
  let [duration, setDuration] = useState("day");
  let [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`); 
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

   console.log(trending);

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

 
  

 
  return trending ? (
    <div className="w-screen h-screen px-[3%] overflow-hidden overflow-y-auto">
      <div className=" w-full flex items-center ">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            // navigate back to previous page
            onClick={() => navigate(-1)}
            className="mr-2 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown tile="category" options={["Movie", "Tv", "All"]} func={(e)=>setCategory(e.target.value.toLowerCase())} />
        <div className="w-[2%]"></div>
        <Dropdown tile="Duration" options={["Week", "Day"]} func={(e)=>setDuration(e.target.value.toLowerCase())} />
      </div>

      <Cards data={trending} />
    </div>
  ): <Loading />
};

export default Trending;
