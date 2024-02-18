import React from "react";
import Style from "./chooseus.module.css";
import Worker from "../../assets/images/figmapic 1 1.png";
export const ChooseUs = () => {
  return (
    <>
     <div className={Style.section}>
     <div className={Style.container}>
        <div className={Style.content1}>
          <img src={Worker} alt="nophoto" className={Style.worker} />
          <div className={Style.quote}>
            <h1>
              <span>"</span>Building with passion, precision, and pride.
              <span>"</span>
            </h1>
          </div>
        </div>
        <div className={Style.content2}>
        <h1 className={Style.headertext}>Why Choose Us</h1>
        <p> We implore you to Choose us as your construction company for your projects  because we offer extensive experience, <br/>top-notch quality, reliable project management, innovative techniques, clear communication, unwavering safety standards, a client-centric approach, and a commitment to community engagement, ensuring your project's success and making a positive impact.</p>
        </div>
      </div>
     </div>
    </>
  );
};
