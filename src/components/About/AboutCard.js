import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">VAJJALA UMA VENKATA ABHIRAM SHARMA </span>
            from <span className="purple"> Nagayalanka, India.</span>
            <br />
            I am currently a Trainee at <span className="purple">Technical Hub</span> in a Technology <span className="purple">Full Stack Development with React Native.</span>
            <br />
            Till date I have managed to maintain a good track record in my academics with 8.5 CGPA as well as with my coding skills and live projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhiram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
