import { useState } from "react";
import "./PhotoMockup.scss";

const PhotoMockup = ({laptop, mobile, text}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <>
      <div
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        className="mockup text-center"
      >
        <img
          src={laptop}
          className="laptopMockup img-fluid"
          alt={text}
        />

        <img
          src={mobile}
          className={hovered ? "mobileMockup" : "noMobileMockup"}
          alt={text}
        />

        <h4
          className={
            hovered ? "mt-3 mockupTextHover fw-medium text-uppercase" : "mt-3 fw-medium text-uppercase"
          }
        >
          {text}
        </h4>
      </div>
    </>
  );
};

export default PhotoMockup;
