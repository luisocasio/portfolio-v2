import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const Nav = () => {
  const [change, setChange] = useState(false);

  const changePosition = 0;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  const barAnimation = useSpring({
    backgroundColor: change ? "#1a2b66" : "rgba(0,0,0,0)",
    height: change ? "40px" : "0px",
    color: change ? "#d617bd" : "#fff",
    zIndex: 200,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "70px",
    top: 0,
    left: 0,
  });
  if (typeof window !== undefined) {
    return (
      <animated.div className="nav" style={barAnimation}>
        <div className="title">
          <Link to="#">
            <h5>FULL STACK WEB DEVELOPER</h5>
          </Link>
        </div>

        <div className="links">
          <Link to="#">SKILLS</Link>
          <Link to="#">PROJECTS</Link>
          <Link to="#">CONTACT</Link>
        </div>
      </animated.div>
    );
  } else {
    return <h1>Error</h1>;
  }
};

export default Nav;
