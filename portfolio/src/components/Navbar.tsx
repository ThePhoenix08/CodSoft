import React, { useState, useContext, useEffect } from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { useNavigate, useLocation } from "react-router-dom";
import { MobileContext } from "../context/MobileContext.tsx";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TerminalIcon from "@mui/icons-material/Terminal";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const trimLeftmostSlash = (str: string): string => str.replace(/^\//, "");

const Navbar: React.FC = () => {
  let { pathname } = useLocation();
  if (pathname === "/") {
    pathname = "hero";
  } else {
    pathname = trimLeftmostSlash(pathname);
  }

  const [section, setSection] = useState<string>(pathname);
  const sections: string[] = ["hero", "about", "skills", "projects", "contact"];
  const { isMobile } = useContext(MobileContext);
  const navigate = useNavigate();

  const SectionIcons: { [key: string]: JSX.Element } = {
    hero: <HomeIcon />,
    about: <InfoIcon />,
    skills: <AnalyticsIcon />,
    projects: <TerminalIcon />,
    contact: <ContactMailIcon />,
  };

  const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSection: string = event.target.value;
    setSection(newSection);
    navigate(`/${newSection !== "hero" ? newSection : ""}`);
  };

  return (
    <nav
      className={`w-screen flex sticky bottom-2 left-0 right-0 justify-center md:static md:h-1/5 h-12`}
    >
      <div className="navbar z-30 md:bottom-16 transition-all duration-300 ease-in-out">
        <RadioGroup
          orientation="horizontal"
          aria-labelledby="sections-navbar"
          value={section}
          onChange={handleSectionChange}
          sx={{
            minHeight: 48,
            padding: "4px",
            borderRadius: "100px",
            bgcolor: "neutral.softBg",
            transition: "all 0.3s ease-in-out",
            "--RadioGroup-gap": "12px",
            "--Radio-actionRadius": "100px",
          }}
        >
          {sections.map((item: string) => (
            <Radio
              key={item}
              color="neutral"
              value={item}
              disableIcon
              label={
                <div className="flex items-center gap-2">
                  {SectionIcons[item]}
                  {!isMobile && item === section && (
                    <span className="text-xl">{capitalize(item)}</span>
                  )}
                </div>
              }
              variant="soft"
              sx={{
                px: 2,
                alignItems: "center",
                "& .MuiRadio-action": {
                  transition: "all 0.3s ease-in-out",
                },
              }}
              slotProps={{
                action: ({ checked }) => {
                  return {
                    sx: {
                      ...(checked && {
                        bgcolor: "background.surface",
                        boxShadow: "sm",
                        "&:hover": {
                          bgcolor: "background.surface",
                        },
                      }),
                    },
                  };
                },
              }}
            />
          ))}
        </RadioGroup>
      </div>
    </nav>
  );
};

export default Navbar;
