import React, { useState } from "react";
import "../../css/dashboard_page/dashboard.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Dashboard() {
  let [Formname, setname] = useState("");
  let [status, setStatus] = useState("New");
  const [image, setImage] = useState("");
  let { id } = useParams();

  let baseUrl = "http://localhost:5000/newcars";
  let baseUrl1 = "http://localhost:5000/usedcars";
  let navigate = useNavigate();
  let formData = new FormData();
  const [formValue, setFormValue] = useState({
    name: "",
    model: "",
    transmission: "",
    motor: 0,
    color: "",
    price: 0,
    year: 0,
    distance: 0,
    owner: id,
  });

  const getFormValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const nameInputChangeHandler = (event) => {
    setname(event.target.value);
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const formSubissionHandler = (event) => {
    event.preventDefault();

    if (status === "New") {
      formData.append("name", formValue.name);
      formData.append("model", formValue.model);
      formData.append("transmission", formValue.transmission);
      formData.append("motor", formValue.motor);
      formData.append("color", formValue.color);
      formData.append("price", formValue.price);
      formData.append("owner", formValue.owner);
      formData.append("image", image);

      console.log(formValue);
      axios
        .post(baseUrl, formData)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      navigate(`/admin/${id}`);
      window.location.reloade();
    }
    if (status === "Used") {
      formData.append("name", formValue.name);
      formData.append("model", formValue.model);
      formData.append("transmission", formValue.transmission);
      formData.append("motor", formValue.motor);
      formData.append("color", formValue.color);
      formData.append("price", formValue.price);
      formData.append("year", formValue.year);
      formData.append("distance", formValue.distance);
      formData.append("owner", formValue.owner);
      formData.append("image", image);
      axios
        .post(baseUrl1, formData)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      navigate(`/admin/${id}`);
      window.location.reloade();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="carForm">
          <div onSubmit={formSubissionHandler}>
            <div className="form-control">
              <img
                width={150}
                src={image === "" ? "" : URL.createObjectURL(image)}
              />
              <input
                type="file"
                name="image"
                onChange={handleChange}
                multiple
              />

              <label htmlFor="newUsed">Status :</label>
              <select name="newUsed" id="newUsed" onChange={statusHandler}>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
              {/* -----------------------NAME---------------------------- */}

              <div>
                <label htmlFor="name">Brand :</label>
                <select
                  name="name"
                  id="selection"
                  onChange={getFormValues}
                  onClick={nameInputChangeHandler}
                >
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="hyundai">hundayi</option>
                  <option value="kia">kia</option>
                  <option value="Audi">Audi</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Peugeot">Peugeot</option>
                </select>
                {/* -------------------------MODEL------------------------------ */}
                {Formname === "bmw" && <label htmlFor="name">Model :</label>}
                {Formname === "bmw" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="x7">X5</option>
                    <option value="x6">X6</option>
                    <option value="x5">x5</option>
                  </select>
                )}
                {Formname === "mercedes" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "mercedes" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="A-CLASS">A-CLASS</option>
                    <option value="C-CLASS">C-CLASS</option>
                    <option value="E-CLASS">E-CLASS</option>
                  </select>
                )}
                {Formname === "hyundai" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "hyundai" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="Elantra">Elantra</option>
                    <option value="Tocsan">Tocsan</option>
                    <option value="Sonata">Sonata</option>
                  </select>
                )}
                {Formname === "kia" && <label htmlFor="name">Model :</label>}
                {Formname === "kia" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="cerato">cerato</option>
                    <option value="sportage">sportage</option>
                    <option value="Rio">Rio</option>
                  </select>
                )}
                {Formname === "Audi" && <label htmlFor="name">Model :</label>}
                {Formname === "Audi" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="RS7">RS7</option>
                    <option value="A4">A4</option>
                    <option value="Q3">Q3</option>
                  </select>
                )}
                {Formname === "Volkswagen" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "Volkswagen" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="Golf">Golf</option>
                    <option value="Polo">Polo</option>
                    <option value="Tiguan">Tiguan</option>
                  </select>
                )}
                {Formname === "Peugeot" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "Peugeot" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="408">408</option>
                    <option value="508">508</option>
                    <option value="208">208</option>
                  </select>
                )}

                {/* ----------------------------TRANSMISSION------------------------ */}
                <label htmlFor="transmission">Transmission :</label>
                <select
                  name="transmission"
                  id="transmission"
                  onChange={getFormValues}
                >
                  <option value="manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
                {/* -----------------------------MOTOR--------------------------------- */}
                <label htmlFor="motor">Motor :</label>
                <select name="motor" id="motor" onChange={getFormValues}>
                  <option value="1000">1000</option>
                  <option value="2000">1100</option>
                  <option value="2000">1200</option>
                  <option value="2000">1300</option>
                  <option value="2000">1400</option>
                  <option value="2000">1500</option>
                  <option value="2000">1600</option>
                  <option value="2000">1700</option>
                  <option value="2000">1800</option>
                  <option value="2000">1900</option>
                  <option value="2000">2000</option>
                </select>
                {/* -----------------------------COLOR------------------------------------ */}
                <label htmlFor="color">Color :</label>
                <input type="text" name="color" onChange={getFormValues} />
                {/* --------------------------------PRICE------------------------------------- */}
                <label htmlFor="price">price :</label>
                <input type="text" name="price" onChange={getFormValues} />
              </div>

              {status === "Used" && (
                <div>
                  {/* -----------------------------year------------------------------------ */}
                  <label htmlFor="year">Model Year :</label>
                  <input type="text" name="year" onChange={getFormValues} />

                  {/* -----------------------------kilometers------------------------------------ */}
                  <label htmlFor="Kilometers">Kilometers :</label>
                  <input type="text" name="distance" onChange={getFormValues} />
                </div>
              )}
              <div className="form-actions">
                <button onClick={formSubissionHandler}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
