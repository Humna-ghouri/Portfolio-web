
import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="cyber-card">
      <div className="card-header">
        <div className="header-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="header-title">user_profile.txt</div>
      </div>
      <Card.Body>
        <div className="cyber-text">
          <p>
            <span className="comment">{`/* Personal Information */`}</span>
            <br />
            <span className="var">const</span> <span className="name">developer</span> = {"{"}
            <br />
            <span className="key">  name</span>: <span className="string">"Humna Ghouri"</span>,
            <br />
            <span className="key">  location</span>: <span className="string">"Pakistan"</span>,
            <br />
            <span className="key">  role</span>: <span className="string">"Full Stack Developer + AI Specialist"</span>,
            <br />
            <span className="key">  education</span>: <span className="string">"Computer Science Degree"</span>
            <br />
            {"}"};  
          </p>

          <p>
            <span className="comment">{`/* Professional Focus */`}</span>
            <br />
            <span className="var">const</span> <span className="name">specializations</span> = [
            <br />
            <span className="string">  "MERN Stack Development"</span>,
            <br />
            <span className="string">  "AI & Machine Learning"</span>,
            <br />
            <span className="string">  "Data Science Applications"</span>,
            <br />
            <span className="string">  "Web & Mobile Solutions"</span>
            <br />
            ];
          </p>

          <p className="mt-4">
            <span className="comment">{`/* Additional Interests */`}</span>
            <br />
            <span className="method">function</span> <span className="name">personalInterests</span>() {"{"}
            <br />
            <span className="key">  return</span> [
            <br />
            <span className="string">    "Exploring AI research papers"</span>,
            <br />
            <span className="string">    "Contributing to open source"</span>,
            <br />
            <span className="string">    "Participating in hackathons"</span>
            <br />
            ];
            <br />
            {"}"}
          </p>

          <p className="quote">
            <span className="comment">{`/* Personal Philosophy */`}</span>
            <br />
            <span className="string">"Building solutions that make an impact through code and data"</span>
            <br />
            <span className="tag">- Humna Ghouri</span>
          </p>
        </div>
      </Card.Body>
            <style jsx>{`
        .cyber-card {
          background: rgba(18, 25, 47, 0.7) !important;
          border: 1px solid #00ff41 !important;
          border-radius: 8px !important;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 25px rgba(0, 255, 65, 0.2);
        }
        
        .card-header {
          background: rgba(0, 255, 65, 0.1);
          padding: 12px 20px;
          border-bottom: 1px solid #00ff41;
          display: flex;
          align-items: center;
        }
        
        .header-dots {
          display: flex;
          gap: 8px;
          margin-right: 15px;
        }
        
        .dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #28c940; }
        
        .header-title {
          font-family: 'Share Tech Mono', monospace;
          color: #00ff41;
          font-size: 0.9rem;
        }
        
        .cyber-text {
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #e0e0e0;
        }
        
        .comment {
          color: #5a6268;
          font-style: italic;
        }
        
        .var {
          color: #ff6b6b;
        }
        
        .name {
          color: #4fc3f7;
        }
        
        .key {
          color: #ffa726;
        }
        
        .string {
          color: #98c379;
        }
        
        .method {
          color: #c678dd;
        }
        
        .tag {
          color: #00ff41;
          font-size: 0.9rem;
          display: block;
          margin-top: 10px;
        }
        
        .quote {
          border-left: 3px solid #00ff41;
          padding-left: 15px;
          margin-top: 20px;
        }
      `}</style>

    </Card>
  );
}

export default AboutCard;
