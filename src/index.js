import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

{
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  var navLink = nav.getElementsByClassName("navLink");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}
