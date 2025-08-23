import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hackerImg from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <div className="cyber-bg-animation">
        <div className="cyber-grid"></div>
        <div className="cyber-lines"></div>
        <div className="cyber-glow"></div>
      </div>

      <Container 
        fluid 
        className="home-section" 
        id="home"
      >
        <Particle />
        
        {/* Terminal cursor effect */}
        <div className="terminal-cursor"></div>

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <div className="typing-container">
                <h1 className="terminal-command">
                  $ ./initialize_portfolio.sh<span className="blinking-cursor">_</span>
                </h1>
              </div>

              <h1 className="terminal-prompt">
                <span className="accent-blue">Huma_Ghouri</span>
                <span className="accent-green">@</span>
                <span>MERN_Stack</span>
                <span className="accent-green">:</span>
                <span>~$</span>
                <span className="accent-green"> cat welcome.txt</span>
              </h1>

              <div className="terminal-comment">
                {"// Full Stack Developer | AI & Data Science Enthusiast"}
                <br />
                {"// Building intelligent digital solutions"}
              </div>

              <div className="typewriter-container">
                <Type />
              </div>
            </Col>

            <Col md={5} className="hacker-image-container">
              <div className="image-frame">
                <img
                  src={hackerImg}
                  alt="Hacker illustration"
                  className="hacker-image"
                />
                <div className="image-glitch"></div>
                <div className="data-stream"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      
      <style jsx>{`
        .cyber-bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(125deg, #0a0a2a, #0d0d1a, #0a192f);
        }
        
        .cyber-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 145, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 145, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: gridMove 20s linear infinite;
        }
        
        .cyber-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 145, 0.1), transparent),
                     linear-gradient(transparent, rgba(0, 195, 255, 0.1), transparent);
          animation: scan 15s linear infinite;
        }
        
        .cyber-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(0, 255, 145, 0.05) 0%, transparent 40%),
                     radial-gradient(circle at 80% 70%, rgba(0, 195, 255, 0.05) 0%, transparent 40%);
          animation: pulse 10s ease-in-out infinite;
        }
        
        .home-section {
          position: relative;
          padding: 120px 0 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .terminal-cursor {
          position: absolute;
          width: 20px;
          height: 2px;
          background: #00ff91;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          animation: blink 1.5s infinite;
          box-shadow: 0 0 10px #00ff91;
        }
        
        .home-content {
          position: relative;
          z-index: 1;
        }
        
        .typing-container {
          margin-bottom: 25px;
        }
        
        .terminal-command {
          font-family: 'Courier New', monospace;
          color: #00ff91;
          font-size: 1.8rem;
          margin: 0;
          text-shadow: 0 0 5px rgba(0, 255, 145, 0.5);
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end);
        }
        
        .terminal-prompt {
          font-family: 'Courier New', monospace;
          color: #ccd6f6;
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        
        .terminal-comment {
          font-family: 'Courier New', monospace;
          color: #a5d0b0ff;
          font-size: 1.7rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .typewriter-container {
          min-height: 120px;
          background: rgba(15, 25, 45, 0.3);
          border: 1px solid rgba(0, 255, 145, 0.2);
          border-radius: 5px;
          padding: 20px;
          margin-top: 20px;
          backdrop-filter: blur(5px);
        }
        
        .hacker-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .image-frame {
          position: relative;
          border: 2px solid rgba(0, 255, 145, 0.3);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 255, 145, 0.2);
          transition: all 0.5s ease;
        }
        
        .image-frame:hover {
          box-shadow: 0 0 50px rgba(0, 255, 145, 0.4);
          transform: translateY(-5px);
        }
        
        .hacker-image {
          width: 100%;
          display: block;
          position: relative;
          z-index: 1;
          border-radius: 8px;
        }
        
        .image-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(0, 255, 145, 0.1) 0%, transparent 70%);
          opacity: 0;
          z-index: 2;
          pointer-events: none;
          animation: glitch 5s infinite;
        }
        
        .data-stream {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 20px;
          background: linear-gradient(transparent, rgba(0, 255, 145, 0.5), transparent);
          animation: dataFlow 6s linear infinite;
          opacity: 0.7;
        }
        
        .blinking-cursor {
          animation: blink 1s infinite;
          color: #00ff91;
        }
        
        .accent-green {
          color: #00ff91;
          text-shadow: 0 0 5px rgba(0, 255, 145, 0.3);
        }
        
        .accent-blue {
          color: #00c3ff;
          text-shadow: 0 0 5px rgba(0, 195, 255, 0.3);
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1 }
          51%, 100% { opacity: 0 }
        }
        
        @keyframes glitch {
          0%, 100% { opacity: 0.05; transform: translate(0); }
          5% { opacity: 0.2; transform: translate(-5px, 5px); }
          10% { opacity: 0.1; transform: translate(5px, -5px); }
          15% { opacity: 0.3; transform: translate(-5px, -5px); }
          20% { opacity: 0.2; transform: translate(5px, 5px); }
          25% { opacity: 0; transform: translate(0); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
        
        @keyframes scan {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes dataFlow {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        
        @media (max-width: 768px) {
          .terminal-command {
            font-size: 1.3rem;
          }
          
          .terminal-prompt {
            font-size: 1.2rem;
          }
          
          .terminal-comment {
            font-size: 1rem;
          }
          
          .home-section {
            padding: 100px 0 60px;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;