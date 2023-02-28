import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineWatchLater} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { playlist } from "./data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, toggle } from '../redux/generalfunction/function'

// import { IconName } from "react-icons/md";
const Navbarsm = ({ Category,setCategory}) => {

  const links = [

    {to:"/home",icon: AiOutlineHome,text:"Home"
    },
    {to:"/subscription",icon: MdOutlineSubscriptions,text:"Music"
    },
    {to:"/library",icon: MdOutlineVideoLibrary,text:"Movies"
    },
    {to:"/videos",icon: RiVideoLine,text:"Sports"
    },
    {to:"/watch_later",icon: MdOutlineWatchLater,text:"Comedy"
    },
    {to:"/liked",icon: AiOutlineLike,text:"Radio"
    },

  ];
  return (
    <nav className="flex flex-col items-center justiify-center overflow-y-scroll h-screen no-scrollbar">
      <div className="">
        {links.map((elem) => {
          return (
            <button className="flex flex-row items-center justify-space p-2 ml-3 rounded-md min-w-[180px] gap-4 hover:bg-slate-200" onClick={() => setCategory(elem.text) }>
              <elem.icon fontSize={28}/>
              <div className="font-roboto flex flex-col">
                  {elem.icon}

                {/* <Link to={elem.to} className="">
                  </Link> */}
                  <p> {elem.text} </p>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbarsm;
