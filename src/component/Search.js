import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "./search.css";
const lurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component {
  constructor() {
    super();
    this.state = {
      setScroll: false,
      location:'',
      restData:''
    };
  }
  chageValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 300) {
      this.setState({ setScroll: true });
    } else {
      this.setState({ setScroll: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.chageValueOnScroll);
    fetch(`${lurl}`, {method: 'GET'})
    .then((res)=>res.json())
    .then((data)=>{this.setState({location:data})})
   
  }
renderCity = (data) =>{
  if(data){
   return data.map((item)=>{
   return(
    <option value={item.state_id} key={item.state_id}>{item.state}</option>
   ) 
    })
  }
}
handleCity = (event) =>{
  let stateId = event.target.value;
  fetch(`${restUrl}${stateId}`, {method:'GET'})
  .then((res)=>res.json())
  .then((data)=>{this.setState({restData:data})})
}
renderRest = (data) =>{
  if(data){
    return data.map((item)=>{
      return (
        <option value={item.restaurant_id} key={item.id}> {item.restaurant_name} | {item.address}</option>
      )
    })
  }
}
  render() {
    return (
      <>
        <div className="block">
          <div
            className="fixed-bg"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/images/topbg.jpg"
              })`,
            }}
          ></div>
          <div className="restaurant-searching text-center">
            <div className="restaurant-searching-inner">
              <h2>
                Order <span>Food Online From</span> the Best Restaurants
              </h2>
              <form className="restaurant-search-form brd-rd2">
                <div className="row mrg10">
                  <div className="col-md-6 col-sm-6 col-lg-6 col-xs-12">
                    <div className="input-field brd-rd2">
                      <select className="brd-rd2" onChange={this.handleCity}>
                        <option>Select Location</option>
                        {this.renderCity(this.state.location)}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6 col-xs-12">
                    <div className="input-field brd-rd2">
                      {/* <i className="fa fa-map-marker"></i> */}
                      <select className="brd-rd2">
                        <option>Select Restaurant</option>
                      {this.renderRest(this.state.restData)}
                      </select>

                    
                    </div>
                  </div>
       
                </div>
              </form>
              <div className="funfacts">
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="fact-box">
                    <i className="brd-rd50">
                      <img
                        src="assets/images/resource/fact-icon1.png"
                        alt="fact-icon1"
                      />
                    </i>
                    <div className="fact-inner">
                      <strong>
                        <span className="counter">
                          <CountUp end={137} duration={5}></CountUp>
                        </span>
                      </strong>
                      <h5>Restaurant</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="fact-box">
                    <i className="brd-rd50">
                      <img
                        src="assets/images/resource/fact-icon2.png"
                        alt="fact-icon2"
                      />
                    </i>
                    <div className="fact-inner">
                      <strong>
                        <span className="counter">
                          <CountUp end={158} duration={5}></CountUp>
                        </span>
                      </strong>
                      <h5>People Served</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="fact-box">
                    <i className="brd-rd50">
                      <img
                        src="assets/images/resource/fact-icon3.png"
                        alt="fact-icon3"
                      />
                    </i>
                    <div className="fact-inner">
                      <strong>
                        <span className="counter">
                          <CountUp end={659} duration={5}></CountUp>
                        </span>
                        K
                      </strong>
                      <h5>Happy Service</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="fact-box">
                    <i className="brd-rd50">
                      <img
                        src="assets/images/resource/fact-icon4.png"
                        alt="fact-icon4"
                      />
                    </i>
                    <div className="fact-inner">
                      <strong>
                        <span className="counter">
                          <CountUp end={235} duration={5}></CountUp>
                        </span>
                      </strong>
                      <h5>Regular users</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={
                this.state.setScroll
                  ? "left-scooty-mockup easein"
                  : "left-scooty-mockup"
              }
              src="assets/images/resource/restaurant-mockup1.png"
              alt="restaurant-mockup1.png"
            />
            <img
              className="bottom-clouds-mockup"
              src="assets/images/resource/clouds.png"
              alt="clouds.png"
            />
          </div>
        </div>
      </>
    );
  }
}
export default Search;
