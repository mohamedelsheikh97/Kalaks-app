import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/car_shop/carshop.css";
import axios from "axios";

export default function Carshop() {
  let { id } = useParams();
  // let { name } = useParams();
  let baseUrl = "http://localhost:5000/carsshops";
  let baseUrl1 = "http://localhost:5000/newcars";
  let [shop, setshop] = useState([]);
  let [cars, setcars] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        setshop(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(baseUrl1)
      .then((response) => {
        setcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(shop);
  console.log(cars);
  let filteredCars = cars.filter((car) => car.owner?._id === id);
  console.log(filteredCars);
  let navigate = useNavigate();
  const sliderClick = (shopId) => {
    navigate(`/cardetails/${shopId}`);
  };
  return (
    <div className="kk">
      <section>
        <div class="container-fluid intro">
          <img src={shop.image} id="c-wrench" />
          <ul>
            <li className="big">
              <a href={`${shop?.facebook}`} target={"_blank"}>
                <i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href={`${shop?.location}`} target={"_blank"}>
                <i class="fas fa-thumbtack fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div class="hh">
            <div class="typewriter">Our Cars .....</div>
          </div>
          <br class="black" />
          <br />

          <div class="container ">
            <div className="row ">
              {filteredCars.map((card) => {
                return (
                  <div class="col-lg-4 col-md-6 mb-2">
                    <div class="rent-item1 mb-4">
                      <img
                        class="img-fluid mb-4"
                        src={`http://localhost:5000/${card?.image[0]}`}
                        alt=""
                      />
                      <h4 class="text-uppercase mb-4 mt-3">{`${card?.name} ${card?.model}`}</h4>
                      <div class="d-flex justify-content-center mb-4">
                        <div class="card-price px-2">
                          <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                          <span class="font-weight-bold">EG {card?.price}</span>
                        </div>
                      </div>
                      <div className="m-2 "></div>
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
      </section>
    </div>
  );
}
