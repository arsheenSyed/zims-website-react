import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./footer.css";
import Heading from "../../text/heading";
import Wrapper from "../../components2/wrapper/wrapper";
import MediumText from "../../text/mediumText";
import Para from "../../text/para";
import { NavLink } from "react-router-dom";
import saudi from "../../assets/saudi.png";
import india from "../../assets/india.png";
import uae from "../../assets/uae.png";
import usa from "../../assets/usa.png";
import qatar from "../../assets/qatar2.png";
import FooterBottom from "./footerbottom";
import { Link } from "react-scroll";
import { IoLogoWhatsapp } from "react-icons/io";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper color="blue" className="footer">
        <Wrapper className="container" padding="yes">
          <Heading
            size="s"
            weight="normal"
            color="green"
            className="text-center"
          >
            Our Global Presence
          </Heading>
          <Para weight="normal" color="white" size="m" className="text-center">
            Where to find us
          </Para>

          <div className="row pt-3">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <div>
                <img src={saudi} className="mx-auto d-block" />

                <center>
                  {" "}
                  <Para weight="normal" size="m" color="green">
                    KSA
                  </Para>
                  <Para weight="light" size="s" color="white">
                    DAFZA Al Qusais Dubai United Arab Emirates
                    <br />
                    <b> Whatsapp:</b>
                    <a href="https://wa.me/966546200130?text=Hello">
                      +966 54 620 0130
                    </a>
                    <br />
                    {/* <a href="mailto:info@zimsconsultant.com">
                      info@zimsconsultant.com
                    </a> */}
                  </Para>
                </center>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <div>
                <img src={uae} className="mx-auto d-block" />
                <center>
                  <Para weight="normal" size="m" color="green">
                    U.A.E
                  </Para>
                  <Para weight="light" size="s" color="white">
                    DAFZA Al Qusais Dubai United Arab Emirates
                    <br />
                    <b> Whatsapp: </b>{" "}
                    <a href="https://wa.me/971544439816?text=Hello">
                      +971 544439816
                    </a>
                  </Para>
                </center>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <div>
                <img src={india} className="mx-auto d-block" />
                <center>
                  <Para weight="normal" size="m" color="green">
                    India
                  </Para>
                  <Para weight="light" size="s" color="white">
                    Jamuna Towers 126 Malakpet Hyderabad, India
                    <br />
                    <b> Whatsapp: </b>{" "}
                    <a href="https://wa.me/919701335304?text=Hello">
                      +91 97013 35304
                    </a>
                  </Para>
                </center>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <div>
                <img src={qatar} className="mx-auto d-block" />
                <center>
                  <Para weight="normal" size="m" color="green">
                    Qatar
                  </Para>
                  <Para weight="light" size="s" color="white">
                    DAFZA Al Qusais Dubai United Arab Emirates
                    <br />
                    <b> Whatsapp: </b>{" "}
                    <a href="https://wa.me/97477196915?text=Hello">
                      +97477196915
                    </a>
                  </Para>
                </center>
              </div>
            </div>
          </div>
        </Wrapper>

        <center>
          <Link
            className="nav-link"
            activeClass="active"
            to="hero-scroll"
            smooth={true}
            spy={true}
            offset={0}
            duration={400}
          >
            <Para
              className="d-flex justify-content-center align-items-center"
              weight="normal"
              size="m"
              color="green"
            >
              Back to Top {"  "}
              {/* <BsFillArrowUpSquareFill /> */}
              <AiOutlineArrowUp />
            </Para>
          </Link>
        </center>
      </Wrapper>
      <FooterBottom />
    </>
  );
};

export default Footer;

// //  <div className="row">
// <div className="col-md-6">
// <Heading color="green" size="s" weight="normal">
//   Zims Consultant
// </Heading>
// <Para color="white" size="m" weight="light">
//   Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's{" "}
// </Para>
// <div className="socials-contact">
//   <div className="contact-1">
//     <span>
//       <FaPhone />
//     </span>{" "}
//     <Para color="white" size="m" weight="normal">
//       +9123456789
//     </Para>
//   </div>
//   <div className="contact-1">
//     <span>
//       <FaEnvelope />
//     </span>{" "}
//     <Para color="white" size="m" weight="normal">
//       zimsconsultant@gmail.com
//     </Para>
//   </div>
//   <div className="contact-1">
//     <span>
//       <FaMapMarkerAlt />
//     </span>{" "}
//     <Para color="white" size="m" weight="normal">
//       {" "}
//       DAFZA area, Dubai, U.A.E
//     </Para>
//   </div>
//   <div />
// </div>
// </div>

// <div className="col-md-3">
// <Heading color="green" size="s" weight="normal">
//   Links
// </Heading>
// <div>
//   <NavLink to="/" className="nav-links">
//     <Para size="s" color="white" bold="light">
//       Home
//     </Para>
//   </NavLink>
// </div>
// <div>
//   <NavLink to="/about" className="nav-links">
//     <Para size="s" color="white" bold="light">
//       About
//     </Para>
//   </NavLink>
// </div>
// <div>
//   <NavLink to="/services" className="nav-links">
//     <Para size="s" color="white" bold="light">
//       Services
//     </Para>
//   </NavLink>
// </div>
// <div>
//   <NavLink to="/contact" className="nav-links">
//     <Para size="s" color="white" bold="light">
//       Contact
//     </Para>
//   </NavLink>
// </div>
// </div>
// <div className="col-md-3">
// <Heading color="green" size="s" weight="normal">
//   Social
// </Heading>
// {/* <div>
//   <a href="#" className="nav-links">
//     <Para size="s" color="white" bold="light">
//       Home
//     </Para>
//   </a>
// </div>
// <div>
//   <a href="#" className="nav-links">
//     About
//   </a>
// </div>
// <div>
//   <a href="#" className="nav-links">
//     Services
//   </a>
// </div>
// <div>
//   <a href="#" className="nav-links">
//     Contact
//   </a>
// </div>
// */}
// <div className="socials">
//   <a href="#" className="nav-links">
//     {" "}
//     <Heading size="xs" color="white">
//       <FaFacebook />
//     </Heading>
//   </a>

//   <a href="#" className="nav-links">
//     {" "}
//     <Heading size="xs" color="white">
//       <FaInstagram />
//     </Heading>
//   </a>

//   <a href="#" className="nav-links">
//     <Heading size="xs" color="white">
//       <FaLinkedin />
//     </Heading>
//   </a>

//   <a href="#" className="nav-links">
//     {" "}
//     <Heading size="xs" color="white">
//       <FaFacebookMessenger />
//     </Heading>
//   </a>
// </div>
// </div>
// </div>
