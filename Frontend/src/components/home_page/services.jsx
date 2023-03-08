import React from "react";
import "../../css/home_page/services.css";
import { Link } from "react-router-dom";

export default function Servives() {
  return (
    <section className="services mt-5" id="services">
      <div className="container service-container">
        <h1 class="display-4 text-uppercase text-center sevice-title">
          Our Services
        </h1>
        <div className="box-container row">
          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-car service-icon"></i>
            </div>
            <h4 className="service-sections">CAR SELLING</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/cars">
                READ MORE
              </Link>
            </button>
          </div>

          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-tools service-icon"></i>
            </div>
            <h4 className="service-sections">PARTS REPAIR </h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/maintenance">
                READ MORE
              </Link>
            </button>
          </div>
          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-car-side service-icon"></i>
            </div>
            <h4 className="service-sections">DRIVING SCHOOLS</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/schools">
                READ MORE
              </Link>
            </button>
          </div>
          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-dolly service-icon"></i>
            </div>
            <h4 className="service-sections">CAR ACCESSORIES</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/accessories">
                READ MORE
              </Link>
            </button>
          </div>
          <div className="box col-lg-4 mx-2">
            <div>
              <i className="fas fa-check-circle service-icon"></i>
            </div>
            <h4 className="service-sections">24/7 SUPPORT</h4>
            <p className="service-par">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/">
                READ MORE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
