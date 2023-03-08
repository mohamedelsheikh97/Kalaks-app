import React from "react";
import { Link } from "react-router-dom";
import "../../css/home_page/welcome.css";

export default function Welcome() {
  return (
    <div className="container">
      <p className="text-center head">
        <h1 class="display-4 text-uppercase text-center mt-5 welcome-title">
          Welcome
        </h1>
        <span className="kalaks">TO KALAKS</span>
      </p>
      <p className="welcome-desc">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don’t look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn’t
        anything embarrassing hidden in the middle of text.
      </p>
      <div className="row gx-5">
        <div className="col">
          <div className="d-flex old">
            <div className="looking">
              <h4 className="welcome-car">
                <span>LOOKING FOR </span> OLD CAR?
              </h4>
              <div>
                <p className="welcome-car-par">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
              </div>
              <Link to="/cars" className="text-decoration-none">
                <button href="/cars" className="button-5">
                  VIEW LISTING
                </button>
              </Link>
            </div>

            <img src="/logo512.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex old">
            <div className="looking">
              <h4 className="welcome-car">
                <span>LOOKING FOR</span> NEW CAR?
              </h4>
              <div>
                <p className="welcome-car-par">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
              </div>
              <Link to="/cars" className="text-decoration-none">
                <button href="/cars" className="button-5">
                  VIEW LISTING
                </button>
              </Link>
            </div>
            <img src="/looking-new-car-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
