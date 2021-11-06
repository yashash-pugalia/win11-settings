import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav_top">
          <Link to="accounts" className="navLink account">
            <img src="img/defAccount.webp" width="60" height="60" alt="" />
            <div>
              <p>
                <b>Yashash</b>
              </p>
              <p>
                <small>Local Account</small>
              </p>
            </div>
          </Link>
          <input type="text" className="search" placeholder="Find a setting " name="search" />
        </div>
        <div className="nav_bottom">
          <Link className="navLink active" to="system">
            <img src="img/system.png" alt="" height="16" width="16" /> System
          </Link>
          <Link className="navLink" to="bluetooth">
            <img src="img/bluetooth.png" alt="" height="16" width="16" /> Bluetooth &amp; devices
          </Link>
          <Link className="navLink" to="network">
            <img src="img/wifi.png" alt="" height="16" width="16" /> Network &amp; internet
          </Link>
          <Link className="navLink" to="personalisation">
            <img src="img/theme.png" alt="" height="16" width="16" /> Personalisation
          </Link>
          <Link className="navLink" to="apps">
            <img src="img/apps.png" alt="" height="16" width="16" /> Apps
          </Link>
          <Link className="navLink" to="accounts">
            <img src="img/user.png" alt="" height="16" width="16" /> Accounts
          </Link>
          <Link className="navLink" to="time">
            <img src="img/16x16-00000000.png" alt="" height="16" width="16" /> Time &amp; language
          </Link>
          <Link className="navLink" to="gaming">
            <img src="img/16x16-00000000.png" alt="" height="16" width="16" /> Gaming
          </Link>
          <Link className="navLink" to="accessibility">
            <img src="img/acessbility.png" alt="" height="16" width="16" /> Accessibility
          </Link>
          <Link className="navLink" to="privacy">
            <img src="img/defender.png" alt="" height="16" width="16" /> Privacy &amp; security
          </Link>
          <Link className="navLink" to="update">
            <img src="img/update.png" alt="" height="16" width="16" /> Windows Update
          </Link>
        </div>
      </nav>
      <div className="hamburger">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
      <dark-mode-toggle permanent></dark-mode-toggle>
    </header>
  );
}
