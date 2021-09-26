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
  const header = document.querySelector("header");
  hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
  });
}
