import React from "react";
import "../../css/home_page/Header.css";
import CarSlider from "./carSlider";
import { Brands } from "./brands";
import Welcome from "./welcome";
import { Cards } from "./cards";
import ReactCardSlider from "./reactCardSlider";
import Servives from "./services";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let baseURL = "http://localhost:5000/carsshops";
  let [shops, setshops] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setshops(response.data);
        console.log(response.data);
        console.log(response.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      image: "/اكسسوارات.png",
      title: "Elkersh motors",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];
  return (
    <header>
      <CarSlider></CarSlider>
      <Brands></Brands>
      <Welcome></Welcome>
      <Servives></Servives>
      <ReactCardSlider shops={shops} />
      <Cards></Cards>
      
    </header>
  );
};

export default Header;
