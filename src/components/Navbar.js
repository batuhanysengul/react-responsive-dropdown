import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import Dropdown from './Dropdown'
import Button from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if(window.innerWidth < 960){
        setDropdown(false);
    }else{
        setDropdown(true)
    }
  }

  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
        setDropdown(false);
    }else{
        setDropdown(false)
    }
  }


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          LOGO
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <FaCaretDown className='iconDown'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
