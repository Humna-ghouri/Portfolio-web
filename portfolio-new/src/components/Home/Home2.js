import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hackerAvatar from "../../Assets/main-img.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const handleEmailClick = () => {
    window.location.href = "mailto:humnaghouri001@gmail.com";
  };

  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn close"></span>
                  <span className="terminal-btn minimize"></span>
                  <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">about_me.txt</div>
              </div>
              <div className="terminal-content">
                <h1 className="terminal-command">
                  <span className="accent-green">$ </span>
                  <span className="accent-green">cat </span>
                  about_me.txt
                </h1>
                <p className="about-body">
                  <span className="accent-green"># </span>
                  Passionate about turning data into insights and code into solutions
                  <br /><br />
                  <span className="accent-green"># </span>
                  Currently mastering {"{"}
                  <span className="accent-blue">Data Science</span>,{" "}
                  <span className="accent-blue">Machine Learning</span>,{" "}
                  <span className="accent-blue">AI Algorithms</span>
                  {"}"}
                  <br /><br />
                  <span className="accent-green"># </span>
                  My current focus is on {"{"}
                  <span className="accent-green">Predictive Analytics</span> and{" "}
                  <span className="accent-green">AI Integration</span>
                  {"}"}
                  <br /><br />
                  <span className="accent-green"># </span>
                  Building intelligent systems with {"{"}
                  <span className="accent-green">Python</span>,{" "}
                  <span className="accent-green">TensorFlow</span>,{" "}
                  <span className="accent-green">PyTorch</span>
                  {"}"}
                </p>
                
                <div className="skills-container">
                  <h2 className="skills-heading">
                    <span className="accent-green">$ </span>
                    skills --list
                  </h2>
                  <div className="skills-grid">
                    <div className="skill-category">
                      <h3>Data Science</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">TensorFlow</span>
                        <span className="skill-tag">PyTorch</span>
                        <span className="skill-tag">Pandas</span>
                        <span className="skill-tag">NumPy</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h3>Web Development</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">Express</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h3>Data Visualization</h3>
                      <div className="skill-tags">
                        <span className="skill-tag">Matplotlib</span>
                        <span className="skill-tag">Seaborn</span>
                        <span className="skill-tag">Tableau</span>
                        <span className="skill-tag">Power BI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="projects-showcase">
                  <h2 className="skills-heading">
                    <span className="accent-green">$ </span>
                    data_projects --recent
                  </h2>
                  <div className="project-item">
                    <span className="accent-blue">→ </span>
                    Predictive Sales Analysis Model - Python, Scikit-learn
                  </div>
                  <div className="project-item">
                    <span className="accent-blue">→ </span>
                    Customer Segmentation using Clustering Algorithms
                  </div>
                  <div className="project-item">
                    <span className="accent-blue">→ </span>
                    Sentiment Analysis for Product Reviews - NLP
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="hacker-avatar">
            <Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
              <div className="avatar-container">
                <img src={hackerAvatar} className="img-fluid hacker-img" alt="hacker avatar" />
                <div className="avatar-overlay">
                  <span className="overlay-text">#datascience</span>
                  <span className="overlay-text">#machinelearning</span>
                  <span className="overlay-text">#ai</span>
                </div>
                <div className="avatar-scanline"></div>
                <div className="data-points">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="data-point" style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`
                    }}></div>
                  ))}
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="about-social">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn close"></span>
                  <span className="terminal-btn minimize"></span>
                  <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">social_connections.sh</div>
              </div>
              <div className="terminal-content">
                <h1 className="terminal-command">
                  <span className="accent-green">$ </span>
                  ./social_connections.sh
                </h1>
                <p className="social-description">
                  Feel free to <span className="accent-green">connect</span> with me
                </p>
                <ul className="social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Humna-ghouri"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <AiFillGithub />
                      <span className="social-tooltip">GitHub</span>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/humna-ghouri/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedinIn />
                      <span className="social-tooltip">LinkedIn</span>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/humna_ghouri/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <AiFillInstagram />
                      <span className="social-tooltip">Instagram</span>
                    </a>
                  </li>
                  <li className="social-icons">
                    <button
                      onClick={handleEmailClick}
                      className="social-icon"
                      title="humnaghouri001@gmail.com"
                      type="button"
                    >
                      <AiFillMail />
                      <span className="social-tooltip">Email</span>
                    </button>
                  </li>
                </ul>
                <p className="email-text">
                  <span className="accent-green">→ </span>
                  Email: <span className="accent-green">humnaghouri001@gmail.com</span>
                </p>
                <p className="email-text">
                  <span className="accent-green">→ </span>
                  Currently learning: <span className="accent-blue">Advanced Machine Learning</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .about-section {
          padding: 100px 0;
          background: rgba(10, 15, 30, 0.95);
          position: relative;
          border-top: 1px solid rgba(0, 255, 145, 0.2);
          overflow: hidden;
        }
        
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 255, 145, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0, 195, 255, 0.05) 0%, transparent 40%);
          pointer-events: none;
        }
        
        .terminal-window {
          background: rgba(15, 25, 45, 0.7);
          border-radius: 10px;
          border: 1px solid rgba(0, 255, 145, 0.2);
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 30px rgba(0, 255, 145, 0.1);
          overflow: hidden;
        }
        
        .terminal-header {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          background: rgba(10, 20, 30, 0.8);
          border-bottom: 1px solid rgba(0, 255, 145, 0.2);
        }
        
        .terminal-buttons {
          display: flex;
          gap: 8px;
        }
        
        .terminal-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        
        .terminal-btn.close {
          background: #ff5f56;
        }
        
        .terminal-btn.minimize {
          background: #ffbd2e;
        }
        
        .terminal-btn.maximize {
          background: #27c93f;
        }
        
        .terminal-title {
          flex: 1;
          text-align: center;
          color: #8892b0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }
        
        .terminal-content {
          padding: 25px;
        }
        
        .terminal-command {
          font-family: 'Courier New', monospace;
          color: #ccd6f6;
          font-size: 1.8rem;
          margin-bottom: 25px;
          text-shadow: 0 0 5px rgba(0, 255, 145, 0.3);
        }
        
        .about-body {
          font-family: 'Courier New', monospace;
          color: #8892b0;
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        
        .skills-container {
          margin-top: 40px;
        }
        
        .projects-showcase {
          margin-top: 40px;
          padding: 20px;
          background: rgba(0, 255, 145, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 145, 0.1);
        }
        
        .project-item {
          font-family: 'Courier New', monospace;
          color: #ccd6f6;
          margin: 15px 0;
          font-size: 1.1rem;
        }
        
        .skills-heading {
          font-family: 'Courier New', monospace;
          color: #ccd6f6;
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .skill-category h3 {
          color: #00ff91;
          font-family: 'Share Tech Mono', monospace;
          font-size: 1.3rem;
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(0, 255, 145, 0.3);
          padding-bottom: 8px;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .skill-tag {
          padding: 8px 15px;
          background: rgba(0, 255, 145, 0.1);
          border: 1px solid rgba(0, 255, 145, 0.3);
          border-radius: 4px;
          color: #00ff91;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .skill-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 145, 0.3), transparent);
          transition: all 0.5s ease;
        }
        
        .skill-tag:hover {
          background: rgba(0, 255, 145, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(0, 255, 145, 0.3);
        }
        
        .skill-tag:hover::before {
          left: 100%;
        }
        
        .hacker-avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .avatar-container {
          position: relative;
          display: inline-block;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(0, 255, 145, 0.3);
        }
        
        .hacker-img {
          width: 100%;
          display: block;
          transition: all 0.5s ease;
        }
        
        .avatar-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(transparent, rgba(10, 15, 30, 0.9));
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          opacity: 0;
          transition: all 0.5s ease;
        }
        
        .avatar-scanline {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 20px;
          background: linear-gradient(transparent, rgba(0, 255, 145, 0.3), transparent);
          animation: scan 3s linear infinite;
          opacity: 0;
          pointer-events: none;
        }
        
        .data-points {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .data-point {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #00ff91;
          border-radius: 50%;
          opacity: 0;
          animation: dataPoint 3s infinite;
          box-shadow: 0 0 10px #00ff91;
        }
        
        .avatar-container:hover .avatar-overlay {
          opacity: 1;
        }
        
        .avatar-container:hover .hacker-img {
          transform: scale(1.05);
        }
        
        .avatar-container:hover .avatar-scanline {
          opacity: 1;
        }
        
        .overlay-text {
          padding: 5px 10px;
          background: rgba(0, 255, 145, 0.2);
          border: 1px solid rgba(0, 255, 145, 0.3);
          border-radius: 4px;
          color: #00ff91;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
        }
        
        .social-description {
          font-family: 'Courier New', monospace;
          color: #8892b0;
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          padding: 0;
          margin: 30px 0;
          list-style: none;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .social-icons {
          position: relative;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border: 1px solid rgba(0, 255, 145, 0.3);
          border-radius: 50%;
          background: rgba(0, 255, 145, 0.1);
          color: #00ff91;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 145, 0.3), transparent);
          transition: all 0.5s ease;
        }
        
        .social-icon:hover {
          background: rgba(0, 255, 145, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 255, 145, 0.4);
        }
        
        .social-icon:hover::before {
          left: 100%;
        }
        
        .social-tooltip {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 10px;
          background: rgba(0, 255, 145, 0.9);
          color: #0a192f;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          border-radius: 4px;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
        }
        
        .social-icon:hover .social-tooltip {
          opacity: 1;
          bottom: -35px;
        }
        
        .email-text {
          color: #ccd6f6;
          font-size: 1.2rem;
          margin-top: 20px;
          font-family: 'Courier New', monospace;
        }
        
        .accent-green {
          color: #00ff91;
          text-shadow: 0 0 5px rgba(0, 255, 145, 0.3);
        }
        
        .accent-blue {
          color: #00c3ff;
          text-shadow: 0 0 5px rgba(0, 195, 255, 0.3);
        }
        
        @keyframes scan {
          0% { top: -100%; }
          20% { opacity: 1; }
          100% { top: 100%; opacity: 1; }
        }
        
        @keyframes dataPoint {
          0% { opacity: 0; transform: scale(0); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: scale(0); }
        }
        
        @media (max-width: 768px) {
          .terminal-command {
            font-size: 1.5rem;
          }
          
          .about-body {
            font-size: 1rem;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .social-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .terminal-content {
            padding: 20px;
          }
        }
      `}</style>
    </Container>
  );
}

export default Home2;