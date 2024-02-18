import React from "react";
import Style from "./about.module.css"
import {Navigation, AboutHero, AboutSection, AboutTeam, Footer} from "../../components"

export const About = () => {
    return(
        <>
      <Navigation/>
      <AboutHero/>
      <AboutSection/>
      <AboutTeam/>
      <Footer/>

    </>
    )
}