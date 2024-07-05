const socialLinks = {
  linkedin: "https://www.linkedin.com/in/vighneshbrahme/",
  github: "https://github.com/ThePhoenix08",
};

type SubSkill = {
  name: string;
  level: "Basic" | "Intermediate" | "Experienced";
};

type SkillsObj = {
  [key: string]: SubSkill[];
};

const skills: SkillsObj = {
  "Frontend Web Development": [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Basic" },
    { name: "Javascript", level: "Experienced" },
    { name: "TailwindCSS", level: "Intermediate" },
    { name: "MaterialUI", level: "Basic" },
  ],
  "Backend Web Development": [
    { name: "NodeJS", level: "Basic" },
    { name: "ExpressJS", level: "Basic" },
    { name: "GraphQL", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
    { name: "Mongoose", level: "Basic" },
  ],
  "Tools and Others": [
    { name: "C++", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Typescript", level: "Basic" },
    { name: "Git", level: "Basic" },
  ],
};

export { socialLinks, skills };

