import React from "react";
import Image from "../assets/Item.png";
import ReactStars from "react-stars";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
const BreifCard = (props) => {
  return (
    <div className="breifCard">
      <div className="img-Container-Breif">
        <img width="141px" height="103px" src={Image} />
      </div>
      <div className="absoluteBox">{props.index}</div>
      <div className="breif-center">
        <div className="titleContainer">
          <span className="title">{props.title}</span> {props.desc}
        </div>

        <div className="highlightContainer">
          <p className="highlight">Main highlights</p>
          {props.index != 4 ? (
            <p className="ml">{props.highlight}</p>
          ) : (
            <div className="breifExtra1 ml">
              <div className="inside">
                <span>9.9</span>
                <p>building responsive</p>
              </div >
              <div className="inside">
                <span>8.9</span>
                <p>Docs</p>
              </div>
              <div className="inside">
                <span>8.9</span>
                <p>Cool</p>
              </div>
            </div>
          )}
        </div>
        {props.index == 4 && (
          <div className="breifExtra2  ">
            <p>Why we love it</p>
            <div className="inside ml">
              <CiCircleCheck />
              <p>Documentation</p>
            </div>
            <div className="inside ml">
              <CiCircleCheck />
              <p>Easy Use</p>
            </div>
            <div className="inside ml">
              <CiCircleCheck />
              <p>Out of box</p>
            </div>
          </div>
        )}
        <div className="showMore">
          <p>Show More</p>
          <RiArrowDropDownLine className="showMore" />
        </div>
      </div>

      <div className="breif-right">
        <div className="ratingDiv">
          <p className="rating">{props.rating}</p>
          <p>{props.review}</p>
          <ReactStars
            count={5}
            value={props.rating / 2}
            color1="#808080"
            color2="#ffd700"
            size={20}
            edit={false}
          />
        </div>

        <div>
          <button className="breifButton viewButton">View</button>
        </div>
      </div>
    </div>
  );
};

export default BreifCard;
