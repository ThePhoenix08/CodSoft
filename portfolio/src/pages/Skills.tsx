import React from "react";
import Typography from "@mui/joy/Typography";
import SkillBox from "../components/SkillBox";
import { skills } from "../data/data.ts";
import SkillIcons from "../data/icons.ts";
import { cn } from "../utils/cn.ts";

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
      <Typography level="h1" textColor="inherit">
        My Skills
      </Typography>
      <div className="container flex flex-col justify-center items-center md:w-max gap-4">
        <SkillCategoryBox title="Frontend Web Development" />
        <SkillCategoryBox title="Backend Web Development" />
        <SkillCategoryBox
          title="Others Skills"
          identifier="Tools and Others"
          className="md:flex-nowrap"
        />
      </div>
    </section>
  );
};

const SkillCategoryBox = ({
  title,
  identifier,
  className,
}: {
  title: string;
  identifier?: string;
  className?: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-xl p-4 w-full dark:bg-zinc-900 dark:border-zinc-700">
      <Typography level="title-md" textColor="inherit">
        {title}
      </Typography>
      <div
        className={cn(
          "box flex flex-col md:flex-row flex-wrap gap-4",
          className || "lg:flex-nowrap"
        )}
      >
        {renderSkills(identifier || title)}
      </div>
    </div>
  );
};

export default Skills;
