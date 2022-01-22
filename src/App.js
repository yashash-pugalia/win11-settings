import { useState, useEffect } from "react";

import "./style.css";
import data from "./data.json";

function App() {
  const [state, setState] = useState("System");

  useEffect(() => {
    document.querySelectorAll(".navLink").forEach((e) => {
      e.addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    });
  });

  return (
    <>
      <nav>
        <div className="nav_top">
          <div className="account" onClick={() => setState("Accounts")}>
            <img src="img/nav/defAccount.webp" alt="" height={60} width={60} />
            <div>
              <p>Yashash</p>
              <p>Local Account</p>
            </div>
          </div>
          <input type="text" className="search" placeholder="Find a setting " name="search" />
        </div>
        <div className="nav_bottom">
          {Object.keys(data).map((e) => {
            return (
              <div className="navLink" onClick={() => setState(e)}>
                <img src={`img/nav/${e}.webp`} alt="" height={16} width={16} />
                {e}
              </div>
            );
          })}
        </div>
      </nav>

      {Object.keys(data).map((e) => {
        return (
          state === e && (
            <main>
              <h1>{e}</h1>
              <div className="tilesCont">
                {data[e].map((e) => {
                  return (
                    <div className={e.type}>
                      <span>{e.icon}</span>
                      <div>
                        <p>{e.name}</p>
                        <p className="tile_desc">{e.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          )
        );
      })}

      <div className="navMenuBtn" onClick={() => document.querySelector("nav").classList.toggle("open")}>
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
    </>
  );
}
export default App;
