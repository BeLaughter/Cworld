import React from "react";
import "./Client.css";
import { FaQuoteLeft } from "react-icons/fa";

const Clncard = (props) => {
  return (
    <div className="ccard">
      <div>
        <FaQuoteLeft className="iconsz blk" />
      </div>
      <div>
        <p className="c-clint">{props.text}</p>
      </div>
      <div className="flex">
        <div className="">
          <img src={props.src} alt="person1" className="c-img" />
        </div>
        <div>
          <p className="p-mind">
            {props.text2}
            <br></br>
            <span>{props.text3}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clncard;
