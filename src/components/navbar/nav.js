import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="offcanvasNavbar">
      <header>
        <div className="container-fluid">
          <div className="navb-logo">
            <h3>Logo</h3>
          </div>

          <div className="navb-items">
            <div className="item">
              <a href="#">Home</a>
            </div>

            <div className="item">
              <a href="#">About</a>
            </div>

            <div className="item">
              <a href="#">Services</a>
            </div>

            <div className="item-button">
              <a href="#">Let's talk</a>
            </div>
          </div>

          {/* modal */}

          {/* <!-- Button trigger modal --> */}
          <div className="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              ☰
            </a>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Logo
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <p>&#10006;</p>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-line">
                    <a href="/">Home</a>
                  </div>
                  <div className="modal-line">
                    <a href="/">About</a>
                  </div>
                  <div className="modal-line">
                    <a href="/">Services</a>
                  </div>
                  <div className="modal-line">
                    <a href="/">Contact</a>
                  </div>

                  {/* <a href="/" className="navb-item">
                    Let's talk
                  </a> */}
                </div>

                {/* <div className="modal-footer">
                  <a target="_blank" href="#"></a>
                  <a target="_blank" href="#"></a>
                  <a target="_blank" href="#"></a>
                  <a target="_blank" href="#"></a>
                </div> */}
              </div>
            </div>
          </div>
          {/* modal */}
          {/*  */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
