import React from "react";
import CarListing from "./carListing";
import "../../css/car_page/car_page.css";
import CarCards from "./carCards";
import CarDrive from "./carDrive";

export default function Cars() {
  return (
    <>
      <CarListing></CarListing>
      <CarCards></CarCards>
      <CarDrive></CarDrive>
    </>
  );
}
