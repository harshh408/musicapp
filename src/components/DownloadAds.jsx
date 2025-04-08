import React from 'react'

function DownloadAds() {
  const downloadImgStyle =
    'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]';

  return (
    <div className="download w-full">
      <div className="download_images flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <img
          src={require("../img/App Store.png")}
          alt="App Store"
          className={downloadImgStyle}
        />
        <img
          src={require("../img/Google Play.png")}
          alt="Google Play"
          className={downloadImgStyle}
        />
      </div>
    </div>
  );
}

export default DownloadAds;
