import React from "react";
import Logo from "../../assets/images/wild-monkey-ico.png";
import "./styles.css";
import { handleLogout } from "../Authentication/Helper";
//Redux imports
import { useSelector } from "react-redux";

function Header() {
  const userState = useSelector((state) => state.user.value);

  return (
    <div className="header-navbar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img className="header-logo-custom" src={Logo} alt="..." />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/links">
                  Links
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>

            <div className="d-flex">
              {userState.userEmail ? (
                <div>
                  <p>Hello {userState.userEmail}</p>
                  {/* {userState.userId} */}
                  <button
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/signIn">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signUp">
                      Sign Up
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}

export default Header;
