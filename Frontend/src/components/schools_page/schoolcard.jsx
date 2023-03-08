import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import "../../css/schools_page/schoolheader.css";

const Schoolcard = () => {
  return (
    <div className="school-section">
      <h1 class="display-4 text-uppercase text-center mb-5 mt-5 school-head">
        Best Schools
      </h1>
      <div class="card mb-4 mt-5 school-card" max-width={540}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://www.drive2schools.com/hubfs/Stock%20images/5ce3d6e73f26d.jpeg"
              class="card-img school-card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body school-heading">
              <h4 class="card-title school-name">Delta Driving Academy</h4>
              <hr className="school line" />
              <p class="card-text school-desc">
                With Delta Academy you will learn to drive at the hands of
                professional trainers with steps and an advanced curriculum that
                will get you to the required result which is driving safely and
                easily 👌 The course is theoretical and practical I mean what
                you will study is theoretical you will go down and apply it
                practical by yourself.
              </p>
              <a href="tel:048 2313130" class="bta">
                <IoCall />
                Number
              </a>
              <a
                href="https://www.bing.com/maps?q=%D8%A7%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D9%87+%D8%A7%D9%84%D8%AF%D9%84%D8%AA%D8%A7+%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85+%D9%82%D9%8A%D8%A7%D8%AF%D9%87+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA&FORM=HDRSC4&cp=30.56008%7E31.00995&lvl=14.5"
                class="btb"
                target="blank"
              >
                {" "}
                <FaMapMarkerAlt /> Address
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div class="card mb-3 school-card" max-width={540}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://wallpapercave.com/wp/wp8413230.jpg"
              class="card-img school-card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body school-heading">
              <h4 class="card-title school-name">Faramawy Driving Academy</h4>
              <hr className="school line" />
              <p class="card-text school-desc">
                Driving is taught at Al-Faramawy Center in a distinctive and
                easy way, and the trainer is characterized by patience until
                customers are taught to drive professionally, and the
                subscription is done at a nominal price and suitable for
                everyone also the driving cars at Al-Faramawy is equivalent and
                suitable for all . In Al-Faramawy we teach you with high
                desciplin and high tense.
              </p>
              <a href="tel:+201006761356" class="bta">
                <IoCall />
                Number
              </a>
              <a
                href="https://www.google.com/maps/dir//%D8%A7%D9%84%D9%81%D8%B1%D9%85%D8%A7%D9%88%D9%89+%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85+%D9%82%D9%8A%D8%A7%D8%AF%D9%87+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D8%A8%D9%88+%D8%B4%D9%88%D8%B4%D9%87+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%A7%D9%8A%D9%85%D8%A7%D9%86%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%85%D9%86%D9%88%D9%81%D8%8C+%D9%85%D9%86%D9%88%D9%81%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9%D8%8C%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%85%D9%86%D9%88%D9%81%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D9%87+%D9%85%D9%86%D9%88%D9%81%D8%8C%E2%80%AD/@30.4661382,30.3775832,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14587f9bfb6f13c7:0x3530c1bd3ac5a530!2m2!1d30.9378859!2d30.4661382"
                class="btb"
                target="blank"
              >
                {" "}
                <FaMapMarkerAlt /> Address
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div class="card mb-3 school-card" max-width={540}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://media.hatla2eestatic.com/uploads/news/42214/big_img_158eec6205cbec5a6390e5cb9c6900db.jpg"
              class="card-img school-card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body school-heading">
              <h4 class="card-title school-name">
                Mrs. Simsima Driving Academy
              </h4>
              <hr className="school line" />
              <p class="card-text school-desc">
                It is one of the oldest and most famous driving academy in
                Menoufia with the presence of trainers to teach driving in a
                professional way and at a nominal price for everyone. and the
                subscription is done at a nominal price and suitable for
                everyone also the driving cars at Mrs.Simsima is equivalent and
                suitable for all
              </p>
              <a href="tel:+201011541438" class="bta">
                <IoCall />
                Number
              </a>
              <a
                href="https://www.google.com/maps/dir/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%A9+%D8%B3%D9%85%D8%B3%D9%85%D8%A9+%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85+%D9%82%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA,+El-Bagour+City,+%D8%A7%D9%84%D8%A8%D8%A7%D8%AC%D9%88%D8%B1%D8%8C%D8%8C+Menofia+Governorate+6075416%E2%80%AD//@30.4234656,31.0046395,13z/data=!4m8!4m7!1m5!1m1!1s0x14587974ac409955:0x8ef7626368bf2395!2m2!1d31.039659!2d30.4234703!1m0"
                class="btb"
                target="blank"
              >
                {" "}
                <FaMapMarkerAlt /> Address
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schoolcard;
