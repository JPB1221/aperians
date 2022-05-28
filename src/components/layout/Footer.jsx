/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Fade from "react-reveal/Fade";


const Footer = () => {
  return (
    <div className="w-full bg-transparent py-14">
      <div className="main-container ">
        <div className="flex flex-col items-center">
          <Fade bottom>
            <div className="flex gap-x-4 mb-5">
              <a href="https://discord.gg/aperians" target="_blank">
                <div className="text-base flex justify-center items-center cursor-pointer rounded-full w-10 h-10 bg-white text-black">
                  <FaDiscord />
                </div>
              </a>
              <a href="https://instagram.com/aperians.club/" target="_blank">
                <div className="text-base flex justify-center items-center cursor-pointer rounded-full w-10 h-10 bg-white text-black">
                  <AiOutlineInstagram />
                </div>
              </a>
              <a href="https://twitter.com/aperians" target="_blank">
                <div className="text-base flex justify-center items-center cursor-pointer rounded-full w-10 h-10 bg-white text-black">
                  <AiOutlineTwitter />
                </div>
              </a>
            </div>
          </Fade>
          <Fade bottom>
            <h4 className="font-bold text-center text-lg uppercase mb-2">
              aperians
            </h4>
          </Fade>
          <Fade bottom>
            <h4 className="font-bold text-center text-lg uppercase mb-8">
              Miami | Los Angeles
            </h4>
          </Fade>





          <Fade bottom>
            <h4 className="text-center mb-4">
              Copyright 2022 APERIANS-All Rights Reserved
            </h4>
          </Fade>


          <Fade bottom>
            <div className="terms_ flex items-center space-x-2 uppercase text-sm">

              <a href='disclaimer' target='_blank'>
                <h4 className="text-center">
                  disclaimer
                </h4>
              </a>

              <span className="px-1">|</span>

              <a href='terms_and_conditions' target='_blank'>
                <h4 className="text-center">
                  terms and conditions
                </h4>
              </a>

            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Footer;
