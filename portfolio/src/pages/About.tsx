import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import myPic from "../assets/portfolio-pic2.png";

const About: React.FC = () => {
  return (
    <section className="section flex-1 w-full grid place-items-center">
      <div className="container flex flex-col md:flex-row p-2 gap-4 md:p-0 lg:w-5/6 justify-center items-center">
        <img
          src={myPic}
          alt="My close up photo"
          className="w-[70vw] md:w-[35vw] lg:w-[25vw] mt-8 md:m-0 object-contain rounded-3xl"
        />
        <div className="flex flex-col gap-4 h-full md:w-1/2 px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full p-4 items-center md:items-stretch">
            <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-4 flex flex-col items-center md:items-start">
              <SchoolIcon className="text-4xl" />
              <h1 className="text-lg md:text-xl mt-2">Education</h1>
              <p className="text-base md:text-lg mt-2">
                Currently in Third Year <br />
                Pursuing B. E in Computer Engineering, at SPPU
              </p>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-4 flex flex-col items-center md:items-start">
              <WorkIcon className="text-4xl" />
              <h1 className="text-lg md:text-xl mt-2">Experience</h1>
              <p className="text-base md:text-lg mt-2">
                1 year in Frontend Web Development
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base w-11/12 text-justify mb-8 md:m-0 self-center">
            I'm Vighnesh Brahme, a Computer Engineering student passionate about
            technology and software development. Proficient in C, C++, Python,
            and JavaScript, I specialize in creating dynamic user interfaces
            with HTML, CSS, and JavaScript. Recently, I have expanded my skill
            set to include the MERN stack (MongoDB, Express.js, React, Node.js),
            GraphQL, Material UI basics, and Tailwind CSS basics. Dedicated to
            becoming a full-stack developer, I am driven by a love for
            problem-solving and turning concepts into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
