import React from "react";
import "../../css/home_page/Cars.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

const settings = {
  fade: true,
  speed: 3000,
  autoplaySpeed: 4000,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export default function CarSlider() {
  return (
    <section className="p-0 hero__slider-section">
      <Slider {...settings} className="hero__slider">
        <div className="slider__item slider__item-01 mt0">
          <Container>
            <div className="slider__content ">
              <h1 class="display-3 q-1">Are You a Classic Driver?</h1>
              <h1 class="display-3 q-2">Buy Your Dream Vehicle Now</h1>
              <button className="btn reserve__btn mt-4">
                <NavLink to="cars">BUY NOW</NavLink>
              </button>
            </div>
          </Container>
        </div>
        <div className="slider__item slider__item-02 mt0">
          <Container>
            <div className="slider__content ">
              <h1 class="display-3 q-1">Look Forward To Driving?</h1>
              <h1 class="display-3 q-2">You Got It Right Here</h1>
              <button className="btn reserve__btn mt-4">
                <NavLink to="/schools">PRACTICE NOW</NavLink>
              </button>
            </div>
          </Container>
        </div>
        <div className="slider__item slider__item-03 mt0">
          <Container>
            <div className="slider__content ">
              <h1 class="display-3 q-1">Problem With Your Car?</h1>
              <h1 class="display-3 q-2">Best Car Repair Services</h1>
              <button className="btn reserve__btn mt-4">
                <NavLink to="/maintenance">FROM HERE</NavLink>
              </button>
            </div>
          </Container>
        </div>
      </Slider>
    </section>
  );
}
