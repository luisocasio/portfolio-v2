import React from "react";
import back from "../assets/luluport_SVG/back.svg";
import next from "../assets/luluport_SVG/next.svg";

const Carousel = () => {
  return (
    <div className="carousel_container">
      <div className="back">
        <img src={back} alt="back arrow" />
      </div>
      <div className="carousel">
        Title of Project
        {/* projects go here */}
        <div className="project_buttons">
          <button className="code">CODE</button>
          <button className="view">VIEW</button>
        </div>
      </div>

      <div className="details">
        <div className="project_details">
          <h3>About this Project</h3>
          <p>8 week long project</p>
        </div>
        <div className="stack_details">
          <h3>Tech Stack</h3>
          <p>React</p>
          <p>Javascript</p>
        </div>
      </div>
      <div className="next">
        <img src={next} alt="forward arrow" />
      </div>
    </div>
  );
};

export default Carousel;
