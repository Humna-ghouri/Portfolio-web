import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="holographic-card" 
      style={{
        background: "rgba(18, 25, 47, 0.5)",
        border: "1px solid rgba(0, 255, 65, 0.3)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        height: "100%",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 255, 65, 0.1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px) rotateX(5deg)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 255, 65, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) rotateX(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 255, 65, 0.1)";
      }}
    >
      <div className="card-header">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        
        <div className="image-container">
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            className="card-image"
          />
          <div className="image-overlay"></div>
          {props.featured && (
            <div className="featured-badge">
              <span>⭐</span> FEATURED
            </div>
          )}
        </div>
      </div>
      
      <Card.Body style={{ display: "flex", flexDirection: "column", padding: "25px" }}>
        <Card.Title className="card-title">
          {props.title}
        </Card.Title>
        
        <Card.Text className="card-description">
          {props.description}
        </Card.Text>
        
        <div className="tags-container">
          {props.tags && props.tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="card-actions">
          <Button 
            href={props.ghLink} 
            target="_blank"
            className="card-button"
          >
            <BsGithub className="button-icon" />
            <span>CODE</span>
          </Button>
          
          {props.demoLink && props.demoLink !== "#" && (
            <Button
              href={props.demoLink}
              target="_blank"
              className="card-button demo"
            >
              <BsBoxArrowUpRight className="button-icon" />
              <span>LIVE</span>
            </Button>
          )}
        </div>
      </Card.Body>
      
      <style>
        {`
          .holographic-card {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          .card-header {
            position: relative;
            overflow: hidden;
          }
          
          .card-corner {
            position: absolute;
            width: 15px;
            height: 15px;
            z-index: 2;
          }
          
          .card-corner::before, .card-corner::after {
            content: '';
            position: absolute;
            background: #00ff41;
          }
          
          .card-corner::before {
            width: 100%;
            height: 1px;
          }
          
          .card-corner::after {
            width: 1px;
            height: 100%;
          }
          
          .card-corner-tl {
            top: 10px;
            left: 10px;
          }
          
          .card-corner-tl::before {
            top: 0;
            left: 0;
          }
          
          .card-corner-tl::after {
            top: 0;
            left: 0;
          }
          
          .card-corner-tr {
            top: 10px;
            right: 10px;
          }
          
          .card-corner-tr::before {
            top: 0;
            right: 0;
          }
          
          .card-corner-tr::after {
            top: 0;
            right: 0;
          }
          
          .card-corner-bl {
            bottom: 10px;
            left: 10px;
          }
          
          .card-corner-bl::before {
            bottom: 0;
            left: 0;
          }
          
          .card-corner-bl::after {
            bottom: 0;
            left: 0;
          }
          
          .card-corner-br {
            bottom: 10px;
            right: 10px;
          }
          
          .card-corner-br::before {
            bottom: 0;
            right: 0;
          }
          
          .card-corner-br::after {
            bottom: 0;
            right: 0;
          }
          
          .image-container {
            position: relative;
            overflow: hidden;
          }
          
          .card-image {
            height: 200px;
            object-fit: cover;
            width: 100%;
            filter: grayscale(30%) contrast(110%) brightness(0.9);
            transition: all 0.5s ease;
          }
          
          .holographic-card:hover .card-image {
            filter: grayscale(0%) contrast(120%) brightness(1.1);
            transform: scale(1.05);
          }
          
          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, 
              transparent 0%, 
              rgba(10, 25, 47, 0.1) 30%,
              rgba(10, 25, 47, 0.4) 70%,
              rgba(10, 25, 47, 0.8) 100%);
            pointer-events: none;
          }
          
          .featured-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(0, 255, 65, 0.2);
            color: #00ff41;
            padding: 5px 12px;
            border-radius: 4px;
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.8rem;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(0, 255, 65, 0.4);
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .card-title {
            color: #00ff41;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            font-family: 'Share Tech Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .card-description {
            color: #ccd6f6;
            line-height: 1.6;
            font-size: 0.95rem;
            margin-bottom: 20px;
            flex-grow: 1;
          }
          
          .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 25px;
          }
          
          .tech-tag {
            background: rgba(0, 255, 65, 0.1);
            color: #00ff41;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.75rem;
            border: 1px solid rgba(0, 255, 65, 0.3);
            font-family: 'Share Tech Mono', monospace;
          }
          
          .card-actions {
            display: flex;
            gap: 12px;
          }
          
          .card-button {
            background: transparent;
            border: 1px solid #00ff41;
            color: #00ff41;
            border-radius: 6px;
            padding: 10px 20px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: 'Share Tech Mono', monospace;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .card-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.2), transparent);
            transition: all 0.6s ease;
          }
          
          .card-button:hover {
            background: #00ff41;
            color: #0a192f;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
          }
          
          .card-button:hover::before {
            left: 100%;
          }
          
          .card-button.demo {
            background: rgba(0, 255, 65, 0.1);
          }
          
          .button-icon {
            transition: transform 0.3s ease;
          }
          
          .card-button:hover .button-icon {
            transform: translateY(-2px);
          }
        `}
      </style>
    </Card>
  );
}

export default ProjectCards;