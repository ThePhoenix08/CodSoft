import React, { useState, useContext } from "react";
import { Typography, Button } from "@mui/joy";
import { Context } from "../context/Context.tsx";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import FileOpenIcon from "@mui/icons-material/FileOpen";

import { socialLinks } from "../data/data";

const Contact: React.FC = () => {
  const { isMobile } = useContext(Context);
  const size: "lg" | "md" = isMobile ? "md" : "lg";

  const [shareStateColor, setShare] = useState<
    "neutral" | "success" | "danger"
  >("neutral");

  const handleShare = (): void => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my Portfolio",
          text: "Explore my latest projects",
          url: socialLinks.portfolio,
        })
        .then(() => {
          setShare("success");
          setTimeout(() => {
            setShare("neutral");
          }, 5000);
        })
        .catch((error) => {
          setShare("danger");
          console.log(error.message);
          setTimeout(() => {
            setShare("neutral");
          }, 5000);
        });
    } else {
      // Fallback for devices or browsers that don't support navigator.share
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${socialLinks.portfolio}`,
        "_blank"
      );
    }
  };

  return (
    <section className="section flex-1 w-full grid place-items-center p-4 md:p-0">
      <div className="flex flex-col items-center justify-center gap-8 border-2 rounded-xl p-8">
        <Typography level="h1">Contact Me</Typography>
        <div className="socials grid grid-cols-2 gap-8 items-center">
          <Typography fontSize={size} level="h3">
            Drop a Line at{" "}
          </Typography>
          <Button
            component="a"
            href={socialLinks.mailme}
            endDecorator={<EmailIcon />}
            size={size}
            variant="outlined"
            color="neutral"
          >
            Mail
          </Button>
          <Typography fontSize={size} level="h3">
            See My Work at
          </Typography>
          <Button
            component="a"
            href={socialLinks.github}
            endDecorator={<GitHubIcon />}
            size={size}
            color="neutral"
            variant="outlined"
          >
            Github
          </Button>
          <Typography fontSize={size} level="h3">
            Let's Connect
          </Typography>
          <Button
            component="a"
            href={socialLinks.linkedin}
            endDecorator={<LinkedInIcon />}
            size={size}
            color="neutral"
            variant="outlined"
          >
            LinkedIn
          </Button>
          <Typography fontSize={size} level="h3">
            Share My Work
          </Typography>
          <Button
            color={shareStateColor}
            component="a"
            href={socialLinks.portfolio}
            endDecorator={<ShareIcon />}
            onClick={handleShare}
            size={size}
            variant="outlined"
          >
            Portfolio
          </Button>
          <Typography fontSize={size} level="h3">
            View My Resume
          </Typography>
          <Button
            component="a"
            href={socialLinks.resume}
            endDecorator={<FileOpenIcon />}
            size={size}
            color="neutral"
            variant="outlined"
          >
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
