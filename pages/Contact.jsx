import React from "react";
import { FiMail } from "react-icons/fi";
import { TbMapPin } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>CONTACT</h2>
      <h3 style={styles.subheading}>GET IN TOUCH</h3>
      <div style={styles.stack}>
        <ContactCard
          icon={<FiMail size={28} color="#3399ff" />}
          text="sanjanakalidindi006@gmail.com"
          link="mailto:sanjanakalidindi006@gmail.com"
        />
        <ContactCard
          icon={<TbMapPin size={28} color="#3399ff" />}
          text="University of Oklahoma, Norman"
          link={null}
        />
        <ContactCard
          icon={<FaFileDownload size={28} color="#3399ff" />}
          text="Download Resume"
          link="/resume.pdf"
        />
      </div>
    </section>
  );
};

const ContactCard = ({ icon, text, link }) => {
  const cardContent = (
    <>
      <div style={styles.iconBox}>{icon}</div>
      <p style={styles.text}>{text}</p>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.card}
    >
      {cardContent}
    </a>
  ) : (
    <div style={styles.card}>{cardContent}</div>
  );
};

const styles = {
  section: {
    padding: "60px 80px",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "12px",
    letterSpacing: "4px",
    color: "#999",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  subheading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
    letterSpacing: "2px",
    color: "#111",
  },
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f8fc",
    padding: "15px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.2s ease",
  },
  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#eef4fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px",
  },
  text: {
    fontSize: "16px",
    color: "#3399ff",
    wordBreak: "break-word",
  },
};

export default Contact;
