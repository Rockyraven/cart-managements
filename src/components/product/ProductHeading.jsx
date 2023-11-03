import React from "react";
import "./productHead.css";
import { StarIcon } from "../../assets";
import Filter from "../filter/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductHeading = () => {
  return (
    <div className="header-wrapper">
      <h1>Most Popular</h1>

          <Filter/>
      {/* <div className="border-line">
        <div className="white-bg-wrapper">
        <div className="icon-wrapper">
          <StarIcon />
        </div>
        </div>
      </div> */}
    </div>
  );
};
