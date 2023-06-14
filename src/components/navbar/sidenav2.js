import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./sidenav.css";
import Logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";

const SideNav2 = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // const [classNamees, setclassNamees] = useState("");
  const offCanvas = useRef();

  const toggleNavbar = useRef();

  const removeClassName2 = () => {
    toggleNavbar.current.classList.remove("closethenav");
  };

  const addClassName2 = () => {
    toggleNavbar.current.classList.add("closethenav");
  };

  const removeclassName = () => {
    offCanvas.current.classNameList.remove("sidenav-close");
    offCanvas.current.classNameList.add("sidenav-open");
  };

  const addclassName = () => {
    offCanvas.current.classNameList.remove("sidenav-open");
    offCanvas.current.classNameList.add("sidenav-close");
  };

  //   .collapse:not(.show) {
  //     display: none;
  // }
  return (
    <>
      {/* -----------------------navbar ----------------------- */}

      <nav
        id="navbarSide"
        className={`navbar navbar-expand-lg navbar-light bg-light ${
          sticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} width={"80px"} height={"50px"} className="logo" />
          </a>

          <div
            className="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              styles={{ width: "100%", height: "100%" }}
              onClick={removeClassName2}
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <span className="hamburger">☰</span>
            </div>
          </div>
          {/* <div
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            id="hamburger-btn"
          >
            <div
              onClick={removeclassName}
              styles={{ width: "100%", height: "100%" }}
            >
              {/* <span className="navbar-toggler-icon"></span> 
              <span className="hanburger">☰</span>
            </div>
          </div> */}
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
            ref={toggleNavbar}
          >
            {/* ms-auto */}
            <ul className="navbar-nav m-auto mb-2 mb-lg-0" id="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclass="active"
                  to="hero-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addClassName2}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclass="active"
                  to="about-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addClassName2}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclass="active"
                  to="services-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addClassName2}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclass="active"
                  to="contact-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addClassName2}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-block socials-nav">
              <a href="#" className="social-nav">
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/@mohhyderabad4695/about"
                className="social-nav"
              >
                <IoLogoYoutube />
              </a>

              <a
                href="https://www.facebook.com/zims.tutions"
                className="social-nav"
              >
                <FaFacebookF />
              </a>
            </div>
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
              onClick={addclassName}
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
              <div className="modal-line">
                <Link
                  className="nav-links"
                  activeclass="active"
                  to="hero-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addclassName}
                >
                  Home
                </Link>
              </div>
              <div className="modal-line">
                <Link
                  className="nav-links"
                  activeclass="active"
                  to="about-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addclassName}
                >
                  About
                </Link>
              </div>
              <div className="modal-line" onClick={addclassName}>
                <Link
                  className="nav-links"
                  activeclass="active"
                  to="services-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addclassName}
                >
                  Services
                </Link>
              </div>
              <div className="modal-line">
                <Link
                  className="nav-links"
                  activeclass="active"
                  to="contact-scroll"
                  smooth={true}
                  spy={true}
                  offset={0}
                  duration={400}
                  onClick={addclassName}
                >
                  Contact
                </Link>
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

export default SideNav2;
