import React from "react";
import "./skills.css";
import { BiCheck} from "react-icons/bi";
import {AiOutlineHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {TbBrandJavascript, TbBrandNextjs} from "react-icons/tb";
import {FaBootstrap, FaReact, FaNodeJs, FaAws, FaDocker  } from "react-icons/fa";
import {SiGit, SiTailwindcss, SiRedux, SiThreedotjs, SiExpress, SiPug, SiMysql, SiMongodb, SiAmazondynamodb, SiSequelize, SiDatabricks
,SiGithub,SiPostman, SiSwagger, SiFigma, SiWordpress, SiCplusplus, SiMiro, 
SiPython, SiKalilinux, SiSass, SiMui, SiTypescript, SiRecoil, SiPostgresql  } from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";


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
              <TbBrandNextjs className="service__list-icon" />
              <p>Next</p>
            </li>
            <li>
              <FaReact className="service__list-icon" />
              <p>React</p>
            </li>
            <li>
              <SiTypescript className="service__list-icon" />
              <p>Typescript</p>
            </li>
            <li>
              <TbBrandJavascript className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <SiMui className="service__list-icon" />
              <p>MUI</p>
            </li>
            <li>
              <SiTailwindcss className="service__list-icon" />
              <p>Tailwind</p>
            </li>
            <li>
              <FaBootstrap className="service__list-icon" />
              <p>Bootstrap</p>
            </li>
            <li>
              <SiRedux className="service__list-icon" />
              <p>Redux</p>
            </li>
            <li>
              <SiRecoil className="service__list-icon" />
              <p>Recoil</p>
            </li>
            <li>
              <AiOutlineHtml5 className="service__list-icon" />
              <p>HTML & CSS</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend & Database</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaNodeJs className="service__list-icon" />
              <p>Nodejs</p>
            </li>
            <li>
              <SiExpress className="service__list-icon" />
              <p>ExpressJS</p>
            </li>
            <li>
              <IoLogoJavascript className="service__list-icon" />
              <p>EJS</p>
            </li>
            <li>
              <SiMysql className="service__list-icon" />
              <p>MySQL</p>
            </li>
            <li>
              <SiPostgresql className="service__list-icon" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <SiMongodb className="service__list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <SiSequelize className="service__list-icon" />
              <p>Sequelize</p>
            </li>
            <li>
              <SiDatabricks className="service__list-icon" />
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
              <FaAws  className="service__list-icon" />
              <p>AWS</p>
            </li>
            <li>
              <FaDocker  className="service__list-icon" />
              <p>Docker</p>
            </li>
            <li>
              <SiGithub className="service__list-icon" />
              <p>Git & Github</p>
            </li>
            <li>
              <SiPostman className="service__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <SiSwagger className="service__list-icon" />
              <p>Swagger</p>
            </li>
            <li>
              <SiFigma className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <SiMiro className="service__list-icon" />
              <p>Miro</p>
            </li>
            <li>
              <SiWordpress className="service__list-icon" />
              <p>Wordpress</p>
            </li>
            <li>
              <SiCplusplus className="service__list-icon" />
              <p>C++</p>
            </li>
            <li>
              <SiPython className="service__list-icon" />
              <p>Python</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;
