import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Logesh S </span>
            from <span className="purple"> Dharapuram , India</span>
            <br /> I am a final year student pursuing B.Tech IT in Sri Krishna College Of Engineering and Technology
            <br />I currently Open to Work in Software Development Engineering.
            <br />
            <br />
            My Hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> LeetCode
            </li>
            <li className="about-activity">
            <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technical Stuffs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
             "Believe in the begining"{" "}
          </p>
          <footer className="blockquote-footer">Logesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
