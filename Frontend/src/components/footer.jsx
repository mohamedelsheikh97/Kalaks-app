import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer class="section">
      <div class="container-fluid py-5 px-sm-3 px-md-5">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h4 class="text-uppercase text-light mb-4">Our Services</h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>Driving Schools
              </a>
              <a class=" mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>Maintenance
              </a>
              <a class=" mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>New Member
                Registration
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h4 class="text-uppercase text-light mb-4">About Us</h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>Our Team
              </a>
              <a class=" mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>Pricing
              </a>
              <a class="mb-2" href="#">
                <i class="fa fa-angle-right text-white mr-2"></i>Help & FQAs
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h4 class="text-uppercase text-light mb-4">Information</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-white mr-3"></i>
              Egypt
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt text-white mr-3"></i>+012 345 67890
            </p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 footer-head">
            <h6 class="text-uppercase text-white py-2">Follow Us</h6>
            <div class="d-flex justify-content-start">
              <a
                class="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://freewebsitecode.com/"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://facebook.com/"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://www.linkedin.com/home"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                class="btn btn-lg btn-dark btn-lg-square"
                href="https://youtube.com/"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
