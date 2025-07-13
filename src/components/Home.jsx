import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Home = () => {
  let [wallpaper, setWallpaper] = useState(null);
  let [trending, setTrending] = useState(null);
  let [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
 

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  document.title = "Movie App | Homepage";
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        {/* Dropdown container and trending header -> passed to drop down*/}
        <div className=" flex justify-between items-center p-5">
          <h1 className="text-3xl font-semibold text-zinc-400 ">Trending</h1>

          <Dropdown
            title="Filter"
            options={["Tv", "Movie", "all"]}
            func={(e) => setCategory(e.target.value.toLowerCase())}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
