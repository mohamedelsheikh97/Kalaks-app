import React from "react";
import "../../css/schools_page/schoolheader.css";

const Schoolhead = () => {
  return (
    <header>
      <div className="school-img">
        <span className="school">
          <h1 class="display-4 text-uppercase text-center text-light">
            Driving Schools
          </h1>{" "}
        </span>
      </div>
    </header>
  );
};

export default Schoolhead;
