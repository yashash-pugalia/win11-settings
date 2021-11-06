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
            <img src="img/nav/system.webp" alt="" height="16" width="16" /> System
          </Link>
          <Link className="navLink" to="bluetooth">
            <img src="img/nav/bluetooth.webp" alt="" height="16" width="16" /> Bluetooth &amp; devices
          </Link>
          <Link className="navLink" to="network">
            <img src="img/nav/wifi.webp" alt="" height="16" width="16" /> Network &amp; internet
          </Link>
          <Link className="navLink" to="personalisation">
            <img src="img/nav/theme.webp" alt="" height="16" width="16" /> Personalisation
          </Link>
          <Link className="navLink" to="apps">
            <img src="img/nav/apps.webp" alt="" height="16" width="16" /> Apps
          </Link>
          <Link className="navLink" to="accounts">
            <img src="img/nav/user.webp" alt="" height="16" width="16" /> Accounts
          </Link>
          <Link className="navLink" to="time">
            <img src="img/nav/time.webp" alt="" height="16" width="16" /> Time &amp; language
          </Link>
          <Link className="navLink" to="gaming">
            <img src="img/nav/gaming.webp" alt="" height="16" width="16" /> Gaming
          </Link>
          <Link className="navLink" to="accessibility">
            <img src="img/nav/acessbility.webp" alt="" height="16" width="16" /> Accessibility
          </Link>
          <Link className="navLink" to="privacy">
            <img src="img/nav/defender.webp" alt="" height="16" width="16" /> Privacy &amp; security
          </Link>
          <Link className="navLink" to="update">
            <img src="img/nav/update.webp" alt="" height="16" width="16" /> Windows Update
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
