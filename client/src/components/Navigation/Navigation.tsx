import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

export default () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/bar">
            Bar
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/cocktails">
            Cocktails
          </Link>
          <ul className="navigation__submenu">
            <li className="navigation__item">
              <Link className="navigation__link" to="/cocktails/my">
                My Cocktails
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
