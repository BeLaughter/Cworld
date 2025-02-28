import React from "react";
import "./Header.css";
import { FaHeart, FaPlus, FaStar } from "react-icons/fa";

import yellow from "../assets/yellow.png";
const Header = () => {
  return (
    <div className="header">
      <div className="flex-container">
        <div className="flex-item1">
          <h1 className="title">
            Launch Into Digital<br></br> Excellence
          </h1>
          <p>
            With a team of skilled professionals, we combine creativity,
            strategy, and technology to help your business thrive in a dynamic
            digital world.
          </p>
          <a href="#" className="btn btn-warning">
            Get Started
          </a>
          <div className="flex-container">
            <div className="view">
              <span>
                4.234 <FaHeart className="iconsz" />
              </span>
              <p>
                Project View <br></br>Last Year
              </p>
            </div>
            <div className="client">
              <div className="yell">
                <span>
                  5000 <FaPlus className="iconsz blk" />
                </span>
                <p>Total clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item2">
          <div className="flex">
            <FaStar className="iconsz blk" />
            <FaStar className="iconsz blk" />
          </div>
          <div className="one">
            <div className="div1">
              <div className="div2"></div>
              <img src={yellow} alt="yellow" className="img1"></img>
            </div>
          </div>
          <div className="two">
            <p>
              24/7 <br></br>
              <span>
                We are in <br></br> touch
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
