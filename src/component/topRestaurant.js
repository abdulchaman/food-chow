import React, { Component } from "react";
import "./topRestaurant.css"
import { Link } from "react-router-dom";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant";
class TopRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: "",
    };
  }
  renderRestaurant = (data) => {
    if (data) {
      return data.slice(0, 6).map((item, index) => {
        return (
          <li
            className="wow bounceIn"
            data-wow-delay={`${index}` * 0.5 + "s"}
            key={item.restaurant_id}
          >
            <div className="top-restaurant">
              <Link className="brd-rd50" to="" title="Restaurant 1">
                <img src={item.restaurant_thumb} alt={item.restaurant_name} />
              </Link>
            </div>
          </li>
        );
      });
    }
  };
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
        <div className="block remove-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Website for Restaurant and Cafe</span>
                    <h2>Top Restaurants</h2>
                    <p>
                      Things that get tricky are things like burgers and fries,
                      or things that are deep-fried. We do have a couple of
                      burger restaurants that are capable of doing a good job
                      transporting but it's Fries are almost impossible.
                    </p>
                  </div>
                </div>
                <div className="top-restaurants-wrapper">
                  <ul className="restaurants-wrapper style2">
                    {this.renderRestaurant(this.state.restaurants)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TopRestaurant;
