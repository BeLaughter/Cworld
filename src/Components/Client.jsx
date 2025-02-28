import React from "react";
import "./Client.css";
import cln1 from "../assets/cln1.png";
import cln2 from "../assets/cln2.png";
import cln3 from "../assets/cln3.png";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Clncard from "./Clncard";

const Clint = () => {
  return (
    <div className="clint">
      <div className="flex-container">
        <div className="flex-item1">
          <h1 className="title ">Hear From Our Clients</h1>
          <p>
            At Cworld, Our strength lies in the passion and expertise of our
            team. We’re a group of innovative thinkers, design enthusiasts, and
            problem.
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
      <div className="flex-container cardcln">
        <div>
          <Clncard
            text="Cworld transformed our website into modern, user-friendly platform. Their attention to detail and creative approach exceeded our expectations"
            src={cln1}
            text2="Sophia Martin"
            text3="Managing Director"
          />
        </div>
        <div>
          <div className="ccard2">
            <div>
              <FaQuoteLeft className="iconsz" />
            </div>
            <div>
              <p className="c-clint">
                Cworld transformed our website into modern, user-friendly
                platform. Their attention to detail and creative approach
                exceeded our expectations
              </p>
            </div>
            <div className="flex">
              <div className="">
                <img src={cln2} alt="person1" className="c-img" />
              </div>
              <div>
                <p className="p-mind">
                  Ava Collins<br></br>Graphics designer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Clncard
            text="Cworld transformed our website into modern, user-friendly platform. Their attention to detail and creative approach exceeded our expectations"
            src={cln3}
            text2="Emily Johnson"
            text3="Managing Director"
          />
        </div>
      </div>
    </div>
  );
};

export default Clint;
