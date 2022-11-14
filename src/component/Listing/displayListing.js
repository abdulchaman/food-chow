import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./listing.css";

const DisplayListing = (props) => {
  const renderData = ({ restList }) => {
    if (restList) {
      return restList.map((item) => {
        return (
          <div className="listingItem" id={item._id}>
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="listing-title-image">
                  <img
                    src={item.restaurant_thumb}
                    alt={item.restaurant_name}
                    className="img-fluid"
                  ></img>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="listing-content-text">
                  <h3>{item.restaurant_name}</h3>
                  <h4>{item.rating_text}</h4>
                  <h4>{item.cost}</h4>
                  <h4>{item.address}</h4>
                  <div>
                  {item.mealTypes.map((meal)=>{
                    return(
                      <div className="meal-name">{meal.mealtype_name}&nbsp;</div>
                    )
                  })}
                  </div>
                 <div>
                 {item.cuisines.map((cuisine)=>{
                    return(
                      <div className="meal-name">{cuisine.cuisine_name}&nbsp;</div>
                    )
                  })}
                 </div>
                  
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="listingContent">{renderData(props)}</div>
    </>
  );
};
export default DisplayListing;
