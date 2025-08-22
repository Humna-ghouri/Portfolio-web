// Techstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDjango,
  SiAmazonaws,
  SiFirebase,
  SiGraphql
} from "react-icons/si";
import { FaCode, FaDatabase, FaRobot } from "react-icons/fa";

function Techstack() {
  const sectionStyle = {
    padding: "40px 0",
    background: "linear-gradient(145deg, #0a192f, #0f1a30)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 255, 65, 0.1)",
    marginBottom: "40px"
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
          <FaCode style={{ marginRight: "15px" }} /> Web Development
        </h3>
        <Row className="justify-content-center g-4">
          {[
            { icon: <SiJavascript style={iconStyle} />, name: "JavaScript" },
            { icon: <SiTypescript style={iconStyle} />, name: "TypeScript" },
            { icon: <SiReact style={iconStyle} />, name: "React" },
            { icon: <SiNodedotjs style={iconStyle} />, name: "Node.js" },
            { icon: <SiExpress style={iconStyle} />, name: "Express" }
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
          <FaDatabase style={{ marginRight: "15px" }} /> Databases & Cloud
        </h3>
        <Row className="justify-content-center g-4">
          {[
            { icon: <SiMongodb style={iconStyle} />, name: "MongoDB" },
            { icon: <SiPostgresql style={iconStyle} />, name: "PostgreSQL" },
            { icon: <SiFirebase style={iconStyle} />, name: "Firebase" },
            { icon: <SiAmazonaws style={iconStyle} />, name: "AWS" },
            { icon: <SiGraphql style={iconStyle} />, name: "GraphQL" }
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
          <FaRobot style={{ marginRight: "15px" }} /> AI & Data Science
        </h3>
        <Row className="justify-content-center g-4">
          {[
            { icon: <SiPython style={iconStyle} />, name: "Python" },
            { icon: <SiTensorflow style={iconStyle} />, name: "TensorFlow" },
            { icon: <SiPytorch style={iconStyle} />, name: "PyTorch" },
            { icon: <SiDjango style={iconStyle} />, name: "Django" }
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

export default Techstack;