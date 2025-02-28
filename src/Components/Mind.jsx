import React from "react";
import "./Mind.css";
import rec4 from "../assets/rec4 (1).png";
import rec5 from "../assets/rec4 (2).png";
import rec6 from "../assets/rec4 (3).png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Mind = () => {
  return (
    <div className="mind">
      <div className="flex-container">
        <div className="flex-item1">
          <h1 className="title ">Meet Our Creative Minds</h1>
          <p>
            Our team of talented minds has been crafting innovative solutions
            for your business needs. From digital marketing strategies to
            personalized customer experiences, we offer a unique blend of
            creativity and expertise.
          </p>
        </div>
        <div className="flex-item2">
          <a className="btn">
            <FaArrowLeft className="icon blk" />
          </a>
          <a className="btn">
            <FaArrowRight className="icon blk" />
          </a>
        </div>
      </div>
      <div className="flex-container mpad">
        <div className="flex-item3">
          <img src={rec4} alt="person1" className="mind-img" />
          <div className="flex">
            <div>
              <p className="p-mind">
                Liam Scott<br></br>UI/UI Designer
              </p>
            </div>
            <div>
              <FaFacebookF className="icon blk sm-icon" />
              <FaTwitter className="icon blk sm-icon" />
              <FaInstagram className="icon blk sm-icon" />
            </div>
          </div>
        </div>
        <div className="flex-item3">
          <img src={rec5} alt="person1" className="mind-img" />
          <div className="flex">
            <div>
              <p className="p-mind">
                Emma Reeds<br></br>Developer
              </p>
            </div>
            <div>
              <FaFacebookF className="icon blk sm-icon" />
              <FaTwitter className="icon blk sm-icon" />
              <FaInstagram className="icon blk sm-icon" />
            </div>
          </div>
        </div>
        <div className="flex-item3">
          <img src={rec6} alt="person1" className="mind-img" />
          <div className="flex">
            <div>
              <p className="p-mind">
                Ava Collins<br></br>Graphics designer
              </p>
            </div>
            <div>
              <FaFacebookF className="icon blk sm-icon" />
              <FaTwitter className="icon blk sm-icon" />
              <FaInstagram className="icon blk sm-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mind;
