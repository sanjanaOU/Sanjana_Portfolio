import React from "react";
import { FaBriefcase, FaPenNib } from "react-icons/fa";

const experienceData = [
  {
    title: "Data Analyst and development Engineer at Storylinez",
    date: "oct 2024 – Present",
    description: [
       "Project: AI-Powered Advertisement Generation System",
    "An intelligent platform that automates the creation of targeted advertisements using customer data, behavioral insights, and creative media elements.",
    "As an intern contributing to the AI ad generation system, I:",
    "Performed end-to-end data handling, including collecting raw datasets from various user and product sources, cleaning, preprocessing, and preparing them for ML model training.",
    "Conducted exploratory data analysis (EDA) to extract patterns in consumer behavior, enabling better targeting strategies.",
    "Developed interactive frontend interfaces for visualizing advertisement performance and user engagement using Angular.",
    "Collaborated with AI engineers to design input pipelines that feed relevant product and customer data into ad generation models.",
    "Helped optimize the data-to-ad pipeline, improving system efficiency and responsiveness by automating trigger flows and reducing manual configuration efforts by over 50%."
    ],
    icon: <FaBriefcase size={14} />,
    iconColor: "#3b82f6",
  },
  {
    title: "Graduate Teaching Assistant at University of Oklahoma,Norman",
    date: "jan 2024 – sep 2024",
    description: [
      "As a Teaching Assistant, I:.",
      "Assisted students in Python course by handling doubts in lab sessions.",
      "Helped Professor in grading assignments.",
    ],
    icon: <FaBriefcase size={14} />,
    iconColor: "#facc15",
  },

  {
    title: "SDE Intern at Cyient Ltd.",
    date: "June 2023 – Aug 2023",
    description: [
 "Project: Road Health Analytics using Satellite Imagery",
    "A data-driven solution designed to assess road conditions from satellite images to support smarter decision-making by local governments and municipalities.",
    "As an intern at Cyient, I:",
    "Developed a data pipeline to collect, clean, and annotate over 300,000 satellite images from various regions of Hyderabad.",
    "Applied Mask R-CNN for object detection and segmentation to identify road surface conditions.",
    "Performed exploratory data analysis (EDA) to uncover geographic trends in road damage and maintenance needs.",
    "Supported model training and evaluation, comparing prediction accuracy across different object detection approaches.",
    "Generated reports that highlighted insights from the model and supported infrastructure planning decisions.",
    "Gained hands-on experience in deep learning workflows, large-scale image processing, and smart city analytics."

    ],
    icon: <FaBriefcase size={14} />,
    iconColor: "#ef4444",
  },
];

const responsibilities = [
  {
    title: "Vice Chair at CodeChef-JNTUH",
    date: "Sep 2019 – June 2020",
    description: [
      "Carried Chapter’s mission and vision forth.",
      "Organized several Technical Workshops and events including hack-a-thons.",
      "Learnt team management through productive brainstorming sessions.",
      "Developed leadership qualities and openness to new ideas.",
    ],
    icon: <FaPenNib size={14} />,
    iconColor: "#3b82f6",
  },
  {
    title: "Coordinator for Avirbhav  ‘2020",
    date: "Dec 2020 – Mar 2020",
    description: [
      "Member of Purchase Committee, responsible for Avirbhav events.",
      "Understood the workflow and chain of command.",
    ],
    icon: <FaPenNib size={14} />,
    iconColor: "#fbbf24",
  },
  {
    title: "Core-Committee member at CodeChef-JNTUH",
    date: "Dec 2017 – Mar 2019",
    description: [
      "Dedicated technical team member.",
      "Conducted technical seminars and workshops.",
    ],
    icon: <FaPenNib size={14} />,
    iconColor: "#ef4444",
  },
];

const TimelineSection = ({ data, sectionTitle, subtitle }) => (
  <div className="experience-container">
    <div className="section-header">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">{sectionTitle}</h2>
    </div>
    <div className="timeline">
      {data.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div
            className="timeline-icon"
            style={{ backgroundColor: item.iconColor }}
          >
            {item.icon}
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">
              {item.title}
              <span className="timeline-date">{item.date}</span>
            </h3>
            <ul className="timeline-list">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="timeline-end-dot" />
    </div>
  </div>
);

const Experience = () => {
  return (
    <>
      <TimelineSection
        data={experienceData}
        sectionTitle="EXPERIENCE"
        subtitle="EXPERIENCE"
      />
      <TimelineSection
        data={responsibilities}
        sectionTitle="POSITIONS OF RESPONSIBILITY"
        subtitle="RESPONSIBILITY"
      />

      <style jsx>{`
        .experience-container {
          padding: 60px 20px;
          background-color: #fff;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-subtitle {
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          letter-spacing: 2px;
        }

        .section-title {
          font-family: "Georgia", serif;
          font-size: 32px;
          font-weight: bold;
          color: #111827;
          text-transform: uppercase;
          margin: 0;
        }

        .timeline {
          position: relative;
          margin-left: 30px;
          border-left: 3px solid #d1d5db;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
          padding-left: 30px;
        }

        .timeline-icon {
          position: absolute;
          left: -19px;
          top: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .timeline-content {
          background: #f9fafb;
          border-radius: 10px;
          padding: 24px 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .timeline-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .timeline-date {
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
          margin-left: 8px;
        }

        .timeline-list {
          padding-left: 20px;
        }

        .timeline-list li {
          font-size: 15px;
          color: #374151;
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .timeline-end-dot {
          position: absolute;
          top: 100%;
          left: -10px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #fff;
          border: 3px solid #d1d5db;
        }
      `}</style>
    </>
  );
};

export default Experience;
