import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";

const Home = () => {
  let [wallpaper, setWallpaper] = useState(null);

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
  console.log(wallpaper);
  

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  document.title = "Movie App | Homepage";
  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ): <h1>Loading....</h1>
};

export default Home;
