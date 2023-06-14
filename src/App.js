import React, { useRef } from "react";
import "./App.css";
import Home from "./pages/home/home";
// import Navbar from "./components/navbar/nav";
import SideNav from "./components/navbar/sidenav";

import SideNav2 from "./components/navbar/sidenav2";
import { Route } from "react-router-dom";
import Example from "./components2/offcanvas";
import Footer from "./components/footer/footer";
import whatsapp from "../src/assets/whatsapp.png";
// import Contact from "./components/contact/contact";

function App() {
  // const toggleNavbar = useRef();

  // const removeClassName = () => {
  //   toggleNavbar.current.classList.remove("visible");
  // };

  // const addClassName = () => {
  //   toggleNavbar.current.classList.add("visible");
  // };

  return (
    <div className="App">
      <SideNav2 />
      <Home />
      <div className="whatsapp-wrapper">
        <a href="https://wa.me/919701335304?text=Hello">
          {" "}
          <img src={whatsapp} />
        </a>
      </div>
      {/* <Route path="/" exact>
       
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route> */}
      <Footer />
    </div>
  );
}

export default App;
