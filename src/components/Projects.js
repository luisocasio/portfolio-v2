import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import back from "../assets/luluport_SVG/back.svg";
import next from "../assets/luluport_SVG/next.svg";
import jaems from "../assets/jaems.png";
import market from "../assets/market.png";
import latte from "../assets/latte-site.jpg";

const Projects = () => {
  return (
    <Carousel className="carousel_container">
      <div>
        <img src={jaems} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={market} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={latte} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Projects;

// <div className="back">
//         <img src={back} alt="back arrow" />
//       </div>
// <img src={jaems} alt="site image" />
{
  /* <img src={market} alt="site image" /> */
}

// <div className="carousel">
//   <div className="project_buttons">
//     <button className="code">CODE</button>
//     <button className="view">VIEW</button>
//   </div>
// </div>

// <div className="details">
//   <div className="project_details">
//     <h3>About this Project</h3>
//     <p>8 week long project</p>
//   </div>

//   <div className="stack_details">
//     <h3>Tech Stack</h3>
//     <p>React</p>
//     <p>Javascript</p>
//   </div>
// </div>
