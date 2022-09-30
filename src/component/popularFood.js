import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class PopularFood extends Component {
  constructor() {
    super();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
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
              <div className="col-md-4 col-xs-12">
                <div className="dishes-caro">
                  <Slider {...settings}>
                    <div className="dish-item">
                      <figure>
                        <img
                          src="assets/images/resource/dish-caro1.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="item-meta">
                        <img
                          src="assets/images/resource/restaurant-logo2.png"
                          alt=""
                        />
                        <div>
                          <span>Jagnetina Na Raznju</span>
                          <p>68 5th Avenue New York </p>
                        </div>
                      </div>
                      <div className="caro-dish-name">
                        <h4>Korean Bibimbap Yamyam</h4>
                        <span>$10.00–$30.00</span>
                      </div>
                    </div>
                    <div className="dish-item">
                      <figure>
                        <img
                          src="assets/images/resource/dish-caro1.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="item-meta">
                        <img
                          src="assets/images/resource/restaurant-logo3.png"
                          alt=""
                        />
                        <div>
                          <span>Central Caffe Pizzeria</span>
                          <p>68 5th Avenue New York </p>
                        </div>
                      </div>
                      <div className="caro-dish-name">
                        <h4>Korean Bibimbap Yamyam</h4>
                        <span>$10.00–$30.00</span>
                      </div>
                    </div>
                    <div className="dish-item">
                      <figure>
                        <img
                          src="assets/images/resource/dish-caro1.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="item-meta">
                        <img
                          src="assets/images/resource/restaurant-logo4.png"
                          alt=""
                        />
                        <div>
                          <span>Dream Food By Opaq</span>
                          <p>68 5th Avenue New York </p>
                        </div>
                      </div>
                      <div className="caro-dish-name">
                        <h4>Korean Bibimbap Yamyam</h4>
                        <span>$10.00–$30.00</span>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-md-8 col-xs-12">
                <div className="popular-of-month">
                  <div className="pop-dish wow fadeIn" data-wow-delay="0.1s">
                    <div className="poplr-dish">
                      <img src="assets/images/resource/round-pic1.jpg" alt="" />
                      <div className="dish-meta">
                        <span>$10.00–$30.00</span>
                        <h4>
                          <a href="#" title="">
                            Tequila & Lime hake
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="item-meta">
                      <img
                        alt=""
                        src="assets/images/resource/restaurant-logo2.png"
                      />
                      <div>
                        <span>Jagnetina Na Raznju</span>
                        <p>68 5th Avenue New York </p>
                      </div>
                    </div>
                  </div>
                  <div className="pop-dish wow fadeIn" data-wow-delay="0.2s">
                    <div className="poplr-dish">
                      <img src="assets/images/resource/round-pic2.jpg" alt="" />
                      <div className="dish-meta">
                        <span>$10.00–$30.00</span>
                        <h4>
                          <a href="#" title="">
                            Maximus nibh facilisis
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="item-meta">
                      <img
                        alt=""
                        src="assets/images/resource/restaurant-logo3.png"
                      />
                      <div>
                        <span>Central Caffe Pizzeria</span>
                        <p>68 5th Avenue New York </p>
                      </div>
                    </div>
                  </div>
                  <div className="pop-dish wow fadeIn" data-wow-delay="0.3s">
                    <div className="poplr-dish">
                      <img src="assets/images/resource/round-pic3.jpg" alt="" />
                      <div className="dish-meta">
                        <span>$10.00–$30.00</span>
                        <h4>
                          <a href="#" title="">
                            Hendrerit nisi venenatis
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="item-meta">
                      <img
                        alt=""
                        src="assets/images/resource/restaurant-logo4.png"
                      />
                      <div>
                        <span>Dream Food By Opaq</span>
                        <p>68 5th Avenue New York </p>
                      </div>
                    </div>
                  </div>
                  <div className="pop-dish">
                    <div
                      className="poplr-dish wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <img src="assets/images/resource/round-pic4.jpg" alt="" />
                      <div className="dish-meta">
                        <span>$10.00–$30.00</span>
                        <h4>
                          <a href="#" title="">
                            Grilled Shrimp Scampi
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="item-meta">
                      <img
                        alt=""
                        src="assets/images/resource/restaurant-logo5.png"
                      />
                      <div>
                        <span>Fabio Al Porto Ristorante</span>
                        <p>68 5th Avenue New York </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rite-meta">
                  <a href="#" title="" className="view-more">
                    view more food
                  </a>
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
