import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Manali Sethi </span>
            from <span className="purple"> Indore (M.P), India.</span>
            <br />
            I am currently employed as a Senior Software developer at RWS Moravia
            <br />
            I have completed Bachlore in Computer Science at Indore Institute of Science & Technology (IIST).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manali Sethi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
