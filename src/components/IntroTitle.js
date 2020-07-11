import React from "react";
import { FaHtml5, FaReact, FaJs } from "react-icons/fa";

const IntroTitle = () => {
  return (
    <div className="intro_title">
      <div>
        <FaHtml5 />
      </div>
      <div>
        <FaReact />
      </div>
      <div>
        <FaJs />
      </div>
    </div>
  );
};

export default IntroTitle;
