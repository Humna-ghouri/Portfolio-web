// Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiDocker,
  SiJupyter,
  SiAnaconda,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  const sectionStyle = {
    padding: "40px 0",
    background: "linear-gradient(145deg, #0a192f, #0f1a30)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 255, 65, 0.1)"
  };

  const iconStyle = {
    color: "#00ff41",
    fontSize: "3.5rem",
    transition: "all 0.3s ease",
    padding: "15px",
    background: "rgba(0, 255, 65, 0.05)",
    borderRadius: "10px",
    border: "1px solid rgba(0, 255, 65, 0.1)"
  };

  const titleStyle = {
    color: "#00ff41",
    marginBottom: "30px",
    paddingBottom: "15px",
    fontSize: "1.8rem",
    fontWeight: "600",
    letterSpacing: "1px",
    borderBottom: "2px solid rgba(0, 255, 65, 0.3)"
  };

  return (
    <div style={sectionStyle}>
      <div className="container">
        <h3 style={titleStyle}>
          Development Tools
        </h3>
        <Row className="justify-content-center g-4">
          {[
            { icon: <SiVisualstudiocode style={iconStyle} />, name: "VS Code" },
            { icon: <SiPostman style={iconStyle} />, name: "Postman" },
            { icon: <SiGit style={iconStyle} />, name: "Git" },
            { icon: <SiGithub style={iconStyle} />, name: "GitHub" },
            { icon: <FaTerminal style={iconStyle} />, name: "Terminal" }
          ].map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon-wrapper">
                {item.icon}
                <p style={{
                  fontSize: "1.1rem",
                  marginTop: "15px",
                  color: "#e2e8f0",
                  fontWeight: "500"
                }}>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h3 style={{ ...titleStyle, marginTop: "50px" }}>
          Deployment & Data Science
        </h3>
        <Row className="justify-content-center g-4">
          {[
            { icon: <SiDocker style={iconStyle} />, name: "Docker" },
            { icon: <SiJupyter style={iconStyle} />, name: "Jupyter" },
            { icon: <SiAnaconda style={iconStyle} />, name: "Anaconda" },
            { icon: <SiVercel style={iconStyle} />, name: "Vercel" },
            { icon: <SiNetlify style={iconStyle} />, name: "Netlify" }
          ].map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
              <div className="tech-icon-wrapper">
                {item.icon}
                <p style={{
                  fontSize: "1.1rem",
                  marginTop: "15px",
                  color: "#e2e8f0",
                  fontWeight: "500"
                }}>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Toolstack;