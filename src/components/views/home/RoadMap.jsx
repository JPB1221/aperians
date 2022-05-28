import React, { useEffect, useState, useLayoutEffect } from "react";
import planet1 from "../../../assets/imgs/1.svg";
import planet2 from "../../../assets/imgs/2.svg";
import planet3 from "../../../assets/imgs/3.svg";
import planet4 from "../../../assets/imgs/4.svg";
import planet5 from "../../../assets/imgs/5.svg";
// import planet6 from "../../../assets/imgs/6.svg";
// import planet7 from "../../../assets/imgs/7.svg";
import img from "../../../assets/imgs/com-1--unscreen.gif";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "./roadMap.css";

const RoadMap = () => {
  const [checkId, setCheckId] = useState(0);
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  useEffect(() => {
    $(window).scroll(function () {
      var ufoTop = $(".ufo-image").offset().top;
      // eslint-disable-next-line array-callback-return
      timeSteps.map((timeStep) => {
        var planetTop = $(`.${timeStep.id}-star`).offset().top;
        if (ufoTop >= planetTop && timeStep.id > checkId) {
          setCheckId(timeStep.id);
        }
        if (ufoTop - 65 <= $(`.${timeSteps[0].id}-star`).offset().top) {
          setCheckId(0);
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="roadmap" className="min-h-screen flex items-center justify-center">
      <div className="w-full py-12">
        <div className="main-container">
          <Fade bottom>
            <h4 className="section-title  text-center DominoFarmRegular mb-14">
              Road Map
            </h4>
          </Fade>
          <Fade bottom>
            <h3 className="text-3xl font-bold DominoFarmRegular max-w-[980px] mx-auto w-full ">
              Phase 1
            </h3>
          </Fade>

          <ul
            className="flex flex-col min-w-[45px] h-min relative"
            style={{ marginTop: "30px" }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                bottom: "0px",
                paddingTop: "30px",
                paddingBottom: "60px",
              }}
            >
              <Fade left>
                <div className="sticky rocket inset-x-0 top-[25%] z-[9999] w-[80px] ml-[14px]">
                  <img className="relative ufo-image" src={img} alt="" />
                </div>
              </Fade>
            </div>
            {timeSteps.map(({ id, title, img, desc }) => {
              return (
                <Fade key={id} bottom>
                  <li
                    className={`flex gap-8 items-center mb-8 relative ${
                      width > 600 ? "ml-28" : null
                    } ${id === checkId && "active-li"}`}
                  >
                    <img
                      src={img}
                      alt="planet"
                      className={`w-[104px] h-[104px] ${id}-star`}
                      id={`star`}
                    />

                    <div>
                      <h3 className="text-2xl DominoFarmRegular capitalize mb-3">
                        {title}
                      </h3>
                      <p className="text-base">{desc}</p>
                    </div>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

const timeSteps = [
  {
    id: 0,
    title: "APERIANS GENESIS",
    desc: "Minting begins. The Aperians are released on the Ethereum Blockchain.",
    img: planet2,
  },

  {
    id: 1,
    title: "STAKING + TOKEN LAUNCH",
    desc: "Each Aperians Genesis NFT holder will be invited to stake their NFT’s for sweet rewards.",
    img: planet4,
  },

  {
    id: 2,
    title: "UTILITY LAUNCH",
    desc: "The utility tool will be released first for the Aperians NFT holders.",
    img: planet3,
  },
  {
    id: 3,
    title: "APERIANS CLUB GRAND OPENING",
    desc: "The first Aperians community clubhouse will be opened in Miami FL.",
    img: planet1,
  },
  {
    id: 4,
    title: "TO BE DECIDED BY THE COMMUNITY",
    desc: "We are building this project with our community in mind. Our team has developed some great features that could be included here however, we will let the community decide what comes next",
    img: planet5,
  },
  // {
  //   id: 5,
  //   title: "3D 8K DYNAMIC NFT DROP",
  //   desc: "The aperians are ready to land in the metaverse. Each Aperian will be upgraded to a 3D-8K dynamic character. This will increase the use case for each NFT and allow for beautiful interactions in the metaverse.",
  //   img: planet1,
  // },
  // {
  //   id: 6,
  //   title: "APERIANS UNIVERSE LAUNCH",
  //   desc: "Aperians are the rulers of the metaverse and they will own part of it. Before outsiders can land, the Aperians will buy and build with the $FIGS earned in the Training Camp.",
  //   img: planet5,
  // },
  // {
  //   id: 6,
  //   title: "APERIANS UNIVERSE LAUNCH",
  //   desc: "Aperians are the rulers of the metaverse and they will own part of it. Before outsiders can land, the Aperians will buy and build with the $FIGS earned in the Training Camp.",
  //   img: planet7,
  // },
];
