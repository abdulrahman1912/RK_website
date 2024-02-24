import React from "react";
import Style from "./herosection.module.css";
import Bgvideo from "../../assets/video/VID-20230922-WA0001.mp4";

export const HeroSection = () => {
  return (
    <>
      <div className={Style.herocontainer}>
        <video src={Bgvideo} autoPlay muted loop />
        <div className={Style.bgoverlay}></div>
        <div className={Style.herotextcontainer}>
          <h1>Welcome  <br />To <br />Raayin'Kayadede <br /> Nigeria Limited </h1>
        </div>
      </div>
    </>
  );
};
