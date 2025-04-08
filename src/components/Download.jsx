import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-6 md:px-[5rem] bg-[#020917] h-auto md:h-[48rem] pt-[10rem] md:pt-[18rem] mt-[-6rem] md:mt-[-10rem] relative z-[0] rounded-b-[2rem] md:rounded-b-[5rem] text-center">
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[4rem] md:w-[5rem]" />

      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[1.5rem] md:text-[2rem]">
        <span>Download The Best Music</span>
        <span>
          <b>App Now! </b>
        </span>
        <span className="text-[0.9rem] md:text-[1rem] text-gray-400 px-4 md:px-[15rem] mt-4">
          Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat varius.
        </span>
      </div>

      {/* download ads */}
      <div className="mt-10 md:mt-14">
        <DownloadAds />
      </div>
    </div>
  );
}

export default Download;
