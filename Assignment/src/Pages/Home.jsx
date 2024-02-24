import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdErrorOutline, MdMargin } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import ViewCard from "../Components/ViewCard";
import BreifCard from "../Components/BreifCard";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

const data = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];

const Home = () => {
  return (
    <div className="main-page">
      {/* Section 1 */}

      <section className="section-1">
        <p className="section1-heading">Best Website builders in the US</p>
        <div className="section1-dated-part">
          <div className="div-row">
            <div className="div-row">
              <IoCheckmarkCircleOutline />
              <p>Last Updated - February 22, 2020</p>
            </div>
            <div className="div-row ml">
              <MdErrorOutline />
              <p>Advertising Disclosure</p>
            </div>
          </div>

          <div className="div-row">
            <p>Top Relevant</p>
            <RiArrowDropDownLine />
          </div>
        </div>

        <div className="mappingDataContainer">
          {data.map((item, index) => (
            <div key={index} className="mappingData">
              {item}
            </div>
          ))}
        </div>

        <div>
          <p className="text-color">
            {"Home > Hosting for all > Hosting > Hosting6 > Hosting5"}
          </p>
        </div>
      </section>

      {/* Section 2 */}

      <section className="section2">
        <div className="absolute-brief-container">
          <BreifCard
            rating="9.8"
            index="1"
            review="Exceptional"
            title="WixPro 72-Inch Responsive Website Builder-"
            desc="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue"
            highlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          />
          <div className="absolute-breif">
            <GoTrophy />
            <p>Best Choice</p>
          </div>
        </div>
        <div  className="absolute-brief-container">
          <BreifCard
            rating="9.5"
            review="Excellent"
            index="2"
            title="SiteCraft 68-Inch Ultimate Web Design Studio-"
            desc="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
            highlight="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          />
          <div className="absolute-breif">
            <IoDiamondOutline />
            <p>Best Value</p>
          </div>
        </div>
        <BreifCard
          rating="9.3"
          review="Exceptional"
          index="3"
          title="WixPro 72-Inch Responsive Website Builder-"
          desc="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue"
          highlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        />

        <BreifCard
          rating="9.1"
          review="Very Good"
          index="4"
          title="CDK Resposive Builder"
          desc=" An extensive library of widgets and apps, and detailed step-by-step guides"
          highlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        />
      </section>

      {/* section 3 */}

      <section className="section3">
        <p className="section3-title">Related deals you might like for</p>
        <div className="cardContainer">
          <ViewCard />
          <ViewCard />
          <ViewCard />
        </div>
      </section>

      {/* Section 4 */}
      <section className="section4">
        <div className="section4Title">
          Sign up and get exclusive special deals
        </div>
        <div>
          <input />
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
