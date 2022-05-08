import React from "react";
import { FooterOverlay, Newsletter, SubHeading } from "../../components/";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2>Contact Us</h2>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant">Gerícht</h1>
        <SubHeading
          title={
            '"The best way to find yourself is to lose yourself in the service of others.”'
          }
        />
        <div>
          <FiFacebook color={"#fff"} fontSize={20} />
          <FiTwitter color={"#fff"} fontSize={20} />
          <FiInstagram color={"#fff"} fontSize={20} />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2>Working Hours</h2>
        <p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p> 07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footter__copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
