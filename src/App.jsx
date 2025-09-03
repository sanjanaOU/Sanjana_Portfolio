import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


import Home from "../pages/Home";
import About from "../pages/About";
import Interests from "../pages/Interests";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Certifications from "../pages/Certifications";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="about" element={<About />} />
        <Route path="interests" element={<Interests />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}



