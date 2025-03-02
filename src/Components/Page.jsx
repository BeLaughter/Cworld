import React from "react";
import "./Page.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Page = (props) => {
  return (
    <div className="page">
      <h1
        className="title text-center ptop"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        {" "}
        {props.h1}
      </h1>
    </div>
  );
};

export default Page;
