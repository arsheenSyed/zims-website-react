import React from "react";
import "./footer.css";
import Wrapper from "../../components2/wrapper/wrapper";
import Para from "../../text/para";
const FooterBottom = () => {
  return (
    <Wrapper className="footer-bottom" paddingTop="3" paddingBottom="3">
      <Para color="white" size="s" weight="light">
        Copyright © 2023 | Powered By <a href="https://zenoids.com/">Zenoids</a>
      </Para>
    </Wrapper>
  );
};

export default FooterBottom;
