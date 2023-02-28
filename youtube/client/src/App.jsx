import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Header, Navbarsm } from "./component";
import ChannelDetail from "./component/ChannelDetail";
import Feed from "./component/Feed"
// import Swiper from "./component/Swiper";
import Home from "./component/Feed";
import SearchFeed from "./component/SearchFeed";
import VideoDetail from "./component/VideoDetail";
import Login from "./page/Login";
const App = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userdetail"));
    // console.log(user);

  // useEffect(() => {
    
  //   if (!user) {
  //     navigate("/login");
  //   }
  
  // }, [])
  

  return (
    <>
    {/* <Swiper/> */}
   
    <div className="flex flex-row justify-between p-3">
        <Header/>
    </div>

      <Routes>
        <Route exact path="/" element={<Feed/>} />
        <Route path="/video/:id" element={<VideoDetail/>} />
        <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>
      
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes> */}
    
    </>
  );
};

export default App;
