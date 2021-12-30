import React from "react";
import "./Footer.css";
import Instagram from "../../images/icons/instagram.svg"
import Facebook from "../../images/icons/facebook.svg"
import Spotify from "../../images/icons/spotify.svg"
import Pinterest from "../../images/icons/pinterest.svg"
import Tiktok from "../../images/icons/tiktok.svg"


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-container_info">
          <div className="footer-container_info-block">
            <h4 className="footer-title">MY ACCOUNT</h4>
            <p>Track My Order</p>
            <p>Order History</p>
            <p>Student Discount</p>
          </div>
          <div className="footer-container_info-block">
            <h4 className="footer-title" >CUSTOMER CARE</h4>
            <p>FAQs</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Size Guide</p>
            <p>contuct Us</p>
          </div>
          <div className="footer-container_info-block">
            <h4 className="footer-title" >ABOUT US</h4>
            <p>About Us</p>
            <p>Ethical Fashion & Sustainability</p>
            <p>Wholesale</p>
          </div>
          <div className="footer-container_info-block">
            <h4 className="footer-title">LEGAL</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="footer-icons">
          <a href="*">
            <img src={Instagram} alt="" />
          </a>
          <a href="*">
            <img src={Facebook} alt="" />
          </a>
          <a href="*">
            <img src={Spotify} alt="" />
          </a>
          <a href="*">
            <img src={Pinterest} alt="" />
          </a>
          <a href="*">
            <img src={Tiktok} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
