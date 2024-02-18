import React from "react";
import Style from "./home.module.css";
import { Navigation, HeroSection, HomeSection, Services, Advert, ChooseUs, OngoingProjects, UpcomingProjects, Footer} from "../../components";
export const Home = () => {
  return (
    <>
      <Navigation />
      <HeroSection/>
      <HomeSection/>
      <Services/>
      <Advert/>
      <ChooseUs/>
      <OngoingProjects/>
      <UpcomingProjects/>
      <Footer/>

    </>
  );
};
