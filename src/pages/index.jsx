import * as React from "react";

import { SingleCard } from "../components";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

import "../assets/css/style.scss";

const Packages = [
  {
    img: img1,
    litText: "Lit100",
    mb: "100Mb",
    price: 25,
    color: "#F7A944",
    cardColor: "linear-gradient(to bottom right, #FC805F, #F7AB44)",
    figCaption: `Single & Couples`,
    scale: "1.2, 0.7",
    borderColor: `#F7A944`,
    topBanner: false,
    activeBorder: "",
  },
  {
    img: img2,
    litText: "Lit500",
    mb: "500Mb",
    price: 35,
    color: "#F7CF44",
    cardColor: "linear-gradient(to bottom right, #FC805F80, #F7C044,#F7E244)",
    figCaption: `Families`,
    scale: "1.4, 1.2",
    borderColor: `#F7CF44`,
    topBanner: true,
    activeBorder: "activeBorder",
  },
  {
    img: img3,
    litText: "Lit1000",
    mb: "1Gb",
    price: 45,
    color: "#24ADA9",
    cardColor: "#24ADA9",
    scale: "0.9, 0.9",
    figCaption: `Serious Users`,
    borderColor: `#24ADA9`,
    topBanner: false,
    activeBorder: "",
  },
];

const IndexPage = () => {
  return (
    <div className="main-section">
      <div className="main-container">
        <div className="card-container">
          <div className="main-highlight">
            <h3 className="average-text">
              Average Upload &amp; Download Speed
            </h3>
            <h4 className="recommended-text">Recommended for</h4>
          </div>

          {Packages?.map((pkg) => (
            <SingleCard
              key={pkg.figCaption}
              img={pkg.img}
              litText={pkg.litText}
              mb={pkg.mb}
              price={pkg.price}
              color={pkg.color}
              cardColor={pkg.cardColor}
              figCaption={pkg.figCaption}
              scale={pkg.scale}
              borderColor={pkg.borderColor}
              topBanner={pkg.topBanner}
              activeBorder={pkg.activeBorder}
            />
          ))}
        </div>
        <p className="terms-link">See Terms And Conditions</p>
      </div>
    </div>
  );
};

export default IndexPage;
