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
      <div>
        <h1 className={Style.headertext}>Ongoing Projects</h1>

        <div className={Style.container}>
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
          <div className={Style.maincontainer2}>
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



        </div>
      </div>
    </>
  );
};

export const OngoingProjectsMobile = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center mt-16">
        <h1 className="text-4xl text-red-500 mb-10">Ongoing Projects</h1>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-8">
            <div className="flex items-start justify-start w-full">
              <img src={Image1} alt="nophoto" className="w-full h-64 rounded-md shadow-md object-cover" />
             
            </div>
            <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-4 mt-4 rounded-lg">
              <h1 className="text-2xl">
                Plot 198 Cadastral Zone B07 <br />
                <span className="font-bold">Katampe District, Abuja</span>
              </h1>
            </div>
            <div className="mt-4 text-left">
              <h2 className="text-xl mb-1">Proposed Development - </h2>
              <p className="text-lg">
                A block of 4nos five bedrooms terrace apartment & 3nos two bedroom flats
              </p>
              <h3 className="text-xl mt-2">Site Plan - </h3>
              <p className="text-lg">
                Main Building, Walkways, 16 <br /> parking spaces, green area. <br />
                1468.90<span className="text-red-500">sqm</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8">
          <div className="flex items-start justify-start w-full">
              <img src={Image3} alt="nophoto" className="w-full h-64 object-cover rounded-md shadow-md" />
           
            </div>
            <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-4 mt-4 rounded-lg">
              <h1 className="text-2xl">
                The Marriot 1, Plot 198 Cadastral Zone B07 <br />
                <span className="font-bold">Katampe District, Abuja</span>
              </h1>
            </div>
            <div className="mt-4 text-left">
              <h2 className="text-xl mb-1">Proposed Development - </h2>
              <p className="text-lg">
                The building is designed for your luxury living which provides an exciting experiences and ambience for a befitting home for class and style
              </p>
              <h3 className="text-xl mt-2">Site Plan - </h3>
              <p className="text-lg">
                Main Building, Walkways, 16 <br /> parking spaces, green area. <br />
                1468.60<span className="text-red-500">sqm</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
