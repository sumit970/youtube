import React, { useState, useEffect } from "react";
// import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
// D:\code\FullStack\youtube\client\src\component\ChannelCard.jsx
// import { Videos, ChannelCard } from "./";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import {useGetYoutubeChannelDataQuery, useGetYoutubeChannelVideoDataQuery} from "../redux/youtube/youtubeAPI"
// useGetYoutubeSearchDataQuery,useGetYoutubeChannelDataQuery, useGetYoutubeChannelVideoDataQuery
const ChannelDetail = () => {

  // const [channelDetail, setChannelDetail] = useState(null);
  // const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(id);
  const { data: datadatail } = useGetYoutubeChannelDataQuery({ id });
  const { data: datarelated } = useGetYoutubeChannelVideoDataQuery({ id });

  // useEffect(() => {
  //   fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
  //     setChannelDetail(data?.items[0])
  //   );
  //   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
  //     (data) => setVideos(data?.items)
  //   );
  // }, [id]);

  return (
    <div >
      <div>
        
        <ChannelCard channelDetail={datadatail?.items[0]} marginTop="-90px" />
      </div>
     
      <div className="flex  pt-3 pl-2 gap-3 justify-center items-center">
        <Videos className="flex flex-wrap" videos={datarelated?.items} />
      </div>
    </div>
  );
};

export default ChannelDetail;
