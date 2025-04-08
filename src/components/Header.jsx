import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-4 py-2 text-sm";

  return (
    <div className="header bg-[#081730] flex flex-col md:flex-row items-center justify-between px-6 md:px-[5rem] pt-6 md:pt-[2.4rem] text-sm space-y-4 md:space-y-0">
      {/* logo */}
      <img
        src={require("../img/MuzicLogo.png")}
        alt="Logo"
        className="logo w-[42px] h-[42px]"
      />

      {/* center menu (hidden on small screens) */}
      <div className="hidden md:flex">
        <CenterMenu />
      </div>

      {/* buttons */}
      <div className="flex space-x-4">
        <button className={`hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={`${buttonStyle} bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
