import React from "react";
import "../../css/home_page/slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ReactCardSlider = (props) => {
  let navigate = useNavigate();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  console.log(props.shops);
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const sliderClick = (shopId) => {
    navigate(`/carshop/${shopId}`);
  };

  return (
    <div className="container mb-5">
      <h1 class="display-4 text-uppercase text-center mt-5 mb-5 shop-slider-title">
        Our Shops
      </h1>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider">
          {props.shops.map((slide, index) => {
            return (
              <div
                className="slider-card"
                key={index}
                onClick={() => sliderClick(slide._id)}
              >
                <img class="shop-slider" src={slide.image} alt="" />
                <p className="text-center m-0 shop-slider-name">{slide.name}</p>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};
export default ReactCardSlider;
