import React, { useState, useLayoutEffect } from "react";
import { Fade } from "react-reveal";
import team1 from "../../../assets/team/team1.jpeg";
import team2 from "../../../assets/team/team2.jpeg";
import team3 from "../../../assets/team/team3.jpeg";
import team4 from "../../../assets/team/team4.jpeg";
import team5 from "../../../assets/team/team5.jpeg";
import team6 from "../../../assets/team/team6.jpeg";
import team7 from "../../../assets/team/team7.jpeg";
import team8 from "../../../assets/team/team8.jpeg";
import team9 from "../../../assets/team/team9.jpeg";
import team10 from "../../../assets/team/team10.jpeg";
import team11 from "../../../assets/team/team11.jpeg";
import team12 from "../../../assets/team/team12.jpeg";
import "./team.css";
import TeamCard from "./teamCard";
import { Grid } from "@material-ui/core";
const Team = () => {
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
      id="team"
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="main-container ">
        <Fade bottom>
          <h3
            style={{ fontSize: "55px" }}
            className="section-title mb-5 font-arcade text-center"
          >
            TEAM
          </h3>
        </Fade>
        <div className="team-wrapper">
          <p className="font-medium">
            We are a team of NFT enthusiast that come from different
            backgrounds.Technology and Artistry is one of our biggest driver and
            this is why we have dedicated lots of effort and resources to build
            the most advanced utility tool for NFT collectors.{" "}
          </p>
          <p className="font-medium">
            Our team comes with massive experience from impacting brands such
            as: Adidas, Apple, Fendi, Mercedes-Benz, Superrare, Foundation,
            Sony, Netflix, HBO and more.{" "}
          </p>
          <p className="font-medium">
            More exciting things to come along. The Aperians Club is determined
            to become a leading name in the blockchain industry.
          </p>
          <br />
          <br />
          {/* <Fade bottom> */}
          {/* <div className="team-row"> */}
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team1}
                name="Adrian"
                post="Project Manager"
                twitterLink="https://twitter.com/aperians"
                instagramLink="https://www.instagram.com/adrian_in_la/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team12}
                name="Val"
                post="Founder"
                twitterLink=""
                instagramLink="https://www.instagram.com/v__vicitop/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "-25px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team3}
                name="Roman"
                post="Founder"
                twitterLink=""
                instagramLink="https://www.instagram.com/walkman_us/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "-20px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team11}
                name="JP"
                post="CTO"
                twitterLink=""
                instagramLink="https://www.instagram.com/jpb0402/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "-20px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team4}
                name="Kova"
                post="Community Manager"
                twitterLink="https://twitter.com/KovalencoG"
                instagramLink="https://www.instagram.com/kovalencogennadi/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team6}
                name="Greg"
                post="Marketing Advisor"
                twitterLink=""
                instagramLink="https://instagram.com/greggarud"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team9}
                name="Eugenia Firs"
                post="Artist"
                twitterLink="https://twitter.com/eugeniafirs?s=11&t=BOilpQx0kTmmNSXbeD2TOQ"
                instagramLink="https://www.instagram.com/eugeniafirs/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "10px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team10}
                name="Doina"
                post="Designer"
                twitterLink=""
                instagramLink="https://www.instagram.com/doina_la/"
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "-15px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team2}
                name="Nick"
                post="Video Production"
                twitterLink=""
                instagramLink=""
                youtubeLink="https://www.youtube.com/c/NIKIBOIX"
                linkedinLink=""
                artstationLink=""
                mt={width < 600 ? "15px" : null}
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team5}
                name="Dimbo"
                post="2D / 3D Design"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
                linkedinLink=""
                artstationLink="https://www.artstation.com/di_massive"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team7}
                name="Alex"
                post="Head Moderator"
                twitterLink=""
                instagramLink="https://instagram.com/gurikshrab?igshid=YmMyMTA2M2Y="
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team7}
                name="Igor"
                post="Head Moderator"
                twitterLink=""
                instagramLink="https://instagram.com/craco.off?igshid=YmMyMTA2M2Y="
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team8}
                name="Nick"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team8}
                name="Max"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <TeamCard
                image={team8}
                name="Brett"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
                linkedinLink=""
                artstationLink=""
              />
            </Grid>
          </Grid>
          {/* </div> */}
          {/* <div className="team-row">
              <TeamCard
                image={team6}
                name="Greg"
                post="Marketing Advisor"
                twitterLink=""
                instagramLink="https://instagram.com/greggarud"
                youtubeLink=""
              />
              <TeamCard
                image={team7}
                name="Nick"
                post="Video Production"
                twitterLink=""
                instagramLink=""
                youtubeLink="https://www.youtube.com/c/NIKIBOIX"
              />
              <TeamCard
                image={team8}
                name="Dima"
                post="2D / 3D Design"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
              />
              <TeamCard
                image={team9}
                name="Eugenia"
                post="Designer"
                twitterLink=""
                instagramLink="https://www.instagram.com/eugeniafirs/"
                youtubeLink=""
              />
              <TeamCard
                image={team10}
                name="Doina"
                post="Designer"
                twitterLink=""
                instagramLink="https://www.instagram.com/doina_la/"
                youtubeLink=""
              />
            </div>
            <div className="team-row">
              <TeamCard
                image={team11}
                name="JP"
                post="CTO"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
              />
              <TeamCard
                image={team12}
                name="Alex"
                post="Head Moderator"
                twitterLink=""
                instagramLink="https://instagram.com/gurikshrab?igshid=YmMyMTA2M2Y="
                youtubeLink=""
              />
              <TeamCard
                image={team8}
                name="Nick"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
              />
              <TeamCard
                image={team8}
                name="Max"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
              />
              <TeamCard
                image={team8}
                name="Brett"
                post="Moderator"
                twitterLink=""
                instagramLink=""
                youtubeLink=""
              />
            </div> */}
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
