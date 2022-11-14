import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./component/Home/Home";
import Listing from "./component/Listing/listingApi";

const Routing =()=>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={Listing}></Route>
        </BrowserRouter>
    )
}
export default Routing;