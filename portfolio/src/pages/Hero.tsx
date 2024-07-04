import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import data from "../data/data.ts";
import developer_vector from "../assets/developer_vector.svg";
import resume from "/Resume-Vighnesh-Brahme-v1.pdf";

type linksObject = {
  linkedin: string;
  github: string;
};

const Hero: React.FC = () => {
  const socials: linksObject = data.socialLinks;

  return (
    <section className="section h-screen w-screen grid place-items-center">
      <div className="container flex flex-col-reverse justify-center items-center md:flex-row">
        <div className="content flex flex-col gap-2">
          <p className="text-2xl">Hello, I am</p>
          <p className="text-3xl">Vighnesh Brahme</p>
          <p className="text-2xl">Junior Full Stack Developer</p>
          <div className="btn-box flex gap-2 justify-center items-center">
            <Button
              size="md"
              variant="solid"
              color="primary"
              component="a"
              href={resume}
            >
              Download Resume
            </Button>
            <Link to="/contact">
              <Button size="md" variant="outlined" color="neutral">
                Contact Info
              </Button>
            </Link>
          </div>
          <div className="socials flex justify-center">
            <IconButton
              aria-label="Icon Link to Linkedin Profile"
              component="a"
              href={socials.linkedin}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Open in new tab"
              component="a"
              href={socials.github}
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div className="pic w-[80vw] md:w-[40vw]">
          <img
            src={developer_vector}
            alt="developer vector image"
            width="100%"
          />
          {/* TODO => Replace with something interesting */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
