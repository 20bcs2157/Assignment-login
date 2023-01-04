import React from "react";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT ICONS
import { SiTwitter, SiInstagram } from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import Fade from "react-reveal/Fade";

const contact = () => {
  return (
    <>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1 style={{ textDecoration: "none" }}>EasyMyTrip</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: "1.5rem",
                      height: "2.5rem",
                      marginTop: ".2rem",
                    }}
                    label="Any query and Help contact us"
                  />
                </div>
                <div style={{ marginTop: "calc(1.5vh + 1.5vw)" }}>
                  <a
                    className="icons"
                    target="blank"
                    href="https://twitter.com"
                  >
                    <SiTwitter className="contactIcons ml-3" />
                  </a>
                  <a
                    className="icons"
                    target="blank"
                    href="https://www.instagram.com"
                  >
                    <SiInstagram className="contactIcons ml-3" />
                  </a>
                  <a className="icons" href="mailto:Care@easymytrip.com">
                    <FiMail className="contactIcons ml-3" />
                  </a>
                  <a className="icons" href="tel:011 - 43131313,43030303">
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h5 text-center text-white m-5">
            ©2023 All Rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
    </>
  );
};

export default contact;
