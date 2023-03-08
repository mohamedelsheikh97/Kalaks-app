import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../../css/car_page/car_drive.css";

export default function CarDrive() {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="" alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              WANNA LEARN TO DRIVE ?
            </h2>

            <button className="btn become__driver-btn mt-4">
              <Link className="nav-link" to="/schools">
                BECOME A DRIVER
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
