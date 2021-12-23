import React from "react";
import logo from "../../images/minga-logo.png";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header_nav">
          <div className="nav-logo">
            <img className="nav-logo_img" src={logo} alt="" />
          </div>
          <div className="nav-list">
            <li>NEW IN</li>
            <li>MOST WANTED</li>
            <li>CLOTHING</li>
            <li>ACCESSORIES</li>
            <li>COLLECTIONS</li>
            <li style={{ color: "#e83525" }}>SALE</li>
          </div>

          <div className="nav-icons">
            <SearchOutlined className="nav-icons_link" />
            <UserOutlined className="nav-icons_link" />
            <HeartOutlined className="nav-icons_link" />
            <ShoppingOutlined className="nav-icons_link" />
          </div>
        </div>
      </div>
      <div id="outer">
        <div>
          <div id="loop">
            <div id="content">
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    🎁 <u>Xmas Delivery Cut-Off Dates</u>
                  </b>
                  "🎁"
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>FREE SHIPPING ON ORDERS OVER £60</u>
                  </b>{" "}
                  💸📦
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="https://www.mingalondon.com/pages/returns-refunds">
                  <b>
                    <u>30 DAY FREE RETURNS</u>
                  </b>{" "}
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>STUDENTS GET 15% OFF </u>
                  </b>
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>BUY NOW, PAY LATER WITH CLEARPAY</u>
                  </b>
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    🎁 <u>Xmas Delivery Cut-Off Dates</u>
                  </b>{" "}
                  🎁
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>FREE SHIPPING ON ORDERS OVER £60</u>
                  </b>{" "}
                  💸📦
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>30 DAY FREE RETURNS</u>
                  </b>{" "}
                  💸📦
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>STUDENTS GET 15% OFF </u>
                  </b>
                </a>
              </span>
              <span className="announcement-maring-span">
                <a href="*">
                  <b>
                    <u>BUY NOW, PAY LATER WITH CLEARPAY</u>
                  </b>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
