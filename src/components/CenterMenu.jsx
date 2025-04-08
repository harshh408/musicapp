import React from 'react';

function CenterMenu() {
  const liStyle = "mb-4 md:mb-0 md:mr-[3rem] hover:cursor-pointer";

  return (
    <div className="menu flex justify-center w-full">
      <ul className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-auto">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Performer</li>
        <li className={liStyle}>Event Schedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
