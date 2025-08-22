import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineDownload
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

// Import your resume PDF
import ResumePDF from "../Assets/HumnaGhouriResume (2).pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{
        backgroundColor: navColour ? "rgba(10, 25, 47, 0.95)" : "rgba(10, 25, 47, 0.9)",
        transition: "all 0.3s ease",
        boxShadow: navColour ? "0 4px 20px rgba(0, 255, 65, 0.2)" : "none",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 255, 65, 0.2)"
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" style={{ 
            filter: "brightness(0) invert(0.7) sepia(1) hue-rotate(80deg) saturate(5)",
            height: "40px"
          }} /> */}
          <span className="brand-text" style={{ 
            color: "#00ff41", 
            marginLeft: "10px", 
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "1.4rem",
            fontWeight: "bold"
          }}>
            Humna-Ghouri
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ borderColor: "#00ff41" }}
        >
          <span style={{ backgroundColor: "#00ff41" }}></span>
          <span style={{ backgroundColor: "#00ff41" }}></span>
          <span style={{ backgroundColor: "#00ff41" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                style={{ color: "#ccd6f6", fontWeight: "500" }}
                className="nav-link-hover"
              >
                <AiOutlineHome style={{ marginBottom: "2px", color: "#00ff41" }} /> 
                <span style={{ marginLeft: "8px" }}>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: "#ccd6f6", fontWeight: "500" }}
                className="nav-link-hover"
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: "#00ff41" }} /> 
                <span style={{ marginLeft: "8px" }}>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: "#ccd6f6", fontWeight: "500" }}
                className="nav-link-hover"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", color: "#00ff41" }}
                />{" "}
                <span style={{ marginLeft: "8px" }}>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ccd6f6", fontWeight: "500" }}
                className="nav-link-hover"
              >
                <AiOutlineDownload style={{ marginBottom: "2px", color: "#00ff41" }} /> 
                <span style={{ marginLeft: "8px" }}>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Humna-ghouri?tab=repositories"
                target="_blank"
                className="fork-btn-inner"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00ff41",
                  color: "#00ff41",
                  borderRadius: "4px",
                  padding: "8px 15px",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#00ff41";
                  e.target.style.color = "#0a192f";
                  e.target.style.boxShadow = "0 0 15px rgba(0, 255, 65, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#00ff41";
                  e.target.style.boxShadow = "none";
                }}
              >
                <CgGitFork style={{ fontSize: "1.2em", marginRight: "5px" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", marginRight: "5px" }} />
                Fork & Star
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-link-hover {
          position: relative;
          margin: 0 10px;
          padding: 10px 15px !important;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .nav-link-hover::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
        //   background: #00ff41;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link-hover:hover {
          background: rgba(0, 255, 65, 0.1) !important;
        //   color: #00ff41 !important;
        }
        
        .nav-link-hover:hover::before {
          width: 80%;
        }
        
        .navbar-toggler span {
          display: block;
          height: 2px;
          width: 25px;
          margin: 5px 0;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(1) {
          transform: rotate(45deg);
          top: 7px;
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }
        
        .navbar-toggler[aria-expanded="true"] span:nth-child(3) {
          transform: rotate(-45deg);
          top: -7px;
        }
        
        @media (max-width: 768px) {
          .nav-link-hover {
            margin: 5px 0;
            text-align: center;
          }
          
          .fork-btn {
            text-align: center;
            margin-top: 15px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;