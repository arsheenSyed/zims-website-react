import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Para from "../../text/para";
import Heading from "../../text/heading";
import { Link } from "react-scroll";

import "./carousel.css";
// import ContactMain from "../contact/contactMain";
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active slide-img">{/*  */}</div>
          <div className="carousel-item slide-img">{/*  */}</div>
          <div className="carousel-item slide-img"> </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}

        <div className="carousel-caption caption-1">
          <div className="big-text">We want to see you succeed</div>
          <Heading color="white" weight="bold" size="m">
            {" "}
            Your Success <span>Our</span> Business
          </Heading>
          {/* <p className="small-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
              </p> */}
          <Para weight="light" color="white" size="l">
            ZIMS Consultancy is a consultancy servicing Businesses, Students and
            communities from different streams. We have a good grasp on starting
            businesses in U.A.E, K.S.A, Qatar and U.S.A
          </Para>
          {/* <HashLink to="../contact/contactMain.js">
            Link to Hash Fragment
          </HashLink> */}

          <Link
            className="btn btn-lg hero-btn"
            activeClass="active"
            to="contact-scroll"
            smooth={true}
            spy={true}
            offset={0}
            duration={400}
          >
            {" "}
            Contact Us
            {/* <span>
                <AiOutlinePlus />
              </span> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carousel;
