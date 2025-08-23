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
            <h1>
              <span className="accent-green">$ </span>
              <span className="accent-green">cat </span>
              about_me.txt
            </h1>
            <p className="about-body">
              <span className="accent-green"> </span>
              I fell in love with hacking... I mean programming
              <br />
              <span className="accent-green"></span>
              I speak fluent {"{"}
              <span className="accent-green">C++</span>,{" "}
              <span className="accent-green">JavaScript</span>,{" "}
              <span className="accent-green">Python</span>
              {"}"}
              <br /><br />
              <span className="accent-green"> </span>
              My current focus is on {"{"}
              <span className="accent-green">Web Pentesting</span> and{" "}
              <span className="accent-green">Blockchain Security</span>
              {"}"}
              <br /><br />
              <span className="accent-green"> </span>
              Building secure systems with {"{"}
              <span className="accent-green">Node.js</span>,{" "}
              <span className="accent-green">React</span>,{" "}
              <span className="accent-green">Next.js</span>
              {"}"}
            </p>
          </Col>
          <Col md={4} className="hacker-avatar">
            <Tilt>
              <img src={hackerAvatar} className="img-fluid" alt="hacker avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="about-social">
            <h1>
              <span className="accent-green">$ </span>
              find_me_on --social
            </h1>
            <p>
              <span className="accent-green"> </span>
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
  </button>
</li>
            </ul>
            <p className="email-text">
              <span className="accent-green">→ </span>
              Email: <span className="accent-green">humnaghouri001@gmail.com</span>
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .about-social {
          text-align: center;
          padding-top: 50px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          padding: 0;
          margin: 20px 0;
          list-style: none;
        }
        
        .social-icons {
          margin: 0 15px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border: 1px solid rgba(0, 255, 65, 0.3);
          border-radius: 50%;
          background: rgba(0, 255, 65, 0.1);
          color: #00ff41;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: #00ff41;
          color: #0a192f;
          transform: translateY(-3px);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }
        
        .email-text {
          color: #ccd6f6;
          font-size: 1.1rem;
          margin-top: 20px;
          font-family: 'Courier New', monospace;
        }
        
        .accent-green {
          color: #00ff41;
        }
        
        @media (max-width: 768px) {
          .social-icons {
            margin: 0 10px;
          }
          
          .social-icon {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Home2;