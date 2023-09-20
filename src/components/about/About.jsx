import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card ">
              <div className="flex justify-center">
                <FaAward className="about__icon" />
              </div>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <div className="flex justify-center">
                <FaUsers className="about__icon" />
              </div>
              <h5>Clients</h5>
              <small>4+ Across India</small>
            </article>
            <article className="about__card">
              <div className="flex justify-center">
                <FaFolderOpen className="about__icon" />
              </div>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I am a 3rd year CSE student with a flair for web development and
            cyber security. Freelanced and interned as a fullstack developer,
            led multiple projects and am eager to translate my technical skills
            into real-world solutions
          </p>
          <a href="#contact" className="btn btn-primary mb-20">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
