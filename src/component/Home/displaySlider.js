import React from "react";
import "./popularFood.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DisplaySlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  const renderSlider = ({ restaurantData }) => {

    if (restaurantData) {
      return restaurantData.slice(0, 3).map((item) => {
        return (
          <div className="dishes-caro">
           
              <div className="dish-item" key={item._id}>
                <figure>
                  <img src={item.restaurant_thumb} alt={item.restaurant_name} className="rest-img-top" />
                </figure>
                <div className="item-meta">
                  <img
                    src="assets/images/resource/restaurant-logo2.png"
                    alt=""
                  />
                  <div>
                    <span>{item.restaurant_name}</span>
                    <p>{item.address}</p>
                  </div>
                </div>
                <div className="caro-dish-name">
                  <h4>{item.restaurant_name}</h4>
                  <span>$10.00–$30.00</span>
                </div>
              </div>
          
          </div>
        );
      });
    }
  };
  return <>
   <Slider {...settings}>
   {renderSlider(props)}
   </Slider>
  </>;
};
export default DisplaySlider;
