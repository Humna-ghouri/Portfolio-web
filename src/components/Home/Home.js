import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hackerImg from "../../Assets/home-main.jpg"; // Replace with your hacker-style image
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import backgroundVideo from "../../Assets/pinterest-video.mp4"; // Your video file

function Home() {
  return (
    <section>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
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
              <h1 className="terminal-command">
                $ hello_world.exe <span className="blinking-cursor">_</span>
              </h1>

              <h1 className="terminal-prompt">
                <span className="accent-green">Huma_Ghouri</span>
                <span className="accent-green">@</span>
                <span>MERN_Stack</span>
                <span className="accent-green">:</span>
                <span>~$</span>
              </h1>

              <div className="terminal-comment">
                {"// Full Stack Developer | AI Engineer"}
                <br />
                {"// Building secure digital solutions"}
              </div>

              <div className="typewriter-container">
                <Type />
              </div>
            </Col>

            <Col md={5} className="hacker-image-container">
              <img
                src={hackerImg}
                alt="Hacker illustration"
                className="hacker-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;