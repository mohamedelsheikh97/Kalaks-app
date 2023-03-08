import React, { useEffect, useState } from "react";
import "../../css/home_page/cards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Cards() {
  let baseURL = "http://localhost:5000/newcars";
  let [cars, setcars] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(cars);
  let navigate = useNavigate();
  const sliderClick = (shopId) => {
    navigate(`/cardetails/${shopId}`);
  };
  const shopClick = (shopId) => {
    window.open(`/carshop/${shopId}`);
  };
  return (
    <div className="featured mt-5">
      <div className="container">
        <h1 class="display-4 text-uppercase text-center featured-cars mt-5">
          Featured Cars
        </h1>
        <div className="row featured-cars-row">
          {cars.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item1 mb-4">
                  <img
                    class="img-fluid mb-4"
                    src={`http://localhost:5000/${card.image[0]}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-3 mt-3">{`${card.name} ${card.model}`}</h4>
                  <div class="d-flex justify-content-center mb-4 cardddd">
                    <div class="card-price px-2">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span class="font-weight-bold">EG {card.price}</span>
                    </div>
                  </div>
                  <div className="m-2">
                    <img
                      src={card.owner?.image}
                      alt=""
                      width="50px"
                      class="owner-img mt-1"
                      onClick={() => shopClick(card.owner?._id)}
                    />
                  </div>
                  <a
                    class="btn btn-warning px-3 font-weight-bold mt-3"
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
