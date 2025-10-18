// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

/* Placeholder pages: create simple components for these or replace with real pages */
const About = () => <div className="max-w-5xl mx-auto p-6">About page (replace)</div>;
const Programs = () => <div className="max-w-5xl mx-auto p-6">Programs list (replace)</div>;
// const ProgramDetail = ({ id }) => <div className="max-w-5xl mx-auto p-6">Program detail (replace)</div>;
const Blog = () => <div className="max-w-5xl mx-auto p-6">Blog (replace)</div>;
const Contact = () => <div className="max-w-5xl mx-auto p-6">Contact (replace)</div>;
const Donate = () => <div className="max-w-5xl mx-auto p-6">Donate (replace)</div>;
const Volunteer = () => <div className="max-w-5xl mx-auto p-6">Volunteer (replace)</div>;
const Reports = () => <div className="max-w-5xl mx-auto p-6">Reports (replace)</div>;
const Privacy = () => <div className="max-w-5xl mx-auto p-6">Privacy (replace)</div>;

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        {/* <Route path="/programs/:id" element={<ProgramDetail />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}
