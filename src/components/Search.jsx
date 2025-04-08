import React from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Search() {
  const { ref, inView: elementIsVisible } = useInView({ triggerOnce: false });

  const bg = {
    true: { left: "-44rem" },
    false: { left: "-50rem" },
  };
  const redimg = {
    true: { left: "18rem" },
    false: { left: "16rem" },
  };
  const musicimg = {
    true: { left: "2rem" },
    false: { left: "6rem" },
  };

  return (
    <div className="search relative h-auto px-6 md:px-[5rem] bg-[#081730] pt-[8rem] md:pt-[18rem] pb-[5rem] md:pb-[10rem] mt-[-10rem] md:mt-[-15rem] z-[1] flex flex-col md:flex-row items-center md:items-start justify-between rounded-b-[2rem] md:rounded-b-[5rem] gap-10 md:gap-0">
      {/* Left Side */}
      <div className="left flex-1 w-full md:w-auto relative">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem] hidden md:block"
        />
        <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="w-[10rem] md:w-[16rem] top-[26rem] absolute"
        />
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="w-[6rem] md:w-[9rem] absolute top-[32.7rem] left-[4rem] md:left-[7rem]"
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{ duration: 1.2, type: "ease-out" }}
          src={require("../img/d3.png")}
          alt=""
          className="w-[6rem] md:w-[9rem] top-[33rem] left-[12rem] md:left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[12rem] md:w-[17rem] top-[50rem] left-[1rem] md:left-[2rem] absolute"
        />
      </div>

      {/* Right Side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-full pt-6 md:pt-[9rem] w-full">
        <div className="searchbar flex flex-col md:flex-row justify-start w-full">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-1 outline-none bg-[#020917] rounded-xl p-3 h-[3rem] w-full md:w-auto"
          />
          <div className="searchIcon flex items-center justify-center rounded-xl mt-4 md:mt-0 md:ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem] w-full md:w-auto">
            <img src={require("../img/search.png")} alt="" className="w-[1.5rem]" />
          </div>
        </div>

        <div className="tild flex justify-start mt-7 items-center w-full">
          <img src={require("../img/Path 318.png")} alt="" className="w-[4rem] md:w-[5rem]" />
        </div>

        <div className="detail flex flex-col mt-5 text-2xl md:text-4xl w-full">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br className="hidden md:block" />
            nibh viverra eget. Vestibulum ullamcorper <br className="hidden md:block" />
            volutpat varius.
          </span>
        </div>

        {/* Music Player with ref */}
        <div ref={ref} className="mt-10 w-full">
          {elementIsVisible && <MusicPlayer />}
        </div>
      </div>
    </div>
  );
}

export default Search;
