import React from "react";
import "./Life.css";
import Lcard from "./Lcard";
const Life = () => {
  return (
    <div className="life">
      <h1 className="text-center title">Bringing Ideas to Life</h1>
      <p className="text-center">
        At Cworld’s we craft designs that inspire, engage, and deliver
        exceptional user experiences.<br></br> Our services are tailored to meet
      </p>
      <div className="lcards flex-container">
        <Lcard
          title="UX/UI Design"
          a="Read More"
          text="We believe in the power of innovation to revolutionize our industry."
        />
        <Lcard
          title="Development"
          a="Read More"
          text="We understand that every user has a unique perspective and experience."
        />
        <Lcard
          title="Graphics Design"
          a="Read More"
          text="We believe in the power of innovation to revolutionize our industry."
        />
        <Lcard
          title="Mobile App"
          a="Read More"
          text="We understand that every user has a unique perspective and experience."
        />
      </div>
    </div>
  );
};

export default Life;
