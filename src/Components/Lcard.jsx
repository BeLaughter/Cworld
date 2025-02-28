import React from "react";
import "./Life.css";
import { FaDesktop, FaHeart } from "react-icons/fa";
const Lcard = (props) => {
  return (
    <div className="lcard">
      <div>
        <FaDesktop className="iconsz blk" />
      </div>
      <div>
        <h2 className="cardh1">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div>
        <a href="#" className="btn btn-life">
          {props.a}
        </a>
      </div>
    </div>
  );
};

export default Lcard;
