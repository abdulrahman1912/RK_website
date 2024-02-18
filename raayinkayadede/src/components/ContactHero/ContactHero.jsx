import React from "react";
import Style from "./contacthero.module.css";
import {TextField, Button} from "@mui/material";

export const ContactHero = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.contacthero}>
          <div className={Style.designtext}>
            <h4 className={Style.text}>
              We'd love to hear <br /> from you{" "}
            </h4>
            <p className={Style.subtext}>
              Contact us using the form below and we'll get back to you right
              away
            </p>
          </div>
        </div>
      </div>

      <div className={Style.form}>
        <div className={Style.formcontent}>
          <div className={Style.formheader}>
            <h3>
              Fill out the form and we'll be in touch as soon as possible!
            </h3>
          </div>
          <div className={Style.inputs}>
            
            <TextField
              fullWidth
              required
              id="outline-required"
              label="Full Name"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Email"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
              fullWidth
              required
              id="outline-required"
              label="Phone Number"
              size="Normal"
              style={{ marginBottom: 45 }}
            />

            <TextField
            multiline={true}
            rows={4}
              fullWidth
              required
              id="outline-required"
              label="Message"
              placeholder="How can we help?"
              size="Normal"
              style={{ marginBottom: 45}}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};
