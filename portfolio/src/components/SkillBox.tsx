import React from "react";

type Props = {
  icon_slug: string;
  name: string;
  level: "Basic" | "Intermediate" | "Experienced";
};

const SkillBox: React.FC<Props> = ({ icon_slug, name, level }) => {
  const SimpleIconsEndpoint: string = "https://cdn.simpleicons.org/";
  const icon_url: string = SimpleIconsEndpoint + icon_slug;

  return (
    <div className="flex gap-4 items-center border-2 rounded-lg p-2">
      <div className={`w-8`}>
        <img height="32" width="32" src={icon_url} />
      </div>
      <div className="flex flex-col">
        <div>{name}</div>
        <div className="text-slate-600">{level}</div>
      </div>
    </div>
  );
};

export default SkillBox;
