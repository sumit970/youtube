import React, { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import {useGetYoutubeSearchDataQuery} from "../redux/youtube/youtubeAPI"
// useGetYoutubeSearchDataQuery
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  
 const {data,isFetching}=useGetYoutubeSearchDataQuery({searchTerm})
 console.log(data)
 console.log(isFetching);
  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [searchTerm]);

  return (
    <div className="flex flex-col justify-center content-center sm:items-center sm:pl-7 ">
      <div className=" font-semibold text-xl">
        Search Result for: <span>{searchTerm}</span> videos
      </div>
      <div className="flex  pt-3 pl-2 gap-3 justify-center items-center">
        <Videos className="flex flex-wrap" videos={data?.items} />
      </div>
      {/* <Videos videos={videos} className="flex fle" justifyContent="center" /> */}
    </div>
  );
};

export default SearchFeed;
// p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
// variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}
