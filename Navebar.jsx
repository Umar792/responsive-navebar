import React, { useState } from "react";
import "./Navebar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navebar() {
  const [clicked, setclicked] = useState(false);
  const toggle = () => {
    setclicked(!clicked);
  };
  return (
    <>
      <div className="navebar">
        <div className="logo">
          <h1>Navebar</h1>
        </div>
        <div>
          <GiHamburgerMenu className="hamburger" onClick={toggle} />
        </div>
        <div className={clicked ? "menus " : " menus mobile"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact-us</a>
            </li>
            <li>
              <a href="#">Pakges</a>
            </li>
            <li>
              <a href="#">Cources</a>
            </li>
            <li className="nave-btn">
              <a href="#">Join-usNow</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navebar;
