import React from "react";
import Typography from "@mui/joy/Typography";
import SkillBox from "../components/SkillBox";
import { skills } from "../data/data.ts";
import SkillIcons from "../components/icons.ts";

const renderSkills = (category: keyof typeof skills): JSX.Element[] => {
  return skills[category].map((skill, index) => (
    <SkillBox
      key={index}
      name={skill.name}
      level={skill.level}
      icon_slug={SkillIcons[skill.name]}
    />
  ));
};

const Skills: React.FC = () => {
  return (
    <section className="section flex-1 flex flex-col p-2 md:p-0 gap-4 items-center justify-center">
      <Typography level="h1">My Skills</Typography>
      <div className="container flex flex-col justify-center items-center md:w-max gap-4">
        <div className="flex flex-col gap-2 border-2 rounded-xl p-4 w-full">
          <Typography level="title-md">Frontend Web Development</Typography>
          <div className="box flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4">
            {renderSkills("Frontend Web Development")}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 rounded-xl p-4 w-full">
          <Typography level="title-md">Backend Web Development</Typography>
          <div className="box flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4">
            {renderSkills("Backend Web Development")}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 rounded-xl p-4 w-full">
          <Typography level="title-md">Others Skills</Typography>
          <div className="box flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4">
            {renderSkills("Tools and Others")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
