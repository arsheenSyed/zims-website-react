import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import Img from "../../assets/profile-img.jpg";
import "./testimonials.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import Heading from "../../text/heading";
import Wrapper from "../../components2/wrapper/wrapper";

import Para from "../../text/para";

const obj = [
  {
    name: "Brian Tracy",
    img: Img,
    stars: ` ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )}
    ${(
      <span>
        <AiFillStar />
      </span>
    )}
  `,
    para: ` Lorem Ipsum has been the industrys standard dummy text ever since the
  age when looking at its`,
  },

  {
    name: "John Covey",
    img: Img,
    stars: ` ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )}
    ${(
      <span>
        <AiFillStar />
      </span>
    )}
  `,
    para: `Lorem Ipsum has been the industrys standard dummy text ever since the
  age when looking at its`,
  },
  {
    name: "Mike Bayer",
    img: Img,
    stars: ` ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )} ${(
      <span>
        <AiFillStar />
      </span>
    )}
    ${(
      <span>
        <AiFillStar />
      </span>
    )}
  `,
    para: ` Lorem Ipsum has been the industrys standard dummy text ever since the
  age when looking at its`,
  },
];

const Testimonials = (props) => {
  return (
    <Wrapper className="testimonials" padding="yes">
      <Heading
        color={props.tHeadingColor === "green" ? "green" : "blue"}
        size="s"
      >
        Testimonials
      </Heading>
      <Para
        color={props.tParaColor === "blue" ? "blue" : "green"}
        size={props.tParaSize === "s" ? "s" : "m"}
        weight="normal"
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        age when looking at its
      </Para>
      <Wrapper
        className="container"
        padding="no"
        paddingTop="5"
        padding-Bottom="5"
      >
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-inner">
                <div className="carousel-text container">
                  <img className="" src={obj[0].img} />

                  <Heading className="mt-3" color="blue" size="s">
                    {obj[0].name}
                  </Heading>
                  <Para className="stars" color="" size="l">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </Para>
                  <Para className="m" color="green">
                    <span className="quotes">
                      <RiDoubleQuotesL />
                    </span>
                    {obj[0].para}
                  </Para>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
              <div className="carousel-inner">
                <div className="carousel-text container">
                  <img className="" src={obj[0].img} />

                  <Heading className="mt-3" color="blue" size="s">
                    {obj[0].name}
                  </Heading>
                  <Para className="stars" color="" size="l">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </Para>
                  <Para className="m" color="green">
                    <span className="quotes">
                      <RiDoubleQuotesL />
                    </span>
                    {obj[0].para}
                  </Para>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
              <div className="carousel-inner">
                <div className="carousel-text container">
                  <img className="" src={obj[0].img} />

                  <Heading className="mt-3" color="blue" size="s">
                    {obj[0].name}
                  </Heading>
                  <Para className="stars" color="" size="l">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </Para>
                  <Para className="m" color="green">
                    <span className="quotes">
                      <RiDoubleQuotesL />
                    </span>
                    {obj[0].para}
                  </Para>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            {/* <span className="carousel-control-prev-icon" aria-hidden="true">
              <IoIosArrowDroprightCircle />
            </span> */}
            <span className="carousel-control-prev-icon" aria-hidden="true">
              {/* <IoIosArrowDroprightCircle /> */}
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Testimonials;
