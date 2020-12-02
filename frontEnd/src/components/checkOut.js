import React from "react";
import { NavLink } from "react-router-dom";
import "../css/checkOut.css";

const CheckOut = () => {
  const years = [
    <option value="2020">2020</option>,
    <option value="2021">2021</option>,
    <option value="2022">2022</option>,
    <option value="2023">2023</option>,
    <option value="2024">2024</option>,
    <option value="2025">2025</option>,
    <option value="2026">2026</option>,
    <option value="2027">2027</option>,
    <option value="2028">2028</option>,
    <option value="2029">2029</option>,
    <option value="2030">2030</option>,
  ];
  const months = [
    <option value="January">January</option>,
    <option value="Febuary">Febuary</option>,
    <option value="March">March</option>,
    <option value="April">April</option>,
    <option value="May">May</option>,
    <option value="June">June</option>,
    <option value="July">July</option>,
    <option value="August">August</option>,
    <option value="September">September</option>,
    <option value="October">October</option>,
    <option value="November">November</option>,
    <option value="December">December</option>,
  ];
  const statesOfUSA = [
    <option value="AL">Alabama</option>,
    <option value="AK">Alaska</option>,
    <option value="AZ">Arizona</option>,
    <option value="AR">Arkansas</option>,
    <option value="CA">California</option>,
    <option value="CO">Colorado</option>,
    <option value="CT">Connecticut</option>,
    <option value="DE">Delaware</option>,
    <option value="DC">District Of Columbia</option>,
    <option value="FL">Florida</option>,
    <option value="GA">Georgia</option>,
    <option value="HI">Hawaii</option>,
    <option value="ID">Idaho</option>,
    <option value="IL">Illinois</option>,
    <option value="IN">Indiana</option>,
    <option value="IA">Iowa</option>,
    <option value="KS">Kansas</option>,
    <option value="KY">Kentucky</option>,
    <option value="LA">Louisiana</option>,
    <option value="ME">Maine</option>,
    <option value="MD">Maryland</option>,
    <option value="MA">Massachusetts</option>,
    <option value="MI">Michigan</option>,
    <option value="MN">Minnesota</option>,
    <option value="MS">Mississippi</option>,
    <option value="MO">Missouri</option>,
    <option value="MT">Montana</option>,
    <option value="NE">Nebraska</option>,
    <option value="NV">Nevada</option>,
    <option value="NH">New Hampshire</option>,
    <option value="NJ">New Jersey</option>,
    <option value="NM">New Mexico</option>,
    <option value="NY">New York</option>,
    <option value="NC">North Carolina</option>,
    <option value="ND">North Dakota</option>,
    <option value="OH">Ohio</option>,
    <option value="OK">Oklahoma</option>,
    <option value="OR">Oregon</option>,
    <option value="PA">Pennsylvania</option>,
    <option value="RI">Rhode Island</option>,
    <option value="SC">South Carolina</option>,
    <option value="SD">South Dakota</option>,
    <option value="TN">Tennessee</option>,
    <option value="TX">Texas</option>,
    <option value="UT">Utah</option>,
    <option value="VT">Vermont</option>,
    <option value="VA">Virginia</option>,
    <option value="WA">Washington</option>,
    <option value="WV">West Virginia</option>,
    <option value="WI">Wisconsin</option>,
    <option value="WY">Wyoming</option>,
  ];
  const redStar = <span className="text-danger">*</span>;
  return (
    <div className="container mt-3">
      <NavLink className="text-checkout p-2" to="/">
        <i className="fa fa-chevron-circle-left m-1"></i>
        Back to Shopping
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
                  {statesOfUSA}
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
                <select id="month" class="form-control">
                  <option selected>Choose...</option>
                  {months}
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="year">Year{redStar}</label>
                <select id="year" class="form-control">
                  <option selected>Choose...</option>
                  {years}
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
