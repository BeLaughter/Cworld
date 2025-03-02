import React from "react";
import "./Meet.css";
import rec1 from "../assets/Rec1.png";
import rec2 from "../assets/Rec2.png";
import rec3 from "../assets/Rec3.png";
const Meet = () => {
  return (
    <div className="meet">
      <div className="flex-container">
        <div className="flex-item1">
          <h1 className="title">Where Creativity Meets</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <a href="#" className="btn btn-warning">
            View More
          </a>
        </div>
        <div className="flex-item2">
          <div className="box" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-center blok">Happy Clients</h2>
            <img src={rec1} alt="yellow" className="img-blk"></img>
          </div>
          <div
            className="box mr50"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-center blok">Strong Team</h2>
            <img src={rec2} alt="yellow" className="img-blk"></img>
          </div>
          <div className="box" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-center blok">Creativity Grows</h2>
            <img src={rec3} alt="yellow" className="img-blk"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
