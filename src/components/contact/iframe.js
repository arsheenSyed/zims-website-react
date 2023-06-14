import React from "react";
import "./iframe.css";
import Wrapper from "../../components2/wrapper/wrapper";

const Iframe = (props) => {
  return (
    <Wrapper className="map container" padding="yes">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0190684983763!2d55.37245377388388!3d25.269943977664123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c4eaa0d1af5%3A0xdaf10fcf4de160f2!2sDubai%20Airport%20Free%20Zone%20Metro%20Station%201!5e0!3m2!1sen!2sin!4v1684945306110!5m2!1sen!2sin"
        width="100%"
        height="300px"
        styles={"border:0"}
        allowFullScreen=""
      ></iframe>
    </Wrapper>
  );
};

export default Iframe;
