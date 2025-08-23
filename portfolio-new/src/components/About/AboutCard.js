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
      {/* Styles remain unchanged */}
    </Card>
  );
}

export default AboutCard;
