import React from 'react'
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
    
      <CirclesWithBar
        height="100"
        width="100"
        color="	#1E90FF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    
  </div>
  )
}

export default Loader