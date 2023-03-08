import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/car_details/carDetails.css";
import Details from "./details";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CarDetails() {
  const [newCars, setnewCars] = useState([]);
  const [usedCars, setusedCars] = useState([]);
  const [allCars, setallCars] = useState([]);

  const newCarsURL = "http://localhost:5000/newcars";
  const usedCarsURL = "http://localhost:5000/usedcars";
  // let shopUrl = "http://localhost:5000/carsshops";
  let { id } = useParams();

  const [imgs, setimgs] = useState([]);
  const [car, setcar] = useState({});
  // let [shops, setshops] = useState([]);
  // const [relatedcars, setrelatedcars] = useState([]);
  const [wordData, setWordData] = useState("");
  const handleClick = (index) => {
    setWordData(imgs[index]);
  };
  useEffect(() => {
    axios
      .get(newCarsURL)
      .then((res) => {
        setnewCars(res.data);
        console.log(res.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(usedCarsURL)
      .then((res) => {
        setusedCars(res.data);
        console.log(res.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    let x = [...newCars, ...usedCars];
    setallCars(x);
    console.log(allCars);
    for (let e of allCars) {
      if (e._id == id) {
        setcar(e);
        setimgs(e.image);
      }
    }
  }, [car, usedCars]);

  useEffect(() => {
    setWordData(imgs[0]);
    console.log(car);
  }, [imgs, car]);
  let navigate = useNavigate();

  const sliderClick = (shopId) => {
    window.open(`/cardetails/${shopId}`);
  };
  const shopClick = (shopId) => {
    window.open(`/carshop/${shopId}`);
  };
  let filteredCars = allCars.filter((carr) => carr._id != id);
  filteredCars = filteredCars.filter(
    (carr) => carr.owner?._id == car.owner?._id
  );

  console.log(filteredCars);
  return (
    <div className="container mt-3">
      <div className="d-flex flex-md-row flex-column justify-content-between mm ">
        {" "}
        <h3 class="text-uppercase car-name">{car?.name} </h3>{" "}
        <img
          src={car.owner?.image}
          width={"150px"}
          className="d-flex image-shop"
          alt="img"
          onClick={() => shopClick(car.owner?._id)}
        />
      </div>
      <div className="row main-details">
        <div className="main col-7 no">
          <img src={`http://localhost:5000/${wordData}`} className="p" />
          <div className="flex_row">
            {imgs.map((data, i) => {
              return (
                <div className="thumbnail" key={i}>
                  <img
                    id="po"
                    src={`http://localhost:5000/${data}`}
                    onClick={() => handleClick(i)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-5">
          <Details car={car}> </Details>
        </div>
      </div>
      <div class="row relatedcars mb-5">
        <h1 class="display-4 text-uppercase text-center cars-related-title">
          RELATED CARS
        </h1>{" "}
        {filteredCars.map((car) => {
          return (
            <div className="col-4 related-imgs">
              <div class="wrapper  ">
                <div class="card cont-imgs front-face">
                  <img
                    class="relatedimg"
                    src={`http://localhost:5000/${car?.image[0]}`}
                    alt="Flip Card"
                  />
                </div>
                <div class="card back-face">
                  <img
                    src={`http://localhost:5000/${car.owner?.image}`}
                    alt="Flip Card"
                    onClick={() => shopClick(car.owner?._id)}
                    className="klo"
                  />
                  <div class="info">
                    <div class="title">{car.name}</div>
                    <h4> 2023 </h4> <br />
                    <br />
                  </div>
                  <a>
                    <button
                      class="button accept-btn"
                      onClick={() => sliderClick(car?._id)}
                    >
                      More Details
                    </button>{" "}
                  </a>
                  <br /> <br />
                  <ul>
                    <a href={`${car.owner?.facebook}`} target={"_blank"}>
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href={`${car.owner?.location}`} target={"_blank"}>
                      <i class="fas fa-thumbtack fa-x" aria-hidden="true">
                        {" "}
                      </i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
         
    </div>
  );
}
