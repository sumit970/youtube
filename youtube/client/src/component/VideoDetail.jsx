import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import Loader from "./Loader";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
import {
  useGetYoutubeRelatedDataQuery,
  useGetYoutubeDetailDataQuery,
} from "../redux/youtube/youtubeAPI";

const VideoDeatail = () => {
  // useGetYoutubeDataQuery,useGetYoutubeRelatedDataQuery,useGetYoutubeDetailDataQuery
  // const [videoDetail, setVideoDetail] = useState(null);
  // const [videos, setVideos] = useState(null);
  const { id } = useParams();

  console.log(id);

  const { data: datadatail } = useGetYoutubeDetailDataQuery({ id });
  const { data: datarelated } = useGetYoutubeRelatedDataQuery({ id });
  // console.log(isFetching)
  // console.log(isFetchin)
  console.log(datarelated);
  // console.log(datarelated);

  if (!datadatail?.items[0].snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = datadatail?.items[0];
  return (
    <section className="p-5">
      <div className="flex md:flex-row flex-col justify-between gap-5 ">
        <div className=" " >
           
          <ReactPlayer
            className="react-player "
            height={500}
            width={800}

           
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <div className="sm:font-bold font-semibold text-base sm:text-xl max-w-[700px]"
          >{title}</div>
          <div className="flex flex-row justify-content-spacebetween">
            <Link to={`/channel/${channelId}`}>
              <div className="text-base font-semibold">
                {channelTitle}


              </div>
            </Link>
            <div className="flex flex-row sm:gap-[10px] font-semibold pl-4">
              <div>{parseInt(viewCount).toLocaleString()} views</div>
              <div>{parseInt(likeCount).toLocaleString()} likes</div>
            </div>
          </div>
        </div>
        <div className=" md:max-w-[400px] max-w-[700px] h-screen overflow-scroll">
            <Videos videos={datarelated?.items} />
        </div>
      </div>
    </section>
  );
};

export default VideoDeatail;
