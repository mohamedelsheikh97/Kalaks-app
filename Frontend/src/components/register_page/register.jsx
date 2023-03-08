import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/register_page/register.css";

export default function Register() {
  const [errorValue, seterrorValue] = useState("");
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000/users/signup";
  const [formValue, setformValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const getFormValues = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const goTORegister = () => {
    axios
      .post(baseURL, formValue)
      .then((res) => {
        console.log();
        if (res.data.error) {
          seterrorValue(res.data.error);
          console.log(res.data.error);
        } else {
          console.log("RegisterSucced");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="login-container">
      <div class="row login-row">
        <div class="col-md-6 offset-md-3">
          <div class="card my-2">
            <div class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <img
                  src="/sign.png"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3 input-1">
                <input
                  name="fname"
                  type="text"
                  class="form-control"
                  id="FirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="lname"
                  type="text"
                  class="form-control"
                  id="LastName"
                  placeholder="Last Name"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="phone"
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={getFormValues}
                />

                <div className="text-center">
                  <span className="text-danger  fs-4">
                    {errorValue.toLocaleUpperCase()}
                  </span>
                </div>
              </div>
              <div class="text-center input-1">
                <button
                  onClick={goTORegister}
                  class="btn btn-color px-5 mb-5 w-100"
                >
                  Register
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Have Account?{" "}
                <a class="text-dark fw-bold">
                  {" "}
                  <NavLink class="c-a" to="/login">
                    Login
                  </NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
