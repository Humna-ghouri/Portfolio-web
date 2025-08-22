import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import hackerImg from "../../Assets/about-pg-img.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <div className="cyber-matrix-bg">
        <div className="matrix-rain"></div>
        <div className="cyber-grid"></div>
        <div className="glowing-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", position: "relative", zIndex: 2 }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="cyber-terminal-command">
              <span className="command-prompt">$</span> whoami 
              <span className="cursor-blink">_</span>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              paddingTop: "120px", 
              paddingBottom: "50px",
              textAlign: "center"
            }}
            className="about-img"
          >
            <div className="hacker-img-container">
              <img 
                src={hackerImg} 
                alt="Humna Ghouri" 
                className="img-fluid hacker-portrait"
              />
              <div className="scanning-overlay"></div>
              <div className="data-lines">
                <div className="data-line"></div>
                <div className="data-line"></div>
                <div className="data-line"></div>
              </div>
            </div>
          </Col>
        </Row>
        
        <h1 className="cyber-section-title">
          <span className="hex-code">#0xSK1LL5</span> skillset --professional
        </h1>
        <Techstack />

        <h1 className="cyber-section-title">
          <span className="hex-code">#0x700L5</span> tools --list
        </h1>
        <Toolstack />

        <Github />
      </Container>

      <style jsx>{`
        .about-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0a192f 0%, #07101e 50%, #050c18 100%);
          padding: 80px 0;
        }
        
        .cyber-matrix-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, rgba(0, 255, 65, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        
        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 65, 0.1) 100%),
            linear-gradient(transparent 98%, rgba(0, 255, 65, 0.1) 100%);
          background-size: 30px 30px;
          pointer-events: none;
        }
        
        .glowing-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.1;
        }
        
        .orb-1 {
          width: 300px;
          height: 300px;
          background: #00ff41;
          top: 10%;
          left: 10%;
          animation: float 15s infinite alternate;
        }
        
        .orb-2 {
          width: 200px;
          height: 200px;
          background: #00ff9d;
          top: 60%;
          right: 15%;
          animation: float 12s infinite alternate-reverse;
        }
        
        .orb-3 {
          width: 250px;
          height: 250px;
          background: #39ff14;
          bottom: 10%;
          left: 20%;
          animation: float 18s infinite alternate;
        }
        
        .cyber-terminal-command {
          font-family: 'Share Tech Mono', monospace;
          color: #00ff41;
          font-size: 2.8rem;
          margin-bottom: 30px;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
          letter-spacing: 1px;
        }
        
        .command-prompt {
          color: #00ff41;
          margin-right: 15px;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
          color: #00ff41;
        }
        
        .hacker-img-container {
          position: relative;
          display: inline-block;
          border: 2px solid #00ff41;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
          transition: all 0.4s ease;
        }
        
        .hacker-img-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 40px rgba(0, 255, 65, 0.5);
        }
        
        .hacker-portrait {
          max-height: 400px;
          width: auto;
          display: block;
          position: relative;
          z-index: 1;
          filter: grayscale(30%) contrast(110%);
        }
        
        .scanning-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 65, 0.1) 50%,
            transparent 100%
          );
          opacity: 0.5;
          animation: scan 3s linear infinite;
          pointer-events: none;
          z-index: 2;
        }
        
        .data-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }
        
        .data-line {
          position: absolute;
          height: 1px;
          background: rgba(0, 255, 65, 0.7);
          width: 100%;
          animation: dataFlow 4s linear infinite;
        }
        
        .data-line:nth-child(1) {
          top: 25%;
          animation-delay: 0s;
        }
        
        .data-line:nth-child(2) {
          top: 50%;
          animation-delay: 1.3s;
        }
        
        .data-line:nth-child(3) {
          top: 75%;
          animation-delay: 2.7s;
        }
        
        .cyber-section-title {
          font-family: 'Share Tech Mono', monospace;
          color: #e0e0e0;
          font-size: 2.2rem;
          margin: 60px 0 40px;
          text-align: center;
          position: relative;
          padding: 15px 0;
          border-bottom: 2px solid rgba(0, 255, 65, 0.3);
        }
        
        .hex-code {
          color: #00ff41;
          margin-right: 15px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.1); }
          100% { transform: translate(-10px, -20px) scale(0.9); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </Container>
  );
}

export default About;