import React from "react";
import Style from "./homesection.module.css";
import Image1 from "../../assets/images/IMG-20230915-WA0009.jpg";

export const HomeSection = () => {
  return (
    <>
      <section className={Style.whoweare}>
        <div className={Style.cardcontainer}>
          <div className={Style.card1}>
            <div className={Style.square}></div>
            <img src={Image1} alt="photo" className={Style.cardimg} />
          </div>
          <div className={Style.card2}>
            <h1 className={Style.headertext}>Who We Are</h1>

            <p className={Style.sectiontext}>
              RAAYIN'KAYADEDE is a real estate firm which venture in building &
              civil engineering construction, facility mangement, infrastructure
              development and investments. We have strong commitment to bespoke
              designs and quality workmanship, dedicated to creating intriguing
              interiors witn high quality standards.
            </p>

            <p className={Style.sectiontext}>
              Our Team of multi-disciplined, talented and dedicated design
              experts provide comprehensive range of services which includes
              architectural and engineering designs, interior design, facility
              management, procurement and project management services for
              residential, commercial and hospitality projects. <br />
              At RAAYIN'KAYADEDE, we approach each project with a collaborative
              and honest sensibility as we believe in expressing our client's
              brand identity through design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
