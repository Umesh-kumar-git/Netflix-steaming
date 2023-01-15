import React from "react";
import "./Navbar.css";
import { IoIosGlobe} from "react-icons/io";
import { IoMdArrowDropdown} from "react-icons/io";
const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar-container">
        <div className="logo-section"><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" /></div>
        <div className="navbar-section">
            <div className="nav">
          <div className="language-selection">
            <IoIosGlobe />
            <span className="language-section">English</span>
            <IoMdArrowDropdown />
          </div>
          </div>
          <div className="sign_In">
            <span>Sign In</span> </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
