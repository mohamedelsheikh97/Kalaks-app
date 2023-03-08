import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/car_details/carDetails.css";
import { useParams } from "react-router-dom";
import "./det.css";

export default function Accdetails() {
  let baseURL = "http://localhost:5000/accessories";
  let cartURL = "http://localhost:5000/cart";
  const { id } = useParams();
  const [accessory, setaccessory] = useState({});
  const [mycart, setmycart] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/${id}`)
      .then((res) => {
        setaccessory(res.data);
        console.log(res.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  delete accessory["_id"];
  delete accessory["__v"];

  const addtoCart = () => {
    axios
      .post(cartURL, accessory)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    console.log(accessory);
    window.location.reload();
  };

  return (
    <div className="container mt-3">
      <div className="row acc-row-container">
        <div className="main col-5 no acc-image-1">
          <img
            src={`http://localhost:5000/${accessory?.image}`}
            className="p"
          />
        </div>
        <div className="col-7">
          <div class="container my-5 container-details">
            <div class="row">
              <div class="col-md-7">
                <div class="main-description px-2">
                  <div className="d-flex flex-md-row flex-column justify-content-between mm ">
                    {" "}
                    <h3 class="text-uppercase acc-name">
                      {accessory.name}{" "}
                    </h3>{" "}
                  </div>
                  <div class="price-area my-4">
                    <p class="old-price mb-1">
                      <del>Old Price</del>
                      <span class="old-price-discount text-danger">
                        {" "}
                        (Discount)
                      </span>
                    </p>
                    <p class="new-price text-danger text-bold mb-1">
                      Price : {accessory.price}
                    </p>
                  </div>

                  <div class="product-details my-4">
                    <p class="description text-secondary text-bold mb-1 mt-5 fs-4">
                      Color: {accessory.color}
                    </p>
                  </div>

                  <div class="buttons d-flex my-5">
                    <div class="block">
                      <button
                        class="shadow btn custom-btn"
                        onClick={() => {
                          addtoCart();
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-details my-4">
                  <p class="description text-secondary text-bold mb-1 mt-5 fs-4">
                    Description: <br />
                    {accessory.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
