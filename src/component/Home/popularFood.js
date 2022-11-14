import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./popularFood.css";
import "./popularRestaurant.css";
import DisplaySlider from "./displaySlider";
import PopularRestaurant from "./popularRestaurant";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant";
class PopularFood extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: "",
    };
  }
  componentDidMount() {
    fetch(`${restUrl}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }
  render() {
    return (
      <>
        <div className="block grayish low-opacity">
          <div className="fixed-bg"></div>
          <div className="top-mockup">
            <img src="assets/images/resource/mockup2.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                <div className="filters-wrapper">
                  <div className="title1-wrapper text-center">
                    <div className="title1-inner">
                      <span>Your Favourite Food</span>
                      <h2>Popular This Month</h2>
                      <b>In Your City</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popular-food row">
                <div className="col-md-4 col-xs-12">
                  <div className="popular-food-slider">
                    <DisplaySlider
                      restaurantData={this.state.restaurants}
                    ></DisplaySlider>
                  </div>
                </div>
                <div className="col-md-8 col-xs-12">
                  <div className="popular-of-month-wrapper">
                    <div className="popular-of-month">
                     <PopularRestaurant restaurantData={this.state.restaurants}></PopularRestaurant>
                     
                    </div>
                  </div>

                  {/* <div className="rite-meta">
                  <a href="#" title="" className="view-more">
                    view more food
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-mockup">
            <img src="assets/images/resource/mockup1.png" alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default PopularFood;
