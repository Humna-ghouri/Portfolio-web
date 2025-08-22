import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Humna Ghouri</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Humna-ghouri"
                style={{ color: "#00ff41" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/humna-ghouri/"
                style={{ color: "#00ff41" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/errorfounded.404/?igsh=bWY4cnh6MWxpM3hr#"
                style={{ color: "#00ff41" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a192f 0%, #07101e 100%);
          padding: 30px 0;
          border-top: 1px solid rgba(0, 255, 65, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff41, transparent);
        }
        
        .footer-copywright h3 {
          color: #ccd6f6;
          font-size: 1rem;
          font-weight: 400;
          text-align: center;
          margin: 10px 0;
          font-family: 'Share Tech Mono', monospace;
        }
        
        .footer-body {
          text-align: center;
        }
        
        .footer-icons {
          display: flex;
          justify-content: center;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        
        .social-icons {
          margin: 0 15px;
        }
        
        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border: 1px solid rgba(0, 255, 65, 0.3);
          border-radius: 50%;
          background: rgba(0, 255, 65, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .social-icon-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.2), transparent);
          transition: all 0.6s ease;
        }
        
        .social-icon-link:hover {
          background: #00ff41;
          color: #0a192f !important;
          transform: translateY(-3px);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }
        
        .social-icon-link:hover::before {
          left: 100%;
        }
        
        .social-icon-link svg {
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .social-icon-link:hover svg {
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .footer-copywright h3 {
            font-size: 0.9rem;
          }
          
          .social-icons {
            margin: 0 10px;
          }
          
          .social-icon-link {
            width: 40px;
            height: 40px;
          }
          
          .social-icon-link svg {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Footer;