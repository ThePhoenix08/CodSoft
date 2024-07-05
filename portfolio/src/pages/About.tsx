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
      <div className="container flex flex-col md:flex-row p-2 gap-4 md:p-0 lg:w-5/6 justify-center items-center">
        <div className="pic w-[70vw] md:w-[35vw] lg:w-[25vw] mt-8 md:m-0">
          <img
            src={myPic}
            alt="My close up photo"
            className="w-full object-contain rounded-3xl"
          />
        </div>
        <div className="content flex flex-col gap-4 h-full md:w-1/2 px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-4 md:w-full p-4 items-center md:items-stretch">
            <Card className="w-full lg:w-1/2">
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
            <Card className="w-full lg:w-1/2">
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
          <div className="grid place-items-center mb-8 md:m-0">
            <Typography level="body-lg" className="w-11/12 text-justify">
              I'm Vighnesh Brahme, a Computer Engineering student passionate
              about technology and software development. Proficient in C, C++,
              Python, and JavaScript, I specialize in creating dynamic user
              interfaces with HTML, CSS, and JavaScript. Recently, I have
              expanded my skill set to include the MERN stack (MongoDB,
              Express.js, React, Node.js), GraphQL, Material UI basics, and
              Tailwind CSS basics. Dedicated to becoming a full-stack developer,
              I am driven by a love for problem-solving and turning concepts
              into reality.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
