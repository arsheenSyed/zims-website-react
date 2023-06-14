import React from "react";
import "./card.css";
import Img from "../../assets/cardImg.jpg";
import Wrapper from "../../components2/wrapper/wrapper";
import Heading from "../../text/heading";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import Para from "../../text/para";

// images

import doctor1 from "../../assets/doctorImg1.jpg";
import doctor2 from "../../assets/doctorImg2.jpg";
import doctor3 from "../../assets/doctorImgn3.jpg";
import doctor4 from "../../assets/doctorImg4.jpg";

import career from "../../assets/careerImg1.jpg";

import tuitions from "../../assets/tuition.jpg";
import apartment from "../../assets/apartment.jpg";

const PrometricGuidance = [
  {
    id: 1,
    name: "Prometric Guidance",
    img: doctor1,
    // title: "MOH Gudance Hyderabad",
    title: "DATA FLOW guidance Center Hyderbad, India ",
    para: `We help you by providing MOH, data flow and MCQ material`,
    link: "https://www.mohhyd.com/",
  },

  {
    id: 2,
    name: "Prometric Guidance",
    img: doctor2,
    title: "DHA/DOH/MOH Guidance enter UAE",
    para: `We help you by providing MOH, HAAD, DHA guidance, data flow and MCQ material for U.A.E`,
    link: "https://www.dhauae.com/",
  },

  {
    id: 3,
    name: "Prometric Guidance",
    img: doctor3,
    title: "SLE (Saudi Licensing Exam)",
    para: `We help you by providing MOH, HAAD, DHA guidance, data flow and MCQ material`,
    link: "http://prometricguidance.com/",
  },

  {
    id: 4,
    name: "Prometric Guidance",
    img: doctor4,
    title: "Data Flow",
    para: `We help you by providing MOH, HAAD, DHA guidance, data flow and MCQ material`,
    link: "https://www.mohsaudi.com/",
  },
];

const ZimsCareerGuidance = [
  {
    id: 1,
    name: "Career Advice",
    img: career,
    title: "Zims Career Advice",
    para: `Whether you’re searching for a job for the first time or are interested in changing careers`,
    link: "http://zimscareeradvisors.com/",
  },
];

const ZimsHomeTuitions = [
  {
    id: 1,
    name: "Tuitions",
    img: tuitions,
    title: "Zims Home Tuitions",
    para: `ZIMS has been a professional tutor for over 15 years, in specializing children and young people`,
    link: "http://zimstutions.com/",
  },
];

const ZimsRentals = [
  {
    id: 1,
    name: "Zims Rentals",
    img: Img,
    title: "Co Working Space",
    para: `A network of workspaces where companies and people grow together`,
    //  links
    link: "zimscareeradvisors.com",
  },
  {
    id: 2,
    name: "Zims Rentals",
    img: apartment,
    title: "Furnished Apartments",
    para: `Zims offers a curated selection of fully furnished turnkey homes and apartments`,
    //  links
    link: "zimscareeradvisors.com",
  },
];

const startupoffice = [
  {
    id: 1,
    name: "Start Ups",
    img: Img,
    title: "Start Up in dubai and overseas",
    para: `We provide startUP services to

    Saudi Arabia | Dubai | Canada | UK | USA`,

    link: "https://dubaistartup.in/",
  },
];

