import React from "react";
import logo from "../Company_Name.png";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="SpaceX" style={{ height: 80, width: 80 }} />
      <h3>Spaceman says everybody look down</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
