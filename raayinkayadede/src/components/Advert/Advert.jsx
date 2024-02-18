import React from "react";
import Style from "./advert.module.css"
import Bgimage from "../../assets/images/IMG-20230923-WA0024.jpg";
import {Button} from "../../components";
export const Advert = () => {
    return(
        <>
        <div className={Style.section}>
        <img src={Bgimage} alt="nophoto" className={Style.background}/>
        <div className={Style.bgoverlay}></div>
        <div className={Style.container}>
            <div className={Style.imagestyle}>
                 {/* <img src={Worker} alt="nophoto" className={Style.image}/> */}
            </div>
            <div className={Style.advertcontainer}>
            <div className={Style.textcontainer}>
                <div className={Style.content}>
                    <h3>12+</h3>
                    <div className={Style.rule}></div>
                    <h4>Completed Projects</h4>
                    <p>We have completed a lot of projects successfully with our experience.</p>
                </div>
                <div className={Style.content}>
                <h3>100%</h3>
                <div className={Style.rule}></div>
                    <h4>Satisfied Customers</h4>
                    <p>Every family who live in our bulidings are 100% satisfied with our support and construction.</p>
                </div>
                <div className={Style.content}>
                <h3>2648+</h3>
                <div className={Style.rule}></div>
                    <h4>Working Hours</h4>
                    <p>We have worked a lot in the past 19 years to provide best apartments to live.</p>
                </div>
            </div>
            <div className={Style.advertwriteup}>
                <h1>We believe that business can be a powerful force for <span>good</span>.</h1>
                <Button text={"Contact Us"} style={{marginTop:50}}/>
                
            </div>
            </div>
            
        </div>


        </div>
        
        
        
        </>
    )
}