import React, { useEffect, useState } from "react";
import "./accessories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

export default function Accessory() {
  let baseURL = "http://localhost:5000/accessories";
  let [accessories, setaccessories] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setaccessories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let navigate = useNavigate();
  const sliderClick = (accessoryID) => {
    navigate(`/accessorydetails/${accessoryID}`);
  };

  return (
    <div className="featured mt-1">
      <section className="common__section ">
        <Container className="text-center">
          <h1 class="display-4 text-uppercase text-center text-light">
            Accessories Listing
          </h1>
        </Container>
      </section>
      <div className="container">
        <div className="filter-top">
          <div className="grid-list-btn"></div>
          <h1 className="text-uppercase font-weight-bold accessory-title">
            Featured Accessories
          </h1>
          <div className="dropdown"></div>
        </div>
        <div className="row ">
          {accessories.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item1 mb-4">
                  <img
                    class="img-fluid mb-4 acc-image-card"
                    src={`http://localhost:5000/${card.image}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-4 mt-4 acc-name">{`${card.name}`}</h4>

                  <div class="d-flex justify-content-center mb-4">
                    <div class="card-price px-2">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span class="font-weight-bold acc-price">
                        $ {card.price}
                      </span>
                    </div>
                  </div>
                  <a
                    class="btn btn-warning font-weight-bold"
                    onClick={() => sliderClick(card._id)}
                  >
                    Accessory Details
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
