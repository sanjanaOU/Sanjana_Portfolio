import React from "react";
import SectionShell from "../components/SectionShell";
import { certifications } from "../data";

export default function CertificationsPage(){
  return (
    <SectionShell kicker="Global Certifications" title="CERTIFICATIONS">
      <ul className="bullets">
        {certifications.map((c,i)=><li key={i}>{c}</li>)}
      </ul>
      
    </SectionShell>
  );
}
