import React from "react";
import './Header.css'

const Header = (props) => {
  return (
    <nav className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={props.logo} alt="logo" width="180px" />
        <div>{props.navItems}</div>
        <div>{props.navItems2}</div>
      </div>
    </nav>
  );
};

export default Header;
