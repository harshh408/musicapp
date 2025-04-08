import React from "react";
import CenterMenu from "./CenterMenu";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  const SocialStyle =
    "rounded-full border-2 border-white p-2 mx-2 sm:mx-4 md:mx-6 text-white";

  return (
    <div className="footer flex flex-col items-center justify-start px-4 sm:px-10 md:px-[5rem] bg-[#081730] pt-[6rem] pb-[4rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />

      {/* Social icons */}
      <div className="flex flex-wrap justify-center mt-10">
        <div className={SocialStyle}>
          <Facebook />
        </div>
        <div className={SocialStyle}>
          <Twitter />
        </div>
        <div className={SocialStyle}>
          <YouTube />
        </div>
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>

      {/* Detail text */}
      <span className="text-sm sm:text-base text-gray-400 text-center mt-10 px-4 sm:px-8 md:px-[10rem] leading-relaxed">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;
