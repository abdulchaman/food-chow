import React from "react";
import "./popularRestaurant.css";
const PopularRestaurant = (props) => {
  const renderRestaurant = ({ restaurantData }) => {
    if (restaurantData) {
      return restaurantData.slice(4, 8).map((item) => {
        return (
          <div
            className="pop-dish wow fadeIn"
            data-wow-delay="0.1s"
            key={item._id}
          >
            <div className="poplr-dish">
              <div className="img-logo-rest">
                <img src={item.restaurant_thumb} alt={item.restaurant_name} />
              </div>

              <div className="dish-meta">
                <span>$10.00–$30.00</span>
                <h4>
                  <a href="#" title="">
                    Tequila & Lime hake
                  </a>
                </h4>
              </div>
            </div>
            <div className="item-meta">
              <img alt="" src="assets/images/resource/restaurant-logo2.png" />
              <div>
                <span>{item.restaurant_name}</span>
                <p>{item.address}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return <>{renderRestaurant(props)}</>;
};
export default PopularRestaurant;
