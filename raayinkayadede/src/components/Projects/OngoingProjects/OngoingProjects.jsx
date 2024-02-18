import React from "react";
import Style from "./ongoingprojects.module.css";
import Image1 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image2 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image3 from "../../../assets/images/IMG-20230822-WA0013.jpg";
import Image4 from "../../../assets/images/IMG-20230915-WA0010.jpg";
import Image5 from "../../../assets/images/IMG-20230915-WA0007.jpg";
import Image6 from "../../../assets/images/IMG-20230915-WA0009.jpg";
import Image7 from "../../../assets/images/IMG-20230822-WA0013.jpg";
import Image8 from "../../../assets/images/IMG-20230915-WA0010.jpg";

export const OngoingProjects = () => {
  return (
    <>
      <section className={Style.section}>
        <h1 className={Style.headertext}>Ongoing Projects</h1>
        <div className={Style.maincontainer}>
          <div className={Style.container1}>
            <div className={Style.images}>
              <img src={Image1} alt="nophoto" className={Style.photo} />
              <img src={Image2} alt="nophoto" className={Style.photo} />
            </div>
            <div className={Style.label}>
              <h1>
                Plot 198 Cadastral Zone B07 <br />
                <span>Katampe District, Abuja</span>
              </h1>
            </div>

            <div className={Style.text}>
              <h2>Proposed Development - </h2>
              <p>
                A block of 4nos five bedrooms terrace apartment & 3nos two
                bedroom flats
              </p>
              <h3>Site Plan - </h3>
              <p>
                Main Building, Walkways, 16 <br /> parking spaces, green area.{" "}
                <br />
                1468.90<span style={{ color: "#ff1100" }}>sqm</span>
              </p>
            </div>
          </div>
          <div className={Style.container2}>
            <div className={Style.images}>
              <img src={Image3} alt="nophoto" className={Style.photo} />
              <img src={Image4} alt="nophoto" className={Style.photo} />
            </div>
            <div className={Style.label}>
              <h1>
                The Marriot 1, Plot 198 Cadastral Zone B07 <br />
                <span>Katampe District, Abuja</span>
              </h1>
            </div>

            <div className={Style.text}>
              <h2>Proposed Development - </h2>
              <p>
                The building is designed for your luxury living which provides
                an exciting experiences and ambience for a befitting home for
                class and style
              </p>
              <h3>Site Plan - </h3>
              <p>
                Main Building, Walkways, 16 <br /> parking spaces, green area.{" "}
                <br />
                1468.60<span style={{ color: "#ff1100" }}>sqm</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
