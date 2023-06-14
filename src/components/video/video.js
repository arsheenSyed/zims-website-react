import React from "react";
import "./video.css";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Heading from "../../text/heading";
import Wrapper from "../../components2/wrapper/wrapper";

import Para from "../../text/para";
const VideoSection = () => {
  return (
    <Wrapper className="video-section" padding="yes">
      <div className="container">
        <Wrapper className="video-section-wrapper" padding="yes">
          <Heading color="green" size="s">
            Zims Consultancy
          </Heading>
          <Para color="white" size="m" weight="light">
            We have a good grasp on starting businesses in Australia, America,
            Singapore and Malaysia. We also provide a detailed consultation if
            needed.
          </Para>
          <button
            type="button"
            className="btn modal-open"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Watch Video{" "}
            <span>
              <AiOutlinePlayCircle />
            </span>
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Zims Consultancy
                  </h5>

                  <button
                    type="button"
                    className="btn-close btn-close-white close-modal"
                    data-bs-dismiss="modal"
                  >
                    <GrFormClose />
                  </button>
                </div>
                <div className="modal-body">
                  {/* <iframe
                    width="560"
                    height="315"
                    src="https://youtube.com/watch?v=R-jn9G7kges&feature=shares"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe> */}

                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/R-jn9G7kges"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </Wrapper>
  );
};

export default VideoSection;
