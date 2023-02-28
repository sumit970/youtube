import React from "react";
import { Link } from "react-router-dom";
// import {
//   demoChannelUrl,
//   demoChannelTitle,
//   demoVideoUrl,
//   demoVideoTitle,
// } from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>

    {/* {data?.items.map((elem,id) => { */}
      {/* //  const [channelTitle, thumbnails,description, title] = elem.snippet
        return ( */}
          <div className="flex flex-wrap ">
            <div className="flex flex-col ">
            <Link to={videoId ? `/video/${videoId}` : undefined}>
               <img src={snippet.thumbnails.high.url} alt={snippet?.title} className="sm:h-[150px] sm:w-[280px] h-[200px] w-[330px] rounded-md object-cover" />
            </Link> 
            <div className="flex flex-row gap-4 text-sm pt-2 font-semibold">
              {/* <img src={} alt="" className="w-8 h-8 rounded-full" />*/}
            {/* this is myself sumit kumar */}
              <div className="">

              <Link to={videoId ? `/video/${videoId}` : undefined}>
                <h1 className=" max-w-[280px]  max-h-[3rem] sm:text-base font-medium text-clip overflow-hidden">{snippet?.title}</h1>
                
              </Link>
                {/* <span className="text-slate-500">{elem?.published_time}</span> */}
                <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : undefined
          } 
        >
                <span className="text-slate-500 block">{snippet?.channelTitle}</span>
                </Link>
              </div>
            </div>
            </div>
          </div>
        {/* );
       })} */}
    </>

  );
};

export default VideoCard;
