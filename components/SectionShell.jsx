import React from "react";

export default function SectionShell({kicker, title, children, center=true}) {
  return (
    <section className={center ? "center-page" : ""}>
      <div>
        {kicker && <div className="kicker" style={{marginBottom:6}}>{kicker}</div>}
        {title && <h2 className="h2" style={{marginBottom:28}}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
