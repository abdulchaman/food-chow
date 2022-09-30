import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./component/Home";

const Routing =()=>{
    return(
        <BrowserRouter>
            <Route path="/" component={Home}></Route>
        </BrowserRouter>
    )
}
export default Routing;