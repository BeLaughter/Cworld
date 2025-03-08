import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-container">
        <div className="flex-item">
          <p className="p-foot">
            Book a free consultation now to discuss how we can help to discover
            your business idea?
          </p>
          <a className="btn btn-warning btn-foot">Get Started Today</a>
        </div>
        <div className="flex-item">
          <p className="p-foot2">
            ADDRESS<br></br>
            <span>123 Creative Street, Design City, Dc 45678</span>
          </p>
          <p className="p-foot2">
            EMAIL<br></br>
            <span>contact.@cworlddesigns.com</span>
          </p>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <h5>CWorld</h5>
          <p>Designing experience that inspire, engage, and elevate brands</p>
          <div>
            <FaFacebookF className="icon blk" />
            <FaYoutube className="icon blk" />
            <FaTwitter className="icon blk" />
            <FaInstagram className="icon blk" />
          </div>
        </div>
        <div className="flex-item">
          <ul>
            <li>
              <h5>Quick Links</h5>
            </li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="flex-item">
          <ul>
            <li>
              <h5>Quick Links</h5>
            </li>
            <li>Policy Update</li>
            <li>Party Sharing</li>
            <li>Our Rights</li>
            <li>Data Protection</li>
            <li>Information</li>
          </ul>
        </div>
        <div className="flex-item">
          <h4>Sign Up Our Newsletter</h4>
          <input
            type="text"
            placeholder="Enter your email"
            className="foot-input"
          ></input>
          <input
            type="submit"
            value="Subcribe Now"
            className="input-btn"
          ></input>
        </div>
      </div>
      <hr></hr>
      <h5 className="text-center">
        © 2025 CWorld. All Rights Reserved.Designed by BLACKFIRE
      </h5>
    </div>
  );
};

export default Footer;
