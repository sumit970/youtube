import React, { useEffect, useState } from "react";
import { Card, Header,Navbarsm, Topic } from ".";
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../redux/generalfunction/function'
import { useGetYoutubeDataQuery } from "../redux/youtube/youtubeAPI";
import Videos from "./Videos";
const Feed = () => {
  const [Category, setCategory] = useState('New');
  // const [videos, setVideos] = useState([]);
//   const count = useSelector((state) => state.counter.value)
//  const dispatch = useDispatch()
  // const [toggle,setToggle] = useState(false)
  const count = useSelector((state)=> state.counter.value)
  // console.log(Category);

  const { data,isFetching } = useGetYoutubeDataQuery({Category});
  
  //  useEffect(() => {
    
  //    setVideos(data?.items)
  //  }
  //   // console.log(res)
  //   // 
  // , [Category])
  // console.log(videos)
  // setVideos();
  // console.log(isFetching);

  const truetoggle="flex flex-col h-screen ml-[50px]"
  const falsetoggle="flex flex-col h-screen "
  //  console.log(count)
  return (
    
    <div className="w-full h-screen flex flex-col  ">
      
      <div className="flex flex-row">
        <div className="">
       {
          count ? <Navbarsm Category={Category}
          setCategory={setCategory}
          />:undefined
        }
        </div>
        <div className= {count?falsetoggle:truetoggle }>

              <div className="flex flex-wrap pt-3 pl-2 gap-3">
              <Videos videos={data?.items} />
              </div>

        </div>
      </div>
     
    </div>
  );
};


export default Feed;
