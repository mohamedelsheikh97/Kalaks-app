import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/Navs.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Navs = () => {
  function getAuthToken() {
    return localStorage.getItem("authToken");
  }
  const token = getAuthToken();
  function removeAuthToken() {
    localStorage.removeItem("authToken");
  }
  function handleClick() {
    removeAuthToken();
    window.location.reload();
  }
  let baseURL = "http://localhost:5000/cart";
  let [mycart, setmycart] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setmycart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Navbar bg="light" expand="lg" sticky="top" fixed="top">
      <Container>
        <NavLink className="nav-link" to="/">
          <Navbar.Brand href="#home" className="logoo">
            {" "}       
            <div class="loader">
              <svg
                class="car"
                width="102"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(2 1)"
                  stroke="#002742"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    class="car__body"
                    d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                    stroke-width="3"
                  />
                  <ellipse
                    class="car__wheel--left"
                    stroke-width="3.2"
                    fill="rgb(246, 172, 77)"
                    cx="83.493"
                    cy="30.25"
                    rx="6.922"
                    ry="6.808"
                  />
                  <ellipse
                    class="car__wheel--right"
                    stroke-width="3.2"
                    fill="rgb(246, 172, 77)"
                    cx="46.511"
                    cy="30.25"
                    rx="6.922"
                    ry="6.808"
                  />
                  <path
                    class="car_line car_line--top"
                    d="M22.5 16.5H2.475"
                    stroke-width="3"
                  />
                  <path
                    class="car_line car_line--middle"
                    d="M20.5 23.5H.4755"
                    stroke-width="3"
                  />
                  <path
                    class="car_line car_line--bottom"
                    d="M25.5 9.5h-19"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <span className="name p-2 logo-name">KALAKS</span>
            </div>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              CARS
            </NavLink>
            <NavLink className="nav-link" to="/accessories">
              ACCESSORIES
            </NavLink>
            <NavLink className="nav-link" to="/schools">
              SCHOOLS
            </NavLink>
            <NavLink className="nav-link" to="/maintenance">
              MAINTENANCE
            </NavLink>
          </Nav>
          <Nav>
            {!token && (
              <NavLink id="lastnav" to="/login">
                <i class="fas fa-user-circle"></i>
              </NavLink>
            )}
          </Nav>
          <Nav>
            <a class="nav-item nav-link" href="/mycart">
              <i class="fas fa-cart-plus fs-4"></i>
            </a>
          </Nav>
          {!mycart.length == 0 && <span>{mycart.length}</span>}
          {token && (
            <NavLink NavLink onClick={handleClick} className="nav-link" to="/">
              <i class="fas fa-sign-out-alt"></i>
            </NavLink>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;