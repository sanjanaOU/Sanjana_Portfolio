import React from "react";
export default function Card({children, accent="blue"}) {
  return <div className="card" data-accent={accent}>{children}</div>;
}
