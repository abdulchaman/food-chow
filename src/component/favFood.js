import React, { Component } from "react";
import { Link } from "react-router-dom";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant";
class FavFood extends Component {
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
  renderFavFood = (data) => {
    if (data) {
      return data.slice(0, 3).map((item,index) => {
        return (
          <div className="col-md-4 col-sm-6 col-lg-4" key={item._id}>
            <div className="popular-dish-box wow fadeIn" data-wow-delay={`${index}`*2 + "s"}>
              <div className="popular-dish-thumb">
                <Link to="" title="">
                  <img className="rest-img-top"
                    src={item.image_gallery[1]}
                    alt={item.restaurant_name}
                  />
                </Link>
                <span className="post-rate yellow-bg brd-rd2">
                  <i className="fa fa-star-o"></i> {item.average_rating}
                </span>
                <span className="post-likes brd-rd4">
                  <i className="fa fa-heart-o"></i> 12
                </span>
              </div>
              <div className="popular-dish-info">
                <h4>
                  <Link to="" title="">
                    {item.restaurant_name}
                  </Link>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <span className="price">Rs {item.cost}</span>
                <Link
                  className="brd-rd2"
                  to=""
                  title="Order Now"
                >
                  Order Now
                </Link>
                <div className="restaurant-info">
                  <img
                    src="assets/images/resource/restaurant-logo1.png"
                    alt="restaurant-logo1.png"
                  />
                  <div className="restaurant-info-inner">
                    <h6>
                      <Link to="" title="">
                        {item.restaurant_name}
                      </Link>
                    </h6>
                    <span className="red-clr">{item.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Your Favourite Food</span>
                    <h2>Choose & Enjoy</h2>
                  </div>
                </div>
                <div className="row">
                {this.renderFavFood(this.state.restaurants)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FavFood;
