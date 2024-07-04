import React from "react";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import myPic from "../assets/portfolio-pic2.png";

const About: React.FC = () => {
  return (
    <section className="section flex-1 w-full grid place-items-center">
      <div className="container flex md:w-5/6 justify-center items-center">
        <div className="pic w-[80vw] md:w-[30vw]">
          <img
            src={myPic}
            alt="My close up photo"
            className="w-full object-contain rounded-3xl"
          />
        </div>
        <div className="content flex flex-col gap-4 md:w-1/2 p-4">
          <div className="flex justify-center gap-4 md:h-11/12 md:w-11/12">
            <Card className="w-1/2">
              <CardContent orientation="vertical">
                <div className="flex items-center gap-4">
                  <div className="text-center h-full text-4xl">
                    <SchoolIcon fontSize="inherit" />
                  </div>
                  <Typography level="title-lg">Education</Typography>
                </div>
                <div>
                  <Typography level="body-lg">
                    Currently in Third Year <br />
                    Pursuing B. E in Computer Engineering, at SPPU
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card className="w-1/2">
              <CardContent orientation="vertical">
                <div className="flex items-center gap-4">
                  <div className="text-center h-full text-4xl">
                    <WorkIcon fontSize="inherit" />
                  </div>
                  <Typography level="title-lg">Experience</Typography>
                </div>
                <div>
                  <Typography level="body-lg">
                    1 year in Frontend Web Development
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
          <Typography level="body-md">
            I'm Vighnesh Brahme, a Computer Engineering student passionate about
            technology and software development. Proficient in C, C++, Python,
            and JavaScript, I specialize in creating dynamic user interfaces
            with HTML, CSS, and JavaScript. I'm dedicated to becoming a
            full-stack developer, driven by a love for problem-solving and
            turning concepts into reality.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default About;
