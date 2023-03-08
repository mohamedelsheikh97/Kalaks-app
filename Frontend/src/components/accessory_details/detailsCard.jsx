import React from "react";
import "../../css/car_details/details.css";
import "./det.css";

export default function DetailsCard(props) {
  const { accessory } = props;
  console.log(accessory);
  const x = new Date().getFullYear();
  console.log(x);

  return (
    <div class="container my-5">
      <div class="row">
        <div class="col-md-7">
          <div class="main-description px-2">
            <div className="d-flex flex-md-row flex-column justify-content-between mm ">
              {" "}
              <h3 class="text-uppercase acc-name">{accessory.name} </h3>{" "}
            </div>
            <div class="price-area my-4">
              <p class="old-price mb-1">
                <del>Old Price</del>
                <span class="old-price-discount text-danger"> (Discount)</span>
              </p>
              <p class="new-price text-danger text-bold mb-1">
                Price : {accessory.price}
              </p>
            </div>

            <div class="product-details my-4">
              <p class="description text-secondary text-bold mb-1 mt-5 fs-4">
                Color: {accessory.color}
              </p>
            </div>

            <div class="buttons d-flex my-5">
              <div class="block">
                <button class="shadow btn custom-btn">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="product-details my-4">
            <p class="description text-secondary text-bold mb-1 mt-5 fs-4">
              Description: <br />
              {accessory.desc}
            </p>
          </div>

          <div class="row questions bg-light p-3">
            <div class="col-md-11 text">
              Have a question about our products at U Store? Feel free to
              contact our representatives via live chat or email.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
