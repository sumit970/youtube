import React from "react";
// import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { CheckCircle } from "@mui/icons-material";
// import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <div className="flex items-center justify-center h-[250px] w-[345px] m-auto">
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="h-[180px] w-[180px] border-3 mb-2 rounded-md">
          <img 

            src={channelDetail?.snippet?.thumbnails?.high?.url || undefined}
            alt={channelDetail?.snippet?.title}
            className=""
            
          />
        </div>
        <div className="">{channelDetail?.snippet?.title}</div>
        {channelDetail?.statistics?.subscriberCount && (
          <div className="mb-5 ">
            {/* className=" */}
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </div>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;


