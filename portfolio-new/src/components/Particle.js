// src/components/Particle.js
import React from "react";
import "./Particle.css";

function Particle() {
  return (
    <div className="particles-container">
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </div>
  );
}

export default Particle;