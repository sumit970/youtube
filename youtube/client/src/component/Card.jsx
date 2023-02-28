import React, { useEffect, useState } from "react";
import { decrement, toggle } from '../redux/generalfunction/function'

import { playlist } from "./data";
import { useGetYoutubeDataQuery } from "../redux/youtube/youtubeAPI";
const Card = () => {
  // const [Category, setNewsCategory] = useState('New');
  // const [result, setresult] = useState({})
  // console.log(toggle);
  return (
    // <></>
    <>
      {data?.items.map((elem,id) => {
      //  const [channelTitle, thumbnails,description, title] = elem.snippet
        return (
          <div className="flex flex-wrap " key={id}
        >
            <div className="flex flex-col ">  
            <img src={elem.snippet.thumbnails.high.url} alt="" className="sm:h-[150px] sm:w-[280px] h-[200px] w-[330px] rounded-md object-cover" />
            <div className="flex flex-row gap-4 text-sm pt-2 font-semibold">
              {/* <img src={} alt="" className="w-8 h-8 rounded-full" /> */}

              <div className="">
                <h1 className=" max-w-[280px]  max-h-[3rem]   sm:text-base font-medium text-clip overflow-hidden">{elem.snippet.title}</h1>
                {/* <span className="text-slate-500">{elem?.published_time}</span> */}
                <span className="text-slate-500 block">{elem.snippet.channelTitle}</span>
              </div>
            </div>
            </div>
          </div>

        );
      })}
      
    </>
  );
};

export default Card;

    // <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
    //   <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
    //     <CardMedia
    //       component="img"
    //       sx={{ width: 360, height: 180, background: "gray" }}
    //       image={snippet?.thumbnails?.high?.url}
    //       alt={snippet?.title}
    //     />
    //   </Link>     
    //   <CardContent sx={{ background: "#1e1e1e", height: "70px" }}>
    //     <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    //       <Typography variant="subtitle1" fontWeight="bold" color="#fff">
    //         {snippet?.title.slice(0,50) || demoVideoTitle}
    //       </Typography>
    //     </Link>
    //     <Link
    //       to={
    //         snippet?.channelId
    //           ? `/channel/${snippet?.channelId}`
    //           : demoChannelUrl
    //       }
    //     >
    //       <Typography variant="subtitle2" color="gray" fontWeight="bold">
    //         {snippet?.channelTitle || demoChannelTitle}
    //         <CheckCircle sx={{ fontSize: "14px", ml: "5px" }} />
    //       </Typography>
    //     </Link>
    //   </CardContent>
    // </Card>




