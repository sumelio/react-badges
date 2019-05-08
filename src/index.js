// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  // <Badge
  //   firstName="Fredito"
  //   lastName="Lemus"
  //   jobTitle="Full Stack developer"
  //   twitter="sumelio"
  //   avatar="https://i.pinimg.com/originals/70/c3/43/70c3439abdfe26efc6be65ff30ba3b48.jpg"
  // />,
  <BadgeNew />,
  container
);
