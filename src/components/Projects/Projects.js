import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { BsGithub, BsArrowRight } from "react-icons/bs";

// Project Images (you'll need to add these images to your Assets/Projects folder)
import taskManager from "../../Assets/task-manager.jpg";
import scientificCalc from "../../Assets/task-manager.jpg";
import hackathonApp from "../../Assets/task-manager.jpg";
import ecommerce from "../../Assets/task-manager.jpg";
import salesUber from "../../Assets/task-manager.jpg";
import gameManagement from "../../Assets/task-manager.jpg";
import weatherApp from "../../Assets/task-manager.jpg";
import valorantWeb from "../../Assets/task-manager.jpg";
import portfolioWeb from "../../Assets/task-manager.jpg";
import animatedResume from "../../Assets/task-manager.jpg";

function Projects() {
  const projects = [
    {
      imgPath: taskManager,
      title: "MERN Task Management App",
      description: "Full-stack task management application with user authentication, task prioritization, and real-time updates. Built with React, Node.js, Express, MongoDB, and JWT authentication.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      ghLink: "https://github.com/Humna-ghouri/Frontendui",
      demoLink: "https://frontendui-qw57.onrender.com/",
      featured: true
    },
    {
      imgPath: gameManagement,
      title: "Python Game Management System",
      description: "Comprehensive game management system built with Python. Includes game catalog, user management, and interactive features for gaming enthusiasts.",
      tags: ["Python", "Tkinter", "Database", "GUI"],
      ghLink: "https://github.com/Humna-ghouri/Game-Management-system-",
      demoLink: "#",
      featured: true
    },
    {
      imgPath: scientificCalc,
      title: "Scientific Calculator",
      description: "Advanced scientific calculator with dark/light mode, trigonometric functions, logarithmic operations, and responsive design. Built with pure HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      ghLink: "https://github.com/Humna-ghouri/scientific-calculator",
      demoLink: "https://humna-ghouri.github.io/scientific-calculator/",
      featured: false
    },
    {
      imgPath: ecommerce,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      ghLink: "https://github.com/Humna-ghouri/E-commerce",
      demoLink: "https://humna-ghouri.github.io/E-commerce/",
      featured: false
    },
    {
      imgPath: hackathonApp,
      title: "Hackathon Post Sharing App",
      description: "Dynamic post-sharing platform with Firebase authentication and Firestore database. Users can create, share, and interact with posts in real-time.",
      tags: ["Firebase", "JavaScript", "HTML", "CSS"],
      ghLink: "https://github.com/Humna-ghouri/hackathon-app",
      demoLink: "https://humna-ghouri.github.io/hackathon-app/",
      featured: false
    },
    {
      imgPath: weatherApp,
      title: "Weather App",
      description: "Real-time weather application that provides current weather data and forecasts for locations worldwide with a clean, intuitive interface.",
      tags: ["React", "API", "JavaScript", "CSS"],
      ghLink: "https://github.com/Humna-ghouri/Weather-App",
      demoLink: "https://weather-app-zeta-lovat-88.vercel.app/",
      featured: false
    },
    {
      imgPath: salesUber,
      title: "SalesUber Client Web App",
      description: "Modern sales client UI built with React.js and Tailwind CSS. Features interactive components and responsive design for business applications.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      ghLink: "https://github.com/Humna-ghouri/SalesUber",
      demoLink: "https://sales-uber.vercel.app/",
      featured: true
    },
    {
      imgPath: valorantWeb,
      title: "Valorant Web Application",
      description: "Fan-made Valorant web application showcasing game agents, weapons, and maps with interactive elements and game statistics.",
      tags: ["React", "CSS", "Gaming API"],
      ghLink: "https://github.com/Humna-ghouri/Valorant",
      demoLink: "https://valorant-livw.vercel.app/",
      featured: false
    },
    {
      imgPath: portfolioWeb,
      title: "Portfolio Website",
      description: "A portfolio website showcasing projects, skills, and experience with modern design and responsive layout.",
      tags: ["React", "Bootstrap", "CSS"],
      ghLink: "https://github.com/Humna-ghouri/Portfolio",
      demoLink: "https://portfolio-nine-phi-35.vercel.app/",
      featured: false
    },
    {
      imgPath: animatedResume,
      title: "Animated Resume",
      description: "Interactive and animated resume/CV with engaging visuals, smooth transitions, and creative presentation of skills and experience.",
      tags: ["HTML", "CSS", "JavaScript", "Animation"],
      ghLink: "https://github.com/Humna-ghouri/animated-resume",
      demoLink: "https://humna-ghouri.github.io/Web-UI/",
      featured: false
    }
  ];
return (
    <Container fluid className="project-section">
      <div className="holographic-bg">
        <div className="holographic-line"></div>
        <div className="holographic-line"></div>
        <div className="holographic-line"></div>
        <div className="cyber-grid"></div>
      </div>
      <Particle />
      <Container>
        <div className="cyber-header" style={{ textAlign: "center", marginBottom: "70px" }}>
          <h1 className="cyber-title" data-text="PROJECT_ARCHIVE">
            PROJECT_ARCHIVE
          </h1>
          <p className="cyber-subtitle">
            <span className="cyber-glitch" data-text="探索我的创作">
              探索我的创作
            </span>
          </p>
        </div>

        {/* Featured Projects */}
        <div style={{ marginBottom: "80px" }}>
          <h2 className="section-label">
            <span className="hex-code">#0x1F4A1</span> FEATURED_WORK
          </h2>
          <Row className="justify-content-center">
            {projects.filter(project => project.featured).map((project, index) => (
              <Col md={6} lg={4} className="project-card" key={index}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="section-label">
            <span className="hex-code">#0x1F4BB</span> ALL_CREATIONS
          </h2>
          <Row className="justify-content-center">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Col md={6} lg={4} className="project-card" key={index}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>

        {/* GitHub Call-to-Action */}
        <Row className="justify-content-center" style={{ marginTop: "80px" }}>
          <Col md={8} className="text-center">
            <Card className="cyber-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-title">bash — 80×30</div>
              </div>
              <div className="terminal-body">
                <p className="terminal-command">$ explore --more-projects</p>
                <p className="terminal-text">Accessing repository database...</p>
                <p className="terminal-text">GitHub profile located at: <span className="terminal-link">github.com/Humna-ghouri</span></p>
                <Button 
                  href="https://github.com/Humna-ghouri" 
                  target="_blank"
                  className="neon-button"
                >
                  <BsGithub className="button-icon" />
                  <span className="button-text">INITIATE_CONNECTION</span>
                  <BsArrowRight className="button-icon" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <style>
        {`
          .project-section {
            position: relative;
            padding: 100px 0;
            overflow: hidden;
            background: linear-gradient(135deg, #0a192f 0%, #0c162d 50%, #0a1429 100%);
          }
          
          .holographic-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
          }
          
          .holographic-line {
            position: absolute;
            height: 1px;
            background: rgba(0, 255, 65, 0.15);
            width: 100%;
            animation: scanline 10s linear infinite;
          }
          
          .holographic-line:nth-child(1) {
            top: 20%;
            animation-delay: 0s;
          }
          
          .holographic-line:nth-child(2) {
            top: 50%;
            animation-delay: -3s;
          }
          
          .holographic-line:nth-child(3) {
            top: 80%;
            animation-delay: -7s;
          }
          
          .cyber-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(to right, rgba(0, 255, 65, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 65, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: 1;
          }
          
          .cyber-header {
            position: relative;
            z-index: 2;
            padding: 40px 0;
          }
          
          .cyber-title {
            font-family: 'Share Tech Mono', monospace;
            color: transparent;
            font-size: 3.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 20px;
            position: relative;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
            -webkit-text-stroke: 1.5px #00ff41;
            animation: hologram 3s infinite alternate;
          }
          
          .cyber-title::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #00ff41;
            overflow: hidden;
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          }
          
          .cyber-subtitle {
            font-family: 'Share Tech Mono', monospace;
            color: #a0a0a0;
            font-size: 1.2rem;
            letter-spacing: 3px;
          }
          
          .cyber-glitch {
            position: relative;
            color: #00ff41;
          }
          
          .cyber-glitch::before,
          .cyber-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            clip: rect(0, 0, 0, 0);
          }
          
          .cyber-glitch::before {
            left: 4px;
            text-shadow: -2px 0 #ff00cc;
            animation: glitch-1 2s infinite linear alternate-reverse;
          }
          
          .cyber-glitch::after {
            left: -4px;
            text-shadow: 2px 0 #00ccff;
            animation: glitch-2 3s infinite linear alternate-reverse;
          }
          
          .section-label {
            font-family: 'Share Tech Mono', monospace;
            color: #e0e0e0;
            font-size: 1.8rem;
            margin-bottom: 40px;
            text-align: center;
            letter-spacing: 2px;
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px 25px;
            background: rgba(0, 255, 65, 0.1);
            border: 1px solid rgba(0, 255, 65, 0.3);
            border-radius: 2px;
          }
          
          .hex-code {
            color: #00ff41;
            margin-right: 15px;
          }
          
          .cyber-terminal {
            background: rgba(18, 25, 47, 0.7) !important;
            border: 1px solid #00ff41 !important;
            border-radius: 8px !important;
            padding: 0;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(0, 255, 65, 0.2);
            overflow: hidden;
          }
          
          .terminal-header {
            background: rgba(0, 255, 65, 0.1);
            padding: 12px 20px;
            border-bottom: 1px solid #00ff41;
            display: flex;
            align-items: center;
          }
          
          .terminal-dots {
            display: flex;
            gap: 8px;
            margin-right: 15px;
          }
          
          .terminal-dots span {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          
          .terminal-dots span:nth-child(1) {
            background: #ff5f57;
          }
          
          .terminal-dots span:nth-child(2) {
            background: #ffbd2e;
          }
          
          .terminal-dots span:nth-child(3) {
            background: #28c940;
          }
          
          .terminal-title {
            font-family: 'Share Tech Mono', monospace;
            color: #00ff41;
            font-size: 0.9rem;
          }
          
          .terminal-body {
            padding: 30px;
          }
          
          .terminal-command {
            font-family: 'Share Tech Mono', monospace;
            color: #00ff41;
            font-size: 1.1rem;
            margin-bottom: 15px;
          }
          
          .terminal-text {
            font-family: 'Share Tech Mono', monospace;
            color: #a0a0a0;
            margin-bottom: 10px;
          }
          
          .terminal-link {
            color: #00ff41;
            text-decoration: underline;
          }
          
          .neon-button {
            background: transparent !important;
            border: 1px solid #00ff41 !important;
            color: #00ff41 !important;
            border-radius: 4px !important;
            padding: 15px 35px !important;
            font-weight: 600 !important;
            font-size: 1.1rem !important;
            transition: all 0.3s ease !important;
            font-family: 'Share Tech Mono', monospace !important;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 255, 65, 0.5),
                        inset 0 0 20px rgba(0, 255, 65, 0.1);
          }
          
          .neon-button:hover {
            background: #00ff41 !important;
            color: #0a192f !important;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.8),
                        0 0 40px rgba(0, 255, 65, 0.6),
                        0 0 60px rgba(0, 255, 65, 0.4);
            text-shadow: 0 0 5px #0a192f;
          }
          
          .button-icon {
            transition: all 0.3s ease;
          }
          
          .neon-button:hover .button-icon {
            transform: translateX(5px);
          }
          
          .button-text {
            margin: 0 10px;
          }
          
          @keyframes scanline {
            0% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(calc(100vh + 100px));
            }
          }
          
          @keyframes hologram {
            0% {
              filter: brightness(1) contrast(1);
            }
            100% {
              filter: brightness(1.2) contrast(1.5);
            }
          }
          
          @keyframes glitch-1 {
            0% { clip: rect(36px, 9999px, 5px, 0); }
            5% { clip: rect(25px, 9999px, 66px, 0); }
            10% { clip: rect(2px, 9999px, 36px, 0); }
            15% { clip: rect(8px, 9999px, 90px, 0); }
            20% { clip: rect(100px, 9999px, 92px, 0); }
            25% { clip: rect(34px, 9999px, 12px, 0); }
            30% { clip: rect(89px, 9999px, 85px, 0); }
            35% { clip: rect(20px, 9999px, 56px, 0); }
            40% { clip: rect(50px, 9999px, 27px, 0); }
            45% { clip: rect(98px, 9999px, 83px, 0); }
            50% { clip: rect(42px, 9999px, 18px, 0); }
            55% { clip: rect(72px, 9999px, 84px, 0); }
            60% { clip: rect(45px, 9999px, 42px, 0); }
            65% { clip: rect(18px, 9999px, 12px, 0); }
            70% { clip: rect(100px, 9999px, 14px, 0); }
            75% { clip: rect(15px, 9999px, 27px, 0); }
            80% { clip: rect(78px, 9999px, 8px, 0); }
            85% { clip: rect(3px, 9999px, 100px, 0); }
            90% { clip: rect(88px, 9999px, 99px, 0); }
            95% { clip: rect(32px, 9999px, 22px, 0); }
            100% { clip: rect(64px, 9999px, 58px, 0); }
          }
          
          @keyframes glitch-2 {
            0% { clip: rect(65px, 9999px, 100px, 0); }
            5% { clip: rect(52px, 9999px, 74px, 0); }
            10% { clip: rect(79px, 9999px, 85px, 0); }
            15% { clip: rect(75px, 9999px, 5px, 0); }
            20% { clip: rect(67px, 9999px, 61px, 0); }
            25% { clip: rect(14px, 9999px, 79px, 0); }
            30% { clip: rect(1px, 9999px, 66px, 0); }
            35% { clip: rect(86px, 9999px, 30px, 0); }
            40% { clip: rect(23px, 9999px, 98px, 0); }
            45% { clip: rect(85px, 9999px, 72px, 0); }
            50% { clip: rect(71px, 9999px, 75px, 0); }
            55% { clip: rect(2px, 9999px, 48px, 0); }
            60% { clip: rect(80px, 9999px, 87px, 0); }
            65% { clip: rect(70px, 9999px, 50px, 0); }
            70% { clip: rect(6px, 9999px, 30px, 0); }
            75% { clip: rect(11px, 9999px, 30px, 0); }
            80% { clip: rect(92px, 9999px, 100px, 0); }
            85% { clip: rect(98px, 9999px, 70px, 0); }
            90% { clip: rect(8px, 9999px, 85px, 0); }
            95% { clip: rect(41px, 9999px, 62px, 0); }
            100% { clip: rect(35px, 9999px, 39px, 0); }
          }
        `}
      </style>
    </Container>
  );
}

export default Projects;