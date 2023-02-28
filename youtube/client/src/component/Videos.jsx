import React from "react";
// import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import Loader from "./Loader";


const Videos = ({ videos}) => {
  if (!videos?.length) return <Loader />;
  console.log(videos)

  return (
    <div className="flex flex-wrap sm:gap-2 md:3">

      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
