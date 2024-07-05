import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Boxes } from "../components/ui/background-boxes.tsx";

import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { socialLinks } from "../data/data.ts";
import developer_vector from "../assets/developer_vector.svg";
import resume from "/Resume-Vighnesh-Brahme-v1.pdf";
import { MobileContext } from "../context/MobileContext.tsx";

type linksObject = {
  linkedin: string;
  github: string;
};

const Hero: React.FC = () => {
  const socials: linksObject = socialLinks;
  const { isMobile } = useContext(MobileContext);

  return (
    <section className="section flex-1 w-full grid place-items-center overflow-hidden">
      {/* {isMobile && (
        <>
          <div className="fixed inset-0 w-full h-full bg-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>
          <div className="fixed w-screen h-screen">
            <Boxes />
          </div>
        </>
      )} */}
      <div className="container flex flex-col-reverse justify-center items-center md:flex-row z-20 pointer-events-none">
        <div className="content flex flex-col gap-4 pointer-events-auto">
          <p className="text-2xl">Hello, I am</p>
          <p className="text-4xl">Vighnesh Brahme</p>
          <p className="text-2xl">Junior Full Stack Developer</p>
          <div className="btn-box flex gap-4 justify-center items-center">
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
              <Button size="md" variant="soft" color="neutral">
                Contact Info
              </Button>
            </Link>
          </div>
          <div className="socials flex justify-center gap-2">
            <IconButton
              aria-label="Icon Link to Linkedin Profile"
              component="a"
              href={socials.linkedin}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Open in new tab"
              component="a"
              href={socials.github}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div className="pic w-[80vw] md:w-[40vw] pointer-events-auto">
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
