import React from "react";
import { topic } from "./data";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// useGetYoutubeDataQuery
const Topic = () => {
  // const { youtubesearch} = useGetYoutubeDataQuery();
  
  // console.log(youtubesearch);
  return (
    <div className="mt-4 p-1 static flex flex-row items-center overflow-x-scroll sm:max-w-screen-lg   gap-3 no-scrollbar">
      {topic.map((elem) => {
        return (
          <div className="shadow-sm rounded-md bg-zinc-200 p-2 min-w-max">
            {elem.name}
          </div>
          // svg
          
        );
      })}
    </div>
    
  );
};

export default Topic;
