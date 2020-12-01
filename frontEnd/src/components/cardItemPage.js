import React from "react";
import { NavLink } from "react-router-dom";

const CardItemPage = () => {
  return (
    <div className="container p-5">
      <div className="card">
        <NavLink className="p-2" to="/">
          <i className="fa fa-chevron-circle-left m-1"></i>
          Back to Catalog
        </NavLink>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                className="card-img-fit float-left pr-5"
                src={require("../assets/img/Alienware R11 Desktop.webp")}
                alt="product_pic_2"
              />
            </div>
            <div className="col">
              <h5 className="card-title">
                Alienware Aurora R11 Gaming Desktop
              </h5>
              <p className="card-text">
                <small className="text-muted">$3,659.99</small>
              </p>
              <p className="card-text">
                The Alienware Aurora R11 is engineered with 10th Gen Intel®
                Core™ processors, optional liquid-cooled graphics and multiple
                upgrade options to achieve peak performance that lasts.
              </p>
            </div>
          </div>
          <pre>
            10th Gen Intel® Core™ i7 10700KF Windows 10 Home NVIDIA® GeForce
            RTX™ 3080 10GB GDDR6X 16GB Dual Channel HyperX™ FURY DDR4 XMP at
            2933MHz; up to 64GB 512GB M.2 PCIe NVMe SSD (Boot) + 1TB 7200RPM
            SATA 6Gb/s (Storage)
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CardItemPage;
