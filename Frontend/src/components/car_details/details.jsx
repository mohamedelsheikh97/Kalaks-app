import React from "react";
import "../../css/car_details/details.css";

export default function Details(props) {
  const { car } = props;
  console.log(car);
  console.log(car.owner?.location);
  const x = new Date().getFullYear();
  console.log(x);
  return (
    <div>
      <article class="card car-details label-primary new ">
        <div class="card-body-2 det-m-body">
          <div class="d-flex flex-md-row align-items-md-start align-items-center row card-body-3">
            <div class="w-100 details-container-page">
              <br />
              <div class="container-fluid fs-5 card-body-4">
                <div class="row rows-cont card-body-4">
                  <div class="col-8 card-body-4">
                    <ul>
                      <li className="list-item">
                        <i class="fas fa-dollar-sign icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Price:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.price} EGP
                        </span>
                      </li>
                      <li className="list-item">
                        <i class="fas fa-users icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Model:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.model}
                        </span>
                      </li>
                      <li className="list-item">
                        <i class="fas fa-calendar icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Transmission:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.transmission}{" "}
                        </span>
                      </li>
                      <li className="list-item">
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Motor:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.transmission}{" "}
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li className="list-item">
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Color:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.color}{" "}
                        </span>
                      </li>
                      <li className="list-item">
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Year:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.year}
                        </span>
                      </li>
                      <br />
                      <a id="location-button" href={car.owner?.location}>
                        <button class="btn btn-secondary col-5 bb  ">
                          <i class="fas fa-location-arrow"></i>{" "}
                          <strong>Location</strong>{" "}
                        </button>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
