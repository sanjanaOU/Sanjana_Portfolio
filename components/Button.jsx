import React from "react";
export default function Button({href, children}) {
  return (
    <a href={href} className="iconbtn" style={{borderRadius:20,padding:"8px 14px", background:"#2b66da", color:"#fff"}}>
      {children}
    </a>
  );
}
