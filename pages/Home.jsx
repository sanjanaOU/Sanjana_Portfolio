import React from "react";
import ParticlesBG from "../components/ParticlesBG";
import TypeWriter from "../components/TypeWriter";

export default function Home() {
  return (
    <section className="center-page" style={{ position: "relative" }}>
      <ParticlesBG />
      <div>
        <div className="h-hello">Hi!</div>
        <div className="h-hero" style={{ marginTop: 14 }}>I&apos;m Sanjana</div>
        <TypeWriter />
      </div>
    </section>
  );
}
