import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayListing from "./displayListing";
import "./listing.css";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: "",
    };
  }
  render() {
    return (
      <>
        <div className="mainListing">
          <div className="row justify-content-between">
            <div className="filter"></div>

            <DisplayListing
              restList={this.state.restaurantList}
            ></DisplayListing>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    axios.get(`${restUrl}${mealId}`).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}
export default Listing;
