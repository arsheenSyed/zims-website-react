import React, { useRef, useState } from "react";
import "./ContactMain.css";

import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Heading from "../../text/heading";
import Wrapper from "../../components2/wrapper/wrapper";
import MediumText from "../../text/mediumText";
import Para from "../../text/para";
import Input from "../../components2/inputs/input";
import Iframe from "../../components/contact/iframe";

const ContactMain = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [message, setMessage] = useState("");

  function onChangeInput(e) {
    setInput1(e.target.value);
  }

  function onChangeInput2(e) {
    setInput2(e.target.value);
  }

  function onChangeInput3(e) {
    setInput3(e.target.value);
  }

  // const input1 = useRef();
  // const input2 = useRef();
  // const input3 = useRef();

  // function submit(e) {
  //   e.preventDefault();
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_orovt6q",
        "template_3j5y7bs",
        form.current,
        "3il3ZTg1qCJCt8WnV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setInput1("");
    setInput2("");
    setInput3("");
    setMessage("Message Sent Succesfully");
  };

  return (
    <div id="contact-scroll">
      <Wrapper className="contactSec" padding="yes">
        <div className="container">
          <Heading
            color={props.colorHeading === "blue" ? "blue" : "white"}
            size="s"
          >
            Get in Touch
          </Heading>
          <Para
            color={"green"}
            size="m"
            weight={props.weight == "normal" ? "normal" : "light"}
          >
            {" "}
            eel free to contact us
          </Para>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4 mb-4">
              <form onSubmit={sendEmail} ref={form}>
                <Input
                  type="input"
                  placeholder="Name"
                  inputType="text"
                  valueName={input1}
                  onChangeFunc={onChangeInput}
                  name="user_name"
                />
                {/*  */}
                <Input
                  type="input"
                  placeholder="Email"
                  inputType="email"
                  valueName={input2}
                  name="user_email"
                  onChangeFunc={onChangeInput2}
                />

                <Input
                  type="textArea"
                  placeholder="Your message..."
                  valueName={input3}
                  name="message"
                  onChangeFunc={onChangeInput3}
                />

                <div className="d-flex justify-content-start mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg btn-contact hero-btn"
                  >
                    Submit
                  </button>
                </div>

                <Para color="blue" weight="normal" size="m" className="mt-4">
                  {message}
                </Para>
              </form>
              {/* 
            <div className="socials">
              <h3>
                <FaFacebook />
              </h3>

              <h3>
                <FaInstagram />
              </h3>

              <h3>
                <FaLinkedin />
              </h3>

              <h3>
                <FaFacebookMessenger />
              </h3>
            </div> */}
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6 col-xl-4 map-col-contact mb-4">
              <div className="socials-contact container">
                <div>
                  <a
                    href="https://wa.me/97154439816?text=Hello"
                    className="contact-el"
                  >
                    <span>
                      {/* <FaPhone /> */}
                      <BsWhatsapp />
                    </span>
                    <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    <Para
                      size="m"
                      color={"blue"}
                      className="icons-contact"
                      weight="normal"
                    >
                      +97154439816
                    </Para>
                  </a>
                </div>
                {/* 
                  
                */}

                <div>
                  <a
                    href="mailto:info@zimsconsulting.com"
                    className="contact-el"
                  >
                    <span>
                      <FaEnvelope />
                    </span>{" "}
                    <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Para
                      size="m"
                      color={"blue"}
                      className="icons-contact"
                      weight="normal"
                    >
                      info@zimsconsulting.com
                    </Para>
                  </a>
                </div>

                <div>
                  {" "}
                  <a
                    href="mailto:director@zimsconsulting.com"
                    className="contact-el"
                  >
                    <span>
                      <FaEnvelope />
                    </span>{" "}
                    <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Para
                      size="m"
                      color={"blue"}
                      className="icons-contact"
                      weight="normal"
                    >
                      director@zimsconsulting.com
                    </Para>
                  </a>
                </div>

                <div className="address-text">
                  <a href="#" className="contact-el">
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Para
                      size="m"
                      color={"blue"}
                      className="icons-contact"
                      weight="normal"
                    >
                      off #20 Nasbatha building, Near Free zone Metro Station -
                      Al Twar 1 - Dubai
                    </Para>
                  </a>
                </div>

                <div />
              </div>
              {/* <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2877709935697!2d55.370672674312665!3d25.26090322911942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db3b14f9b09%3A0xcae0462a35a0d09!2sDubai%20Airport%20Free%20Zone%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1672881753025!5m2!1sen!2sin"
                width="100%"
                height="450"
                styles={"border:0"}
                allowFullScreen=""
              ></iframe>
            </div> */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <Iframe />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactMain;
