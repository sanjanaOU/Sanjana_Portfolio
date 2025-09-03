import React from "react";
import SectionShell from "../components/SectionShell";
import Card from "../components/Card";
import { interests } from "../data";
import { LuLightbulb, LuNewspaper, LuCloud, LuLayers, LuBook, LuMusic } from "react-icons/lu";

const iconMap = {
  light: <LuLightbulb />,
  news: <LuNewspaper />,
  cloud: <LuCloud />,
  layers: <LuLayers />,
  book: <LuBook />,
   music: <LuMusic />,
};

export default function Interests() {
  return (
    <SectionShell kicker="Interests" title="INTERESTS">
      <div className="grid3" style={{marginTop:34}}>
        {interests.map((it, i)=>(
          <Card key={i} accent={it.accent}>
            <div className="hex" style={{background: it.hexColor}}>{iconMap[it.icon]}</div>
            <div className="title-sm">{it.title}</div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
