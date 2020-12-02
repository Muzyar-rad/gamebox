import React from "react";
import { NavLink } from "react-router-dom";
import "../css/checkOut.css";

const CheckOut = () => {
  const redStar = <span className="text-danger">*</span>;
  return (
    <div className="container mt-3">
      <NavLink className="text-checkout p-2" to="/">
        <i className="fa fa-chevron-circle-left m-1"></i>
        Back to Catalog
      </NavLink>
      <div className="d-flex flex-column mt-3">
        <p className="fontSize">Check Out</p>
        <p className="orderTotalSize text-muted">Order Total: $100,00.99</p>
        <p className="text-danger">
          * Please DO NOT use real payment information! This app is created
          strictly for demonstration purposes.
        </p>
      </div>
      <div className="card card-shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Personal Information</h5>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstName">First Name{redStar}</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="lastName">Last Name{redStar}</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address{redStar}</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City{redStar}</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State{redStar}</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip{redStar}</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <h5 className="card-title mt-5">Payment Information</h5>
            <div class="form-group">
              <label for="creditCard">Credit Card{redStar}</label>
              <input
                type="text"
                class="form-control"
                id="creditCard"
                placeholder="1234 1234 1234 1234"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="month">Month{redStar}</label>
                <input type="text" class="form-control" id="month" />
              </div>
              <div class="form-group col-md-4">
                <label for="year">Year{redStar}</label>
                <select id="year" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="cvv">CVV{redStar}</label>
                <input type="text" class="form-control" id="cvv" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check mt-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  I acknowledge that this is for demonstration purposes only and
                  no real names, addresses, or credit card information has been
                  used for the purposes of this app
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
