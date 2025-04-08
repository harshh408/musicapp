import { React } from "react";
import DownloadAds from "./DownloadAds";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref, inView: elementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const bg = {
    true: { left: "7rem" },
    false: { left: "19rem" },
  };

  const musicPlayer = {
    true: { left: "295px" },
    false: { left: "235px" },
  };

  const rect = {
    true: { left: "11rem" },
    false: { left: "13rem" },
  };

  const heart = {
    true: { left: "9rem" },
    false: { left: "12.5rem" },
  };

  return (
    <div
  ref={ref}
  className="wrapper overflow-hidden bg-[#081730] flex flex-col md:flex-row items-center justify-between px-6 md:px-[5rem] py-10 md:py-0 rounded-b-[3rem] w-full h-auto md:h-[35rem] relative z-[3]"
>

      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-full text-[2rem] md:text-[3rem]">
        <span>Experience The</span>
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[15px] text-[#525D6E]">
          Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
          <br />
          Suspendisse in leo non risus tincidunt lobortis.
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now on IOS and Android</span>
          <DownloadAds />
        </div>
      </div>

      {/* right side */}
      <div className="images relative w-full md:w-[50%] h-[25rem] md:h-full">
  <motion.img
    variants={bg}
    animate={elementIsVisible ? "true" : "false"}
    transition={{ duration: 1, type: "ease-out" }}
    src={require("../img/backgraphics.png")}
    alt=""
    className="absolute top-[-4rem] left-[10rem] md:top-[-8rem] md:left-[19rem] w-[10rem] md:w-auto"
  />

  <img
    src={require("../img/p 1.png")}
    alt=""
    className="absolute top-[-4rem] left-[4rem] md:top-[-15rem] md:left-[13rem] w-[14rem] md:w-auto"
  />

  <motion.img
    variants={musicPlayer}
    animate={elementIsVisible ? "true" : "false"}
    transition={{ duration: 1, type: "ease-out" }}
    src={require("../img/p 2.png")}
    alt=""
    className="absolute top-[6rem] left-[6rem] md:top-[94px] md:left-[235px] w-[9rem] md:w-[175px]"
  />

  <motion.img
    variants={rect}
    animate={elementIsVisible ? "true" : "false"}
    transition={{ type: "ease-out", duration: 1 }}
    src={require("../img/p 3.png")}
    alt=""
    className="absolute top-[10rem] left-[5rem] md:top-[12rem] md:left-[13rem] w-[4rem] md:w-[5rem]"
  />

  <motion.img
    variants={heart}
    animate={elementIsVisible ? "true" : "false"}
    transition={{ type: "ease-out", duration: 1 }}
    src={require("../img/p 4.png")}
    alt=""
    className="absolute top-[10rem] left-[7rem] md:top-[12rem] md:left-[12.5rem] w-[4rem] md:w-[5rem]"
  />
</div>


    </div>
  );
}

export default Hero;
