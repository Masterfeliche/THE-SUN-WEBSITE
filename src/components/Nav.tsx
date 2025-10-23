// src/components/Nav.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const activeStyle = {
    background: "#ff8a33", // orange
    color: "#000000",
  };

  const linkStyle = {
    color: "#ffffff",
    padding: "6px 10px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  return (
    <header style={{ background: "#000000", color: "#ffffff", position: "sticky", top: 0, zIndex: 60, boxShadow: "0 2px 6px rgba(0,0,0,0.4)" }}>
      {/* Skip link */}
      {/* <a href="#main" style={{ position: "absolute", left: -9999, top: "auto" }} className="sr-only focus:not-sr-only">Skip to content</a> */}

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="visible sm: invisible" style={{ width: 40, height: 40, borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", background: "#ff7a1a" }}>
              <span className="visible sm: invisible" style={{ fontWeight: 800, color: "#000" }}>☀</span>
            </div>
            <NavLink to="/" className="hidden" style={{ color: "#fff", fontWeight: 700, fontSize: 18, textDecoration: "none" }}> <span style={{ color: "#ffb28a" }}>The</span> Sun</NavLink>
          </div>

          {/* --- Desktop links --- */}
          {/* FIX 1: Removed inline 'style' attribute.
            FIX 2: Changed 'className' to hide on mobile ('hidden') and show on desktop ('md:flex').
          */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
            {/* FIX 3: Removed 'className="sm:hidden"' from all links below */}
            <NavLink to="/" end style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>About</NavLink>
            <NavLink to="/programs" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Programs</NavLink>
            {/* <NavLink to="/blog" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Blog</NavLink> */}
            <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Contact</NavLink>

            <NavLink to="/donate" style={{ marginLeft: 8, padding: "8px 12px", borderRadius: 8, background: "#ff7a1a", color: "#000", fontWeight: 700, textDecoration: "none" }}>
              Donate
            </NavLink>
          </nav>

          {/* --- Mobile toggle --- */}
          {/* This part is correct: 'md:hidden' shows it only on mobile */}
          <div className="md:hidden">
            <button onClick={() => setOpen((s) => !s)} aria-label="Toggle menu" style={{ background: "transparent", border: "none", color: "#fff", padding: 8 }}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* --- Mobile panel --- */}
        {/* This part is correct: It renders when 'open' is true and is hidden on desktop ('md:hidden') */}
        {open && (
          <div className="md:hidden" style={{ padding: "8px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Added onClick to close menu on navigation */}
              <NavLink to="/" onClick={() => setOpen(false)} style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle, display: "block" } : { ...linkStyle, display: "block" })}>Home</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle, display: "block" } : { ...linkStyle, display: "block" })}>About</NavLink>
              <NavLink to="/programs" onClick={() => setOpen(false)} style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle, display: "block" } : { ...linkStyle, display: "block" })}>Programs</NavLink>
              <NavLink to="/blog" onClick={() => setOpen(false)} style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle, display: "block" } : { ...linkStyle, display: "block" })}>Blog</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle, display: "block" } : { ...linkStyle, display: "block" })}>Contact</NavLink>
              <NavLink to="/donate" onClick={() => setOpen(false)} style={{ marginTop: 6, padding: "8px 12px", borderRadius: 8, background: "#ff7a1a", color: "#000", fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
                Donate
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}