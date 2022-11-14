import React, { Component } from "react";
import "./topRestaurant.css";
import { Link } from "react-router-dom";
const url = "https://zomatoajulypi.herokuapp.com/quicksearch";
class TopRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }
  renderRestaurant = (data) => {
    if (data) {
      return data.slice(0, 6).map((item, index) => {
        return (
          <Link to={`/listing/${item.mealtype_id}`}>
            <li
              className="wow bounceIn"
              data-wow-delay={`${index}` * 0.5 + "s"}
              key={item.restaurant_id}
            >
              <div className="top-restaurant">
                  <div className="top-restaurant-img">
                  <img src={item.meal_image} alt={item.mealtype} />
                  </div>
                  
                  <h4>{item.mealtype}</h4>
              
              </div>
            </li>
          </Link>
        );
      });
    }
  };
  componentDidMount() {
    fetch(`${url}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
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
                    {this.renderRestaurant(this.state.mealType)}
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
