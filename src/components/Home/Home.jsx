import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import Header from "../Header/Header";
import "./Home.css";
import MyCarousel from "../UI/MyCarousel";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div className="main-content">
      {/* GIFT SHOP */}
      <div className="shopify-section index-section--hero">
        <a href="*">
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0266/0731/files/capa-desktop_28e397d8-4cb1-4e8a-993c-f0fe055b8149_1512x.png?v=1638789927"
            alt="hero_img"
          />
        </a>
        <div class="hero__link">
          <a href="*" class="btn" tabindex="0">
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="shopify-section " id="shopify-section-1">
        <div className="shopify-section_item">
          <a>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0266/0731/files/SWETER_9cfbe95b-8803-4d31-9341-32df83064ec9_360x.png?v=1638794755"
              alt="img1"
            />
          </a>
        </div>

         <div className="shopify-section_item">
          <a>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0266/0731/files/STOCK_dd77ceb7-420c-4014-835b-ee1a3d223b62_360x.png?v=1638794399"
              alt=""
            />
          </a>
        </div>

        <div className="shopify-section_item">
          <a>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0266/0731/files/GIFT_ac24b3ee-c196-4491-8d81-45c473094d52_360x.png?v=1638792266"
              alt=""
            />
          </a>
        </div>

        <div className="shopify-section_item">
          <a>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0266/0731/files/COOL_fb9f8847-050f-4091-8e40-1cefd2e64a68_360x.png?v=1638792324"
              alt=""
            />
          </a>
        </div>
      </div> 

      {/* MOST WANTED */}
      <div className="hero-img">
        <a href="*">
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0266/0731/files/xmas-shop-desktopss_e29001bc-3b26-4acb-8c98-3fd6ded18832_1512x.png?v=1638545529"
            alt="hero_img"
          />
        </a>
      </div>

      <MyCarousel />

      <div className="hero-img">
        <a href="*">
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0266/0731/files/nevermind-desktop_1512x.png?v=1637923876"
            alt="hero_img"
          />
        </a>
      </div>

      <MyCarousel />
      <div className="hero-img">
        <a href="*">
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0266/0731/files/desktop1_fa9a331c-0a64-4bfe-a930-2f0d259d5bfd_1512x.png?v=1631095114"
            alt="hero_img"
          />
        </a>
      </div>
      <MyCarousel />

      <div className="square-collection index-section">
        <div className="container-square">
          {/* 1st block */}
          <div className="block">
            <a href="*">
              <img
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0266/0731/files/desktop2AAA_720x.png?v=1638803857"
                alt=""
              />
            </a>
          </div>
          {/* 2nd block */}
          <div className="block">
            <a href="*">
              <img
                style={{ width: "100%" }}
                src="https://cdn.shopify.com/s/files/1/0266/0731/files/2_3c8099ab-99cf-4653-bd13-b6e73b0c455b_720x.png?v=1631275963"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-img">
        <a href="*">
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0266/0731/files/mystic-desktoop_1512x.png?v=1637924031"
            alt="hero_img"
          />
        </a>
      </div>
      <MyCarousel />

      {/* 70% */}
      <div className="orange">
        <div>
          <a href="*">
            <img
              style={{ width: "100%" }}
              className="block-sale"
              src="https://cdn.shopify.com/s/files/1/0266/0731/files/SALE_6a0220e1-a7a2-4f22-b1ce-c80b0efbf3a2_1512x.png?v=1638274939"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="instagram">
        <div className="instagram-title" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.02667em" }}>STALK US @MINGALONDON</h2>
        </div>

        <div className="instagram-content">
          <ul>
            <li>
              <img
                style={{ width: "100%" }}
                src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/269792867_1538868656482238_7019116398079490845_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FiOPIodUaKQAX95ION9&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT9dJr1-Q6SJzR51zXEL2_8U_Kl_8oKsbZVM02cMjXoXMg&oe=61CB2D41"
                alt="instagram post by mingalondon on 25 December 2021"
              />
              {/* <div class="item-backdrop">
                <i class="icon-instagram"></i>
                </div> */}
            </li>
            <li>
              <img
                style={{ width: "100%" }}
                src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/269792867_1538868656482238_7019116398079490845_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FiOPIodUaKQAX95ION9&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT9dJr1-Q6SJzR51zXEL2_8U_Kl_8oKsbZVM02cMjXoXMg&oe=61CB2D41"
                alt="instagram post by mingalondon on 25 December 2021"
              />
            </li>
            <li>
              <img
                style={{ width: "100%" }}
                src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/269792867_1538868656482238_7019116398079490845_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FiOPIodUaKQAX95ION9&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT9dJr1-Q6SJzR51zXEL2_8U_Kl_8oKsbZVM02cMjXoXMg&oe=61CB2D41"
                alt="instagram post by mingalondon on 25 December 2021"
              />
            </li>
            <li>
              <img
                style={{ width: "100%" }}
                src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/269792867_1538868656482238_7019116398079490845_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FiOPIodUaKQAX95ION9&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT9dJr1-Q6SJzR51zXEL2_8U_Kl_8oKsbZVM02cMjXoXMg&oe=61CB2D41"
                alt="instagram post by mingalondon on 25 December 2021"
              />
            </li>
            <li>
              <img
                style={{ width: "100%" }}
                src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/269792867_1538868656482238_7019116398079490845_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=FiOPIodUaKQAX95ION9&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AT9dJr1-Q6SJzR51zXEL2_8U_Kl_8oKsbZVM02cMjXoXMg&oe=61CB2D41"
                alt="instagram post by mingalondon on 25 December 2021"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* NewsLetter */}
      <div className="shopify-section">
        <div className="newsletter">
          <div>
            <h3>NEWSLETTER</h3>
            <p>Sign up for news and get 15% off on your first order!</p>
            <form action="">
              <input
                type="email"
                value=""
                placeholder="Enter your email"
                className="newsletter-email"
                autocorrect="off"
                autocapitalize="off"
              ></input>
              <button
                type="submit"
                class="btn"
                style={{ background: "#1c1c1c" }}
              >
                <span class="form__submit--large">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
