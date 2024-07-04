import React, { useState, useContext } from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../context/MobileContext.tsx";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TerminalIcon from "@mui/icons-material/Terminal";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Navbar = () => {
  const [section, setSection] = useState<string>("hero");
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
    <nav className="w-screen flex justify-center pb-4 flex-shrink-1 md:h-1/6 md:p-0">
      <div className="navbar z-30">
        <RadioGroup
          orientation="horizontal"
          aria-labelledby="sections-navbar"
          value={section}
          onChange={handleSectionChange}
          sx={{
            minHeight: 48,
            padding: "4px",
            borderRadius: "12px",
            bgcolor: "neutral.softBg",
            "--RadioGroup-gap": "4px",
            "--Radio-actionRadius": "8px",
          }}
        >
          {sections.map((item) => (
            <Radio
              key={item}
              color="neutral"
              value={item}
              disableIcon
              label={isMobile ? SectionIcons[item] : item}
              variant="soft"
              sx={{
                px: 2,
                alignItems: "center",
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: {
                    ...(checked && {
                      bgcolor: "background.surface",
                      boxShadow: "sm",
                      "&:hover": {
                        bgcolor: "background.surface",
                      },
                    }),
                  },
                }),
              }}
            />
          ))}
        </RadioGroup>
      </div>
    </nav>
  );
};

export default Navbar;
