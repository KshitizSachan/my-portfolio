import React from "react";
import "./skills.css";
import { BiCheck } from "react-icons/bi";
import {AiOutlineHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Know</h5>
      <h2>Skills</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineHtml5 className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <DiCss3 className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tailwind</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Redux</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ThreeJs</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend + Database</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nodejs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ExpressJS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>EJS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pug</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MySQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>DynamoDB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sequelize</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mongoose</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Others</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className="service__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Github</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Postman API</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>C++</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Python</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;
