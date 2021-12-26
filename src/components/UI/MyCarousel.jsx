import { Card } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
      <div className="shopify-section index-section" id="shopify-section-2">
        <div className="grid-overflow-section">
          <Card
            hoverable
            style={{ width: 267 }}
            cover={
              <img
              style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/Alaska-Brown-Sweater-Sweatshirt1_540x.jpg?v=1599221129"
              />
            }
          >
            <Card.Meta id="card-desc" title="Alaska Sweater" description="£35.00" />
           </Card>
          <Card
            hoverable
            style={{ width: 267 }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/03-047403-1_540x.png?v=1564502421"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Butterflies In My Stomach T-shirt"
              description="£19.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 267 }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-pixie-striped-zip-up-hood-knit-cardigan_540x.jpg?v=1634048021"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Pixie Striped Zip Up Hood Knit Cardigan"
              description="£65.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 267 }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-free-spirit-embroidered-corduroy-straight-leg-pants-2_540x.jpg?v=1634141278"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Free Spirit Embroidered Corduroy Pants"
              description="£60.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: "267px" }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-celestial-mystic-rings-3_720x.jpg?v=1631124740"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Mystic Rings Set"
              description="£15.00"
            />
          </Card>

          <Card
            hoverable
            style={{ width: "267px" }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-celestial-mystic-rings-3_720x.jpg?v=1631124740"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Mystic Rings Set"
              description="£15.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: "267px" }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-celestial-mystic-rings-3_720x.jpg?v=1631124740"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Mystic Rings Set"
              description="£15.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: "267px" }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-celestial-mystic-rings-3_720x.jpg?v=1631124740"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Mystic Rings Set"
              description="£15.00"
            />
          </Card>
          <Card
            hoverable
            style={{ width: "267px" }}
            cover={
              <img
                style={{width: '100%'}}
                alt="example"
                src="https://cdn.shopify.com/s/files/1/0266/0731/products/minga-london-celestial-mystic-rings-3_720x.jpg?v=1631124740"
              />
            }
          >
            <Card.Meta
              id="card-desc"
              title="Mystic Rings Set"
              description="£15.00"
            />
          </Card>
          
        </div>
      </div>
      </Carousel>
      ;
    </div>
  );
};

export default MyCarousel;
