import React from "react";

export default function Navbar() {
  return (
    <div classNameNameName="Container" id="navspotify">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="spotify" id="Navbrand">
            <i class="fa-brands fa-spotify fa-1x"></i>
            Spotify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link text-light" href="spotify">
                  Premium <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="spotify">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="spotify">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="spotify">
                  |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="spotify"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="spotify">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
