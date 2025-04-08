import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-4 md:px-[5rem] bg-[#020917] min-h-screen pt-[10rem] md:pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* tild icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />

      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[1.5rem] md:text-[2rem] text-center">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>

      {/* features */}
      <div className="feature flex flex-col md:flex-row items-center justify-center gap-12 mt-[4rem] w-full">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
