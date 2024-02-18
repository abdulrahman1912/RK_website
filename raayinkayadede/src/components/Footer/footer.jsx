import React from "react";
import Style from "./footer.module.css";
import Icon1 from "../../assets/icons/pngicons/Group 3.png";
import Icon2 from "../../assets/icons/pngicons/Group 4.png";
import Icon3 from "../../assets/icons/pngicons/Group 5.png";

export const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.main}>
          <div className={Style.container}>
            <div className={Style.logo}>
              <h1 style={{ color: "#ff1100" }}>RAAYIN'KAYADEDE</h1>
              <h1 style={{ color: "#ffffff" }}>NIGERIAN LIMITED</h1>
              <h2 style={{ color: "#ffffff" }}>
                <span style={{ color: "#ffffff" }}>Rc:</span>1829733
              </h2>
            </div>
            <div className={Style.text}>
              <p>
                RAAYIN’KAYADEDE NIGERIA LIMITED is a construction company that
                is associated and involved in building construction.
              </p>
            </div>

            {/* <div>
        <h1 style={{color:"#fff", fontSize:200}}><i class="fa-solid fa-draw-polygon"></i></h1>
        </div> */}
          </div>

          <div className={Style.container}>
            <h1 className={Style.links}>Company</h1>
            <h2 className={Style.links}>Projects</h2>
            <h2 className={Style.links}>About us</h2>
            <h2 className={Style.links}>Services</h2>
          </div>
          <div className={Style.container}>
            <h1 className={Style.resource}>Resources</h1>

            <h2 className={Style.resource}>
              Want to make an inquiry.. <br />
              Reach us on these platforms
            </h2>

            <div className={Style.icons}>
              <div>
                <img src={Icon1} alt="" />
              </div>
              <div>
                <img src={Icon2} alt="" />
              </div>
              <div>
                <img src={Icon3} alt="" />
              </div>
            </div>
          </div>
          </div>
          <div className={Style.copyright}>
            <p>Copyright &copy; 2023 Powered By ProtonTech Technologies</p>
          </div>
       
      </footer>
    </>
  );
};