const Card = () => {
  const prometricMap = PrometricGuidance.map((el, i) => {
    return (
      <div className="col-md-6 col-sm-12 card-col" key={el.id}>
        <div className="card">
          <img src={el.img} />
          <div className="intro">
            <div className="container">
              <Para color="green" size="m" className="heading paraM-text">
                {el.name}
              </Para>

              <hr className="line" />

              <Para color="white" size="s" weight="light">
                {el.title}
              </Para>

              <div className="hide-para">
                <Para color="white" size="s" weight="light">
                  {el.para}
                </Para>

                <a href={el.link} className="card-btn section-btn">
                  Learn More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const ZimsCareerMap = ZimsCareerGuidance.map((el, j) => {
    return (
      <div className="col-md-6 col-sm-12 card-col" key={el.id}>
        <div className="card">
          <img src={el.img} />
          <div className="intro">
            <div className="container">
              <Para color="green" size="m" className="heading paraM-text">
                {el.name}
              </Para>

              <hr className="line" />

              <Para color="white" size="l" weight="normal">
                {el.title}
              </Para>

              <div className="hide-para">
                <Para color="white" size="s" weight="light">
                  {el.para}
                </Para>

                <a href={el.link} className="card-btn section-btn">
                  Learn More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const ZimsTuitionsMap = ZimsHomeTuitions.map((el, i) => {
    return (
      <div className="col-md-6 col-sm-12 card-col" key={el.id}>
        <div className="card">
          <img src={el.img} />
          <div className="intro">
            <div className="container">
              <Para color="green" size="m" className="heading paraM-text">
                {el.name}
              </Para>

              <hr className="line" />

              <Para color="white" size="l" weight="normal">
                {el.title}
              </Para>

              <div className="hide-para">
                <Para color="white" size="s" weight="light">
                  {el.para}
                </Para>

                <a href={el.link} className="card-btn section-btn">
                  Learn More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const ZimsRentalsMap = ZimsRentals.map((el, k) => {
    return (
      <div className="col-md-6 col-sm-12 card-col" key={el.id}>
        <div className="card">
          <img src={el.img} />
          <div className="intro">
            <div className="container">
              <Para color="green" size="m" className="heading paraM-text">
                {el.name}
              </Para>

              <hr className="line" />

              <Para color="white" size="l" weight="normal">
                {el.title}
              </Para>

              <div className="hide-para">
                <Para color="white" size="s" weight="light">
                  {el.para}
                </Para>

                <a href={el.link} className="card-btn section-btn">
                  Learn More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const zimsStartupMap = startupoffice.map((el, l) => {
    return (
      <div className="col-md-6 col-sm-12 card-col" key={l}>
        <div className="card">
          <img src={el.img} />
          <div className="intro">
            <div className="container">
              <Para color="green" size="m" className="heading paraM-text">
                {el.name}
              </Para>

              <hr className="line" />

              <Para color="white" size="l" weight="normal">
                {el.title}
              </Para>

              <div className="hide-para">
                <Para color="white" size="s" weight="light">
                  {el.para}
                </Para>

                <a href={el.link} className="card-btn section-btn">
                  Learn More
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // const mapArr = obj.map((el, i) => {
  //   return (
  //     <>
  //       <div className="col-md-6 col-sm-12 card-col" key={i}>
  //         <div className="card">
  //           <img src={el.img} />
  //           <div className="intro">
  //             <div className="container">
  //               <Para color="green" size="m" className="heading paraM-text">
  //                 {el.name}
  //               </Para>

  //               <hr className="line" />

  //               <Para color="white" size="l" weight="normal">
  //                 {el.title}
  //               </Para>

  //               <div className="hide-para">
  //                 <Para color="white" size="s" weight="light">
  //                   {el.para}
  //                   {/* sum is simply dummy text of the printing and typesetting
  //                 industry. Lorem Ipsum has been the industry's "break"
  //                 <span className="">
  //                   {" "}
  //                   sum is simply dummy text of the printing and typesetting
  //                   industry.
  //                 </span> */}
  //                 </Para>

  //                 <NavLink className="card-btn section-btn" to="services">
  //                   Learn More
  //                   <span>
  //                     <IoIosArrowDroprightCircle />
  //                   </span>
  //                 </NavLink>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // });
  return (
    <div id="services-scroll">
      <Wrapper
        className="myCards container myContainer"
        color="white"
        paddingTop="3"
        paddingBottom="5"
      >
        {/* <span className="big-text">Our Global Presence</span> */}
        <Heading color="blue" size="s" className="text-center">
          Zims Group of Companies
        </Heading>

        <Para color="green" size="m" weight="normal" className="text-center">
          We are all set up to help you in a journey of Education, Career and
          Businesses.
        </Para>

        {/* <br /> */}
        {/* <span className="mt-1 para-text">Lorem Ipsum dolor sit amet</span> */}
        {/* <div className="row pt-4">{mapArr}</div> */}

        <div className="nav-tabs-cards">
          {/* --------------------------- Navbar ------------------- */}
          <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Prometric Guidance
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Career
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Tuition
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="other-tab"
                data-bs-toggle="tab"
                data-bs-target="#other"
                type="button"
                role="tab"
                aria-controls="other"
                aria-selected="false"
              >
                Rentals
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="other2-tab"
                data-bs-toggle="tab"
                data-bs-target="#other2"
                type="button"
                role="tab"
                aria-controls="other2"
                aria-selected="false"
              >
                StartUp
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row mt-5">{prometricMap}</div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row mt-5">{ZimsCareerMap}</div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row mt-5">{ZimsTuitionsMap}</div>
            </div>

            <div
              className="tab-pane fade"
              id="other"
              role="tabpanel"
              aria-labelledby="other-tab"
            >
              <div className="row mt-5">{ZimsRentalsMap}</div>
            </div>
            <div
              className="tab-pane fade"
              id="other2"
              role="tabpanel"
              aria-labelledby="other2-tab"
            >
              <div className="row mt-5">{zimsStartupMap}</div>
            </div>
          </div>
        </div>
        {/* --------------------------- Navbar -------------------------- */}
      </Wrapper>
    </div>
  );
};

// const Card = (props) => {
//   const mapArr = obj.map((el, i) => {
//     return (
//       <>
//         {/* navbar */}
//         {/* --------------------------- Navbar ------------------- */}
//         <ul className="nav nav-tabs" id="myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link active"
//               id="home-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#home"
//               type="button"
//               role="tab"
//               aria-controls="home"
//               aria-selected="true"
//             >

//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="profile-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#profile"
//               type="button"
//               role="tab"
//               aria-controls="profile"
//               aria-selected="false"
//             >
//               Profile
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className="nav-link"
//               id="contact-tab"
//               data-bs-toggle="tab"
//               data-bs-target="#contact"
//               type="button"
//               role="tab"
//               aria-controls="contact"
//               aria-selected="false"
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//         <div className="tab-content" id="myTabContent">
//           <div
//             className="tab-pane fade show active"
//             id="home"
//             role="tabpanel"
//             aria-labelledby="home-tab"
//           >
//             Home
//           </div>
//           <div
//             className="tab-pane fade"
//             id="profile"
//             role="tabpanel"
//             aria-labelledby="profile-tab"
//           >
//             About
//           </div>
//           <div
//             className="tab-pane fade"
//             id="contact"
//             role="tabpanel"
//             aria-labelledby="contact-tab"
//           >
//             Contact
//           </div>
//         </div>
//         {/* --------------------------- Navbar -------------------------- */}
//         {/* navbar */}
//         <div className="col-md-6 col-sm-12 card-col" key={i}>
//           <div className="card">
//             <img src={el.img} />
//             <div className="intro">
//               <div className="container">
//                 <Para color="green" size="m" className="heading paraM-text">
//                   {el.name}
//                 </Para>

//                 <hr className="line" />

//                 <Para color="white" size="l" weight="normal">
//                   {el.title}
//                 </Para>

//                 <div className="hide-para">
//                   <Para color="white" size="s" weight="light">
//                     {el.para}
//                     {/* sum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry's "break"
//                   <span className="">
//                     {" "}
//                     sum is simply dummy text of the printing and typesetting
//                     industry.
//                   </span> */}
//                   </Para>

//                   <NavLink className="card-btn section-btn" to="services">
//                     Learn More
//                     <span>
//                       <IoIosArrowDroprightCircle />
//                     </span>
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   });
// };

export default Card;
