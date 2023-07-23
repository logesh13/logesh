import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Logi.jpg";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import {
  SiLeetcode
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I Predominantly code in JAVA and I have studied many programming Languages and I loved JAVA Language 
              <br />
              <br /> My Technical Skills
              <i>
                <b className="purple"> JAVA , SQL , React , JS , HTML & CSS </b>
              </i>
              <br />
              <br />
               I love to do Problem Solving especially in 
              <i>
                <b className="purple"> LeetCode </b> and  {" "}
                <b className="purple">
                    Coding Ninjas.
                </b>
              </i>
              <br />
              <br />I have a knowledge in Augmented Reality 
              with <b className="purple">UNITY</b> and
              <i>
                <b className="purple">
                  {" "}
                  Vuforia
                </b>
              </i>
              <i>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect Me With</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/logesh13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/logesh13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.leetcode.com/logesh13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                   <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:s.logeshsenthil@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/l_o_g_e_s__h/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.twitter.com/l_o_g_e_s__h/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
