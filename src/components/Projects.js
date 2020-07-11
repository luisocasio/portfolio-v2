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
    <div>
      <Carousel className="carousel_container" autoPlay>
        <div>
          <img src={jaems} />
          <p className="legend">Jaemsounds</p>
        </div>
        <div>
          <img src={market} />
          <p className="legend">Market ave.</p>
        </div>
        <div>
          <img src={latte} />
          <p className="legend">Latte Luv</p>
        </div>
      </Carousel>

      <div className="project_buttons">
        <button className="code">CODE</button>
        <button className="view">VIEW</button>
      </div>
    </div>
  );
};

// renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) =>
//   React.ReactNode;
// renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) =>
//   React.ReactNode;

export default Projects;

// <div className="back">
//         <img src={back} alt="back arrow" />
//       </div>
// <img src={jaems} alt="site image" />

// <div className="carousel">
//   <div className="project_buttons">
//     <button className="code">CODE</button>
//     <button className="view">VIEW</button>
//   </div>
// </div>

//   <div className="stack_details">
//     <h3>Tech Stack</h3>
//     <p>React</p>
//     <p>Javascript</p>
//   </div>
// </div>
