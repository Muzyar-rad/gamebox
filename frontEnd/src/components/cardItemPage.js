import React from "react";
import { Link } from "react-router-dom";
import "../css/cardItemPage.css";

const CardItemPage = () => {
  return (
    <div className="container p-5">
      <div className="card card-shadow">
        <Link className="text-style p-2" to="/">
          <i className="fa fa-chevron-circle-left m-1"></i>
          Back to Catalog
        </Link>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col">
              <img
                className="card-img-fit mx-auto d-block"
                src={"/images/Alienware R11 Desktop.webp"}
                alt="product_pic_2"
              />
            </div>
            <div className="col">
              <h5 className="card-title-item">
                Alienware Aurora R11 Gaming Desktop
              </h5>
              <p className="card-price text-muted">$3,659.99</p>
              <p className="card-desc">
                The Alienware Aurora R11 is engineered with 10th Gen Intel®
                Core™ processors, optional liquid-cooled graphics and multiple
                upgrade options to achieve peak performance that lasts.
              </p>
              <button type="button" className="btn btn-color text-light">
                Add to Cart
              </button>
            </div>
          </div>
          <p>&#9642;10th Gen Intel® Core™ i9 10900F</p>
          <p>&#9642;Windows 10 Home</p>
          <p>&#9642;NVIDIA® GeForce RTX™ 3080 10GB GDDR6X </p>
          <p>
            &#9642;16GB Dual Channel HyperX™ FURY DDR4 XMP at 2933MHz; up to
            64GB{" "}
          </p>
          <p>
            &#9642;512GB M.2 PCIe NVMe SSD (Boot) + 1TB 7200RPM SATA 6Gb/s
            (Storage)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItemPage;
