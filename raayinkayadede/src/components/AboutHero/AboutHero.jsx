import React from "react";
import Style from "./abouthero.module.css";
import Image from "../../assets/images/pexels-diego-pontes-2314021.jpg"
export const AboutHero = () => {
  return (
    <>
      <div className={Style.abouthero}>
        <img className={Style.image} src={Image} alt="" />
        <div className={Style.bgoverlay}></div>
        <div className={Style.abouttextcontainer}>
            <h1 className={Style.header}>ABOUT <span className={Style.span}>US</span></h1>
            <p className={Style.text}>Raayin'Kayadede Nigerian Limited is a construction company that specializes in building projects, from homes to infrastructure. They handle design, permits, materials, and project management. Safety, sustainability, and a solid reputation are essential.</p>
        </div>
      </div>
    </>
  );
};
