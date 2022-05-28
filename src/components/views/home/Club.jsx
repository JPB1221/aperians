import React, { useState, useLayoutEffect } from "react";
import { Fade } from "react-reveal";
import { BsCheckSquare } from "react-icons/bs";
// content merged
// import rightImage from "../../../assets/imgs/aperians.svg";
import "./club.css";
const Club = () => {
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
      id="club"
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="main-container ">
        <Fade bottom>
          <h3
            style={{ fontSize: "55px" }}
            className="section-title mb-5 font-arcade text-center"
          >
            APERIANS CLUB
          </h3>
        </Fade>
        <div className="flex ">
          <ul
            className="flex flex-col mt-20 gap-4 flex-1"
            style={width > 600 ? { marginLeft: "220px" } : null}
          >
            {list.map(({ id, title }) => {
              return (
                <Fade key={id} bottom>
                  <li className="flex text-xl  font-bold">
                    <span className="flex self-center">
                      <BsCheckSquare />
                    </span>
                    <span className="flex self-center pl-4">{title}</span>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="absolute -right-[250px] top-48 sm:top-0 houseimg"> */}
      {/* <img
          src={rightImage}
          alt=""
          // className="w-[1000px]"
          className="building-image"
        /> */}
      {/* </div> */}
    </div>
  );
};

export default Club;

const list = [
  {
    id: 1,
    title: "Members only Social Club",
  },
  {
    id: 2,
    title: "Located in Miami, Los Angeles and Metaverse",
  },
  {
    id: 3,
    title: "Exclusive events access and merch drops",
  },
  {
    id: 4,
    title: "Network with Top Artists, Investors and Influencers",
  },
  {
    id: 5,
    title: "Early access to Blue Chip Projects",
  },
  {
    id: 6,
    title: "Members projects promotion",
  },
];
