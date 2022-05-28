import React, { useState } from "react";
import Layout from "../../layout/Layout";
// import Club from "./Club";
import Genesis from "./Genesis";
import Header from "./Header";
import RoadMap from "./RoadMap";
import "video-react/dist/video-react.css";
import aperians_teaser_11111111 from "../../../assets/aperians_teaser_11111111.mp4";
import muteimg from "../../../assets/mute.png";
import unmuteimg from "../../../assets/unmute.png";
import { Player, ControlBar } from "video-react";
import Team from "./team";
// import AperTool from "./aperTool";
// import { useDispatch, useSelector } from "react-redux";
// import { homeConstants } from "../../../redux/constants";
// const { MUTE } = homeConstants;

// const isSafari = () => {
//   const ua = navigator.userAgent.toLowerCase();
//   return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
// };

const Index = () => {
  // const dispatch = useDispatch();
  // const _home = useSelector((state) => state.home);
  // const vidRef = useRef();
  // const videoParentRef = useRef();
  const [mute, setMute] = useState(true);
  // const [shouldUseImage, setShouldUseImage] = useState(false);

  // useEffect(() => {
  //   vidRef.current.play();
  // }, []);

  return (
    <Layout>
      <Header />
      <div id="intro">
        <Player
          src={aperians_teaser_11111111}
          muted={mute}
          autoPlay={true}
          // volume
          loop
          style={{ position: "relative" }}
          playsInline
          preload="auto"
        >
          <ControlBar disableCompletely={true} />
          <img
            style={
              mute
                ? {
                    width: "50px",
                    zIndex: "1000",
                    position: "absolute",
                    bottom: "0",
                    left: "10px",
                  }
                : { display: "none" }
            }
            src={unmuteimg}
            alt="mute"
            onClick={() => setMute(false)}
          />
          <img
            style={
              !mute
                ? {
                    width: "50px",
                    zIndex: "1000",
                    position: "absolute",
                    bottom: "0",
                    left: "10px",
                  }
                : { display: "none" }
            }
            src={muteimg}
            alt="mute"
            onClick={() => setMute(true)}
          />
        </Player>
      </div>

      <br />
      <br />
      <Genesis />
      <RoadMap />
      {/* <AperTool /> */}
      {/* <Club /> */}
      <Team />
    </Layout>
  );
};

export default Index;
