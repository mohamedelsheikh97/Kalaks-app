import React, { useEffect, useState } from "react";
import "../../css/car_page/carCards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CarCards() {
  let baseURL1 = "http://localhost:5000/newcars";
  let baseURL2 = "http://localhost:5000/usedcars";
  let [cars, setcars] = useState([]);
  let [newcars, setNewcars] = useState([]);
  let [usedcars, setUsedcars] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL1)
      .then((response) => {
        setNewcars(response.data);
        console.log(response.data);
        console.log(response.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(baseURL2)
      .then((response) => {
        setUsedcars(response.data);
        console.log(response.data);
        console.log(response.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    let x = [...newcars, ...usedcars];
    setcars(x);
  }, [newcars, usedcars]);

  let navigate = useNavigate();
  const sliderClick = (shopId) => {
    navigate(`/cardetails/${shopId}`);
  };
  return (
    <div class="container-fluid">
      <div class="container pt-1 pb-1">
        <h1 class="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
        <div class="btns mt-1 mb-5 d-flex justify-content-center">
          <button
            class="btn btn-warning m-1 px-3"
            onClick={() => {
              let x = [...newcars, ...usedcars];
              setcars(x);
            }}
          >
            ALL
          </button>
          <button
            class="btn btn-warning m-1 px-3"
            onClick={() => {
              setcars(newcars);
            }}
          >
            NEW
          </button>
          <button
            class="btn btn-warning m-1 px-3"
            onClick={() => {
              setcars(usedcars);
            }}
          >
            USED
          </button>
        </div>
        <div class="row">
          {cars.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item mb-4">
                  <img
                    class="img-fluid mb-4"
                    src={`http://localhost:5000/${card.image[0]}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-4 mt-3">{`${card.name} ${card.model}`}</h4>
                  <div class="d-flex justify-content-center mb-4 font-weight-bold">
                    {/* <div class="px-2">
                      <i class="fa fa-car text-warning mr-1"></i>
                      <span>{card.year}</span>
                    </div> */}
                    <div class="px-2 border-left">
                      <i class="fa fa-cogs text-warning mr-1"></i>
                      <span>{card.transmission}</span>
                    </div>
                    <div class="px-2 border-left">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span>EG {card.price}</span>
                    </div>
                  </div>
                  <a
                    class="btn btn-warning px-3 car-button"
                    href=""
                    onClick={() => sliderClick(card._id)}
                  >
                    CAR DETAILS
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
