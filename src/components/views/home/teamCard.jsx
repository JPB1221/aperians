/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./teamCard.css";

const TeamCard = ({
  image,
  name,
  post,
  twitterLink,
  instagramLink,
  youtubeLink,
  linkedinLink,
  artstationLink,
  mt,
}) => {
  return (
    <div
      className="teamCard-main-wrapper"
      style={mt ? { marginTop: mt } : null}
    >
      <div className="card-img-wrapper">
        <img src={image} alt="team1" />
        {twitterLink ? (
          <a href={twitterLink} target="_blank">
            <span className="twitter-wrapper">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
        ) : null}
        {instagramLink ? (
          <a href={instagramLink} target="_blank">
            <span className="instagram-wrapper">
              <i className="fab fa-instagram"></i>
            </span>
          </a>
        ) : null}
        {youtubeLink ? (
          <a href={youtubeLink} target="_blank">
            <span className="youtube-wrapper">
              <i className="fab fa-youtube"></i>
            </span>
          </a>
        ) : null}
        {linkedinLink ? (
          <a href={linkedinLink} target="_blank">
            <span className="youtube-wrapper">
              <i className="fab fa-linkedin"></i>
            </span>
          </a>
        ) : null}
        {artstationLink ? (
          <a href={artstationLink} target="_blank">
            <span className="youtube-wrapper">
              <i className="fab fa-artstation"></i>
            </span>
          </a>
        ) : null}
      </div>
      <div className="cardText-wrapper">
        <h3>
          {name}
          <br />
          {post}
        </h3>
      </div>
      {/* <div className="cardLinks-wrapper">
        <span className="linkwrapper">
          <i className="fab fa-twitter"></i>
        </span>
        &nbsp;
        <span className="linkwrapper">
          <i className="fab fa-twitter"></i>
        </span>
        &nbsp;
        <span className="linkwrapper">
          <i className="fab fa-youtube"></i>
        </span>
      </div> */}
    </div>
  );
};

export default TeamCard;
