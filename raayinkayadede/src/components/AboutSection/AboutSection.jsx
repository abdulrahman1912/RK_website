import React from "react";
import Style from "./aboutsection.module.css";
import Image1 from "../../assets/icons/pngicons/flag.png";
import Image2 from "../../assets/icons/pngicons/rocket.png";
import Image3 from "../../assets/icons/pngicons/trophy.png";

export const AboutSection = () => {
  return (
    <>
      <div className={Style.aboutsection}>
        <div className={Style.container1}>
          <div className={Style.text}>
            <h1 className={Style.header}>HOME FOR EVERYONE</h1>
            <p className={Style.bodytext}>
              Raayin'Kayadede Nigerian LTD started its operation in 2021 and
              since then it has successfully completed multiple projects
              scattered throughout the city of Abuja in places like Katampe,
              Maitama and Wuse.
              Raayin'Kayadede Nigerian LTD with a wealth of experience and a
              commitment to excellence brings your visions to life. From concept
              to completion, we deliver quality, on-time, and within budget. We
              build more than structures and also create spaces where dreams take
              shape.
            </p>

            <p className={Style.bodytext1}>   With a seasoned team and a passion for precision, we're
              dedicated to making your construction journey seamless. At
              Raayin'Kayadede Nigerian LTD we craft your future with concrete
              and commitment.
               Our legacy of building excellence spans number of years,
              making us your go-to choice for all construction needs. Trust us
              to turn your ideas into reality, one brick at a time.</p>

          </div>

          <div className={Style.container2}>
            <div className={Style.content}>
                <div className={Style.title}>
                    <img className={Style.image} src={Image1} alt="" />
                    <h4>CORE VALUES</h4>
                </div>
                <p>We take our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand. Our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand</p>
            </div>
            <div className={Style.content}>
            <div className={Style.title}>
                    <img className={Style.image} src={Image2} alt="" />
                    <h4>PACE</h4>
                </div>
                <p>We take our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand. Our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand</p>
            </div>
          </div>
          
          <div className={Style.content1}>
          <div className={Style.title}>
                    <img className={Style.image} src={Image3} alt="" />
                    <h4>QUALITY</h4>
                </div>
                <p>We take our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand. Our time on initial planning before any construction begins, to balance all the financial and efficency issues beforehand</p>
          </div>
        </div>
      </div>
    </>
  );
};
