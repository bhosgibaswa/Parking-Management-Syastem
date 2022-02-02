import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [history, setHistory] = useState();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-1">
        <Link class="navbar-brand" to="/">
          Vahicle Management
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/history">
                History
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
