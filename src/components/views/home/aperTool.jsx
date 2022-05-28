/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import { Fade } from "react-reveal";
import "./team.css";
const AperTool = () => {
  return (
    <div
      id="apertool"
      className="w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="main-container ">
        {/* <Fade bottom> */}
        <h3
          style={{ fontSize: "55px" }}
          className="section-title mb-5 font-arcade text-center"
        >
          {/* APER.TOOLS */}
          UTILITY
        </h3>
        {/* </Fade> */}
        <div className="team-wrapper mt50">
          <p className="font-medium">
            We are working on the ultimate screening tool by integrating real
            time data from public, social media platforms and NFT marketplaces
            to an AI algorithm that will analyze the data and provide a detailed
            and accurate representation of the project.
          </p>
          {/* <br />
          <p className="font-medium">aper.tools will include features like:</p>
          <p className="font-medium">
            -scanning Discord moderators, providing information on other
            projects they have been affiliated with, letting verified club
            members/subscribers review and rate them.
          </p>
          <p className="font-medium">
            -scanning Twitter, highlighting blue chip followers, providing
            engagement ratio, showcase most popular and less popular tweets
            related to the project and more
          </p>
          <p className="font-medium">
            -provide designer’s information, affiliations, social media
            accounts, rating option for members.
          </p>
          <p className="font-medium">
            -scanning instagram and youtube for stats like followers, engagement
            rate, blue chip followers, popular mentions and more. ( this will
            mostly be used for influencer scanning )
          </p>
          <br />
          <br />
          <p style={{ textAlign: "center" }} className="font-medium">
            Check out our other site for more info at&nbsp;
            <a
              style={{ color: "blue" }}
              href="https://aper.tools"
              target="_blank"
            >
              Aper.Tools
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AperTool;
