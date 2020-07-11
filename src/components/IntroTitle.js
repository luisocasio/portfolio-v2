import React from "react";
import { FaHtml5, FaReact, FaJs, FaPython } from "react-icons/fa";

const IntroTitle = () => {
  return (
    <div className="intro_title">
      <div>
        <FaHtml5 />
        <li>HTML</li>
      </div>
      <div>
        <FaReact />
        <li>React</li>
      </div>
      <div>
        <FaJs />
        <li>JavaScript</li>
      </div>
      <div>
        <FaPython />
        <li>Python</li>
      </div>
    </div>
  );
};

export default IntroTitle;
