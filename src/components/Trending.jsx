import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios.jsx";
import Cards from "./templates/Cards";
import Loading from "./Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  // function to navigate
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      // setTrending(data.results);


      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length ? (
    <div className="w-screen h-screen ">
      <div className=" w-full flex items-center px-[2vh ]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            // navigate back to previous page
            onClick={() => navigate(-1)}
            className="mr-2 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown
          tile="category"
          options={["Movie", "Tv", "All"]}
          func={(e) => setCategory(e.target.value.toLowerCase())}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          tile="Duration"
          options={["Week", "Day"]}
          func={(e) => setDuration(e.target.value.toLowerCase())}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
