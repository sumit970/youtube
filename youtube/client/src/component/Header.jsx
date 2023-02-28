import React, { useState } from "react";
// useState
import { FiAlignJustify } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { default as photo } from "../assets/images/yt.png";
import { default as user } from "../assets/images/user.png";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { decrement, toggle } from "../redux/generalfunction/function";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  // console.log(toggle);

  //
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();
  // const [toggle,setToggle] = useState(false)
  // const handlenavbar = () => {};
  // const handleSearch = () => {

  //   if(toggle){
  //     setToggle(false)
  //   }
  //   else{
  //     setToggle(true)
  //   }
  // };

  return (
    <>
      {/* /this div is for  logo and hamberger icons  */}
      <div className="flex flex-row gap-3 justify-center items-center ">
        <div className=" rounded-full hover:border-l-neutral-800 p-2 hover:bg-zinc-200 shadow-slate-500">
          <FiAlignJustify
            onClick={() => dispatch(toggle())}
            className=" cursor-pointer"
            fontSize={30}
          />

        </div>
        <Link to={"/"}>
          <img src={photo} alt="" className="w-[90px] h-[25px]" />
        </Link>

      </div>
      {/* /the next div for search  */}
      <div className="flex flex-row items-center gap-2 justify-bottom sm:justify-center ">
        <SearchBar />
        <div className="p-2 hidden sm:block rounded-full bg-slate-100 hover:bg-slate-300">
          <MdKeyboardVoice fontSize={25} />
        </div>
      </div>
      
      {/* this div is for video icon and user-profile */}
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-2">
        <BsSearch className="sm:hidden" onClick={"sumit"} />
        <div className="p-2 rounded-full sm:hidden bg-slate-100 hover:bg-slate-300">
          <MdKeyboardVoice fontSize={25} />
        </div>
        <BiVideoPlus fontSize={26} />
        <IoMdNotificationsOutline fontSize={26} />
        <img
          src={user}
          alt=""
          className="w-10 h-10 rounded-full p-2 hover:bg-blue-200"

        />
      </div>
    </>
  );
};

export default Header;
