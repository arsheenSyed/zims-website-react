import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./sidenav.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  // const [classes, setClasses] = useState("");
  const offCanvas = useRef();

  const removeClass = () => {
    offCanvas.current.classList.remove("sidenav-close");
    offCanvas.current.classList.add("sidenav-open");
  };

  const addClass = () => {
    offCanvas.current.classList.remove("sidenav-open");
    offCanvas.current.classList.add("sidenav-close");
  };
  return (
    <>
      {/* -----------------------navbar ----------------------- */}

      <nav
        id="navbarSide"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} width={"80px"} height={"50px"} className="logo" />
          </a>

          <div
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            id="hamburger-btn"
          >
            <div
              onClick={removeClass}
              styles={{ width: "100%", height: "100%" }}
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <span className="hanburger">☰</span>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link" href="/home">
                  Home
                </a> */}
                <NavLink
                  className="nav-link"
                  activeClassName={"active-link"}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName={"active-link"}
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName={"active-link"}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName={"active-link"}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* -------------------- navbar -------------------------- */}
      {/* side-bar */}

      <div
        className={`offcanvas offcanvas-end mySideNav`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref={offCanvas}
      >
        <div className="container pt-5">
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={addClass}
            >
              {" "}
              <p>&#10006;</p>
            </button>
          </div>
          {/*  onClick={() => {
                console.log(offCanvas.current.remove("show"));
              }} */}
          <div className="offcanvas-body">
            <div className="modal-body">
              <div className="modal-line" onClick={addClass}>
                <NavLink
                  className="nav-links"
                  activeClassName="side-nav-links"
                  to="/"
                >
                  Home
                </NavLink>
              </div>
              <div className="modal-line" onClick={addClass}>
                <NavLink
                  className="nav-links"
                  activeClassName="side-nav-links"
                  to="/about"
                >
                  About
                </NavLink>
              </div>
              <div className="modal-line" onClick={addClass}>
                <NavLink
                  activeClassName="side-nav-links"
                  className="nav-links"
                  to="/services"
                >
                  Services
                </NavLink>
              </div>
              <div className="modal-line" onClick={addClass}>
                <NavLink
                  activeClassName="side-nav-links"
                  className="nav-links"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div>

              {/* <a href="/" className="navb-item">
                    Let's talk
                  </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* side-bar */}
    </>
  );
};

export default SideNav;
