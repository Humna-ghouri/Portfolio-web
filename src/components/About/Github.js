import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="cyber-github-section">
      <h1 className="cyber-terminal-command">
        <span className="command-prompt">$</span> git_history --visualize
        <span className="cursor-blink">_</span>
      </h1>
      
      <div className="github-calendar-container">
        <GitHubCalendar
          username="Humna-ghouri"
          blockSize={15}
          blockMargin={5}
          color="#00ff41"
          fontSize={16}
          style={{
            margin: "0 auto",
            maxWidth: "90%",
            color: "#e2e8f0"
          }}
          theme={{
            light: ['#0a192f', '#00ff41'],
            dark: ['#0a192f', '#00ff41']
          }}
        />
      </div>
      
      <p className="github-description">
        <span className="comment">// Every green square represents a day I contributed to code</span>
      </p>

      <style jsx>{`
        .cyber-github-section {
          justify-content: center;
          padding: 50px 0;
          background: rgba(18, 25, 47, 0.5);
          border-radius: 12px;
          margin: 40px 0;
          border: 1px solid rgba(0, 255, 65, 0.3);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
          position: relative;
          z-index: 2;
        }
        
        .cyber-terminal-command {
          font-family: 'Share Tech Mono', monospace;
          color: #00ff41;
          font-size: 2.2rem;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }
        
        .github-calendar-container {
          width: 100%;
          overflow-x: auto;
          padding: 20px 0;
        }
        
        .github-description {
          color: #94a3b8;
          font-size: 1.1rem;
          margin-top: 25px;
          text-align: center;
          font-family: 'Fira Code', monospace;
        }
        
        .comment {
          color: #5a6268;
        }
      `}</style>
    </Row>
  );
}

export default Github;