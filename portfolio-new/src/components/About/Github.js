// src/components/Github.js
import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ 
      justifyContent: "center", 
      padding: "40px 0",
      backgroundColor: "#0a192f",
      borderRadius: "10px",
      margin: "30px 0",
      boxShadow: "0 0 20px rgba(0, 255, 65, 0.1)"
    }}>
      <h1 className="project-heading" style={{ 
        paddingBottom: "30px",
        color: "#00ff41",
        fontSize: "2.5rem"
      }}>
        My <strong className="green">Coding</strong> Journey
      </h1>
      
      <div style={{
        width: "100%",
        textAlign: "center",
        color: "#94a3b8",
        fontSize: "1.1rem",
        marginTop: "20px"
      }}>
        <p>GitHub contributions visualization coming soon...</p>
        <p style={{ marginTop: "10px", color: "#00ff41" }}>
          Check my actual GitHub profile for activity: 
          <a 
            href="https://github.com/Humna-ghouri" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#00ff41", marginLeft: "5px" }}
          >
            github.com/Humna-ghouri
          </a>
        </p>
      </div>
    </Row>
  );
}

export default Github;