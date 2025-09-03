import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div>
      <div className="profile">
        <img src="/assets/profile.png" alt="Sanjana Kalidindi" />
      </div>
      <div className="name">Sanjana Kalidindi</div>
      <div className="role">Software Developer</div>

      <nav className="nav">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/interests">INTERESTS</NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/education">EDUCATION</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/certifications">CERTIFICATIONS</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>

      {/* Only these three, styled by .social in CSS (brand blue, no pill background) */}
      <div className="social">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </div>
  );
}
