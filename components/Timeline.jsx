import React from "react";

export default function Timeline({ items=[] }) {
  return (
    <div className="timeline">
      {items.map((it, idx)=>(
        <div key={idx} className="t-row">
          <div className="t-dot">📎</div>
          <div className="t-card">
            <div style={{fontWeight:700, fontSize:20}}>
              {it.title} <span style={{color:"#8a93a8", fontWeight:400, fontSize:16}}> {it.range}</span>
            </div>
            {it.project && <div style={{fontWeight:700, marginTop:12}}>Project: {it.project}</div>}
            <ul className="bullets" style={{marginTop:8}}>
              {it.points.map((p,i)=><li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
