import React, { Component } from "react";
import Search from "./Search";
import TopRestaurant from "./topRestaurant";
import FavFood from "./favFood";
import PopularFood from "./popularFood";
class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>
          <Search></Search>
          <TopRestaurant></TopRestaurant>
          <FavFood></FavFood>
          <PopularFood></PopularFood>
        </div>
      </>
    );
  }
}
export default Home;


