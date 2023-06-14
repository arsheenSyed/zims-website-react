import React from "react";
import "./section-3.css";
import sectionImg from "../../assets/section3ImgF.jpg";
import Wrapper from "../../components2/wrapper/wrapper";
import Heading from "../../text/heading";
import Para from "../../text/para";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";

import { NavLink } from "react-router-dom";
const Section3 = () => {
  return (
    <Wrapper color="blue" padding="no" className="section-3">
      {/* // <div className="section-3"> */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-img">
            <img
              src={sectionImg}
              className="img-fluid d-block mx-auto"
              height="100%"
            />
          </div>

          <div className="col-md-5 section-para pt-5 pb-5">
            <Heading size="xs" color="green" bold="b">
              Advance your career—and the world we live in
            </Heading>

            <Para weight="light" size="m" color="white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s{" "}
            </Para>

            <NavLink className="section-btn mt-2" to="/about">
              <Para size="l" color="green">
                Learn More
                <span>
                  {" "}
                  <IoIosArrowDroprightCircle />
                </span>
              </Para>
            </NavLink>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};
//
export default Section3;
