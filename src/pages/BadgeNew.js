import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/badge-header.svg";
import "./style/BadgeNew.css";
import Badge from "../components/Badge";
export default class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Fredito"
                lastName="Lemus"
                jobTitle="Full Stack developer"
                twitter="sumelio"
                avatar="https://i.pinimg.com/originals/70/c3/43/70c3439abdfe26efc6be65ff30ba3b48.jpg"
              />
              ,
            </div>
          </div>
        </div>
      </div>
    );
  }
}
