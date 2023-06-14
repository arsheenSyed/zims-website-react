import React from "react";

import Carousel from "../../components/carousel/carousel";
import Section2 from "../../components/section-2/section-2";
import Section3 from "../../components/section-3/section-3";
import Card from "../../components/card/card";
import ContactMain from "../../components/contact/contactMain";
import VideoSection from "../../components/video/video";
import Footer from "../../components/footer/footer";
import FooterBottom from "../../components/footer/footerbottom";
import Testimonials from "../../components/testimonials/testimonials";
import CarouselOuter from "../../components/carousel/carousel-outer";

const Home = () => {
  return (
    <>
      <CarouselOuter />
      <Section2 />
      {/* <Section3 /> */}
      <Card />
      <VideoSection />
      {/* <Testimonials /> */}
      <ContactMain colorHeading="blue" weight="normal" />
      {/* <ContactMain colorOne="white" /> */}
      {/* <Iframe /> */}
    </>
  );
};

export default Home;
