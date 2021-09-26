import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav_top">
          <Link to="accounts" className="account">
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
        <Link to="/">
          <img src="" alt="" height="16" width="16" /> System
        </Link>
        <Link to="bluetooth">
          <img src="" alt="" height="16" width="16" /> Bluetooth &amp; devices
        </Link>
        <Link to="network">
          <img src="" alt="" height="16" width="16" /> Network &amp; internet
        </Link>
        <Link to="personalisation">
          <img src="" alt="" height="16" width="16" /> Personalisation
        </Link>
        <Link to="apps">
          <img src="" alt="" height="16" width="16" /> Apps
        </Link>
        <Link to="accounts">
          <img src="" alt="" height="16" width="16" /> Accounts
        </Link>
        <Link to="time">
          <img src="" alt="" height="16" width="16" /> Time &amp; language
        </Link>
        <Link to="gaming">
          <img src="" alt="" height="16" width="16" /> Gaming
        </Link>
        <Link to="accessibility">
          <img src="" alt="" height="16" width="16" /> Accessibility
        </Link>
        <Link to="privacy">
          <img src="" alt="" height="16" width="16" /> Privacy &amp; security
        </Link>
        <Link to="update">
          <img src="" alt="" height="16" width="16" /> Windows Update
        </Link>
      </nav>
    </header>
  );
}
