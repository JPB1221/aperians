/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import last_logo from "../../../assets/imgs/last_logo.png";

import dollars from "../../../assets/imgs/dollars.png";
import { Fade } from "react-reveal";
import "./header.css";

const Header = () => {
  const [opacity, setOpacity] = useState(100);

  const hScroll = () => {
    if (window.scrollY > 15) return setOpacity(0);

    return setOpacity(100);
  };

  useEffect(() => {
    window.addEventListener("scroll", hScroll);

    return () => window.removeEventListener("scroll", hScroll);
  }, [opacity]);

  return (
    <div id="home" className="header w-full items-center relative flex">
      <div className="main-container h-full flex flex-col items-center justify-center">
        <div className="text-center relative flex justify-center">
          <Fade bottom>
            <div className="relative flex items-center justify-center">
              <img
                className="w-full md:w-[85%] 2xl:w-full"
                src={last_logo}
                alt="logo"
              />
              <img
                style={{ opacity: opacity }}
                className="absolute z-20 dolors"
                src={dollars}
                alt="logo"
              />
            </div>
          </Fade>
          <Fade bottom>
            <h3
              className="text-white font-arcade text-3xl absolute inset-x-0 top-1/2 m-auto w-max h-max"
              style={{ fontFamily: "arcadeclassic" }}
            ></h3>
          </Fade>
        </div>
        <Fade bottom>
          <div className="flex gap-x-4 items-center pt-20">
            <a href="https://instagram.com/aperians.club/" target="_blank">
              <div className="text-base flex justify-center items-center rounded-full cursor-pointer w-10 h-10 bg-white text-black">
                <AiOutlineInstagram />
              </div>
            </a>
            <a href="https://twitter.com/aperians" target="_blank">
              <div className="text-base flex justify-center items-center rounded-full cursor-pointer w-10 h-10 bg-white text-black">
                <AiOutlineTwitter />
              </div>
            </a>
            <a href="https://discord.gg/aperians" target="_blank">
              <div className="text-base flex justify-center items-center rounded-full cursor-pointer w-10 h-10 bg-white text-black">
                <FaDiscord />
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
