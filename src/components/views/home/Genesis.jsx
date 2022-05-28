import React, { useState, useLayoutEffect } from "react";
import { Fade } from "react-reveal";
import { BsCheckSquare } from "react-icons/bs";

const Genesis = () => {
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
  return (
    <div
      id="genesis"
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="main-container">
        <Fade bottom>
          <h3
            className="section-title uppercase mb-5 font-arcade text-center"
            style={{ fontSize: "55px" }}
          >
            APERIANS GENESIS
          </h3>
        </Fade>
        <div className="flex ">
          <ul
            className="flex flex-col mt-20"
            style={width > 600 ? { marginLeft: "220px" } : null}
          >
            {list.map(({ id, title }) => {
              return (
                <Fade key={id} bottom>
                  <li className="flex text-xl mb-5  font-bold">
                    <span className="flex self-center">
                      <BsCheckSquare />
                    </span>
                    <span className="flex self-center font-medium  pl-4">
                      {title}
                    </span>
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

export default Genesis;

const list = [
  {
    id: 1,
    title: "9001 unique hand crafted and randomly generated NFT’s.",
  },
  {
    id: 2,
    title:
      "Each Aperians Genesis NFT grants lifetime access to our wide variety of utilities",
  },
  {
    id: 3,
    title:
      "Every Aperians NFT holder has lifetime access to the Aperians Club.",
  },
  {
    id: 4,
    title: "5% of the trading revenue distributed to the holders.",
  },
  {
    id: 5,
    title:
      "5% of the revenue from the future subscription fees will be distributed to the Aperians Genesis holders.",
  },
  {
    id: 6,
    title:
      "Monthly airdrop of the governance token distributed to the Aperians Genesis owners.",
  },
  // ,
  // {
  //   id: 7,
  //   title:
  //     "Lifetime access to the biggest nft club in Miami, Los Angeles and Metaverse.",
  // },
  // {
  //   id: 8,
  //   title: "Access to exclusive drops and social events.",
  // },
];
