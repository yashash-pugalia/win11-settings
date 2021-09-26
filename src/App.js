import { useState } from "react";

import "./style.css";
import data from "./data.json";

function Main({ pageName, info }) {
  return (
    <main>
      <h1>{pageName}</h1>
      <div className="tilesCont">
        {info.map((e) => {
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
  );
}

function App() {
  const [state, setState] = useState("System");

  return (
    <>
      <nav>
        <div className="nav_top">
          <div className="navLink account" onClick={() => setState("Accounts")}>
            <img src="img/nav/defAccount.webp" width="60" height="60" alt="" />
            <div>
              <p>Yashash</p>
              <p>Local Account</p>
            </div>
          </div>
          <input type="text" className="search" placeholder="Find a setting " name="search" />
        </div>
        <div className="nav_bottom">
          {data.navList.map((e) => {
            return (
              <div className="navLink" onClick={() => setState(e)}>
                <img src={`img/nav/${e}.webp`} alt="" width="16" />
                {e}
              </div>
            );
          })}
        </div>
      </nav>

      {state === "System" && <Main pageName={state} info={data.System} />}
      {state === "Bluetooth & devices" && <Main pageName={state} info={data["Bluetooth & devices"]} />}
      {state === "Network & internet" && <Main pageName={state} info={data["Network & internet"]} />}
      {state === "Personalisation" && <Main pageName={state} info={data.Personalisation} />}
      {state === "Apps" && <Main pageName={state} info={data.Apps} />}
      {state === "Accounts" && <Main pageName={state} info={data.Accounts} />}
      {state === "Time & language" && <Main pageName={state} info={data["Time & language"]} />}
      {state === "Gaming" && <Main pageName={state} info={data.Gaming} />}
      {state === "Accessibility" && <Main pageName={state} info={data.Accessibility} />}
      {state === "Privacy & security" && <Main pageName={state} info={data["Privacy & security"]} />}
      {state === "Windows Update" && <Main pageName={state} info={data["Windows Update"]} />}

      <div className="navMenuBtn">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
    </>
  );
}
export default App;
