import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio 1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.PNG";
import IMG6 from "../../assets/portfolio6.PNG";
import {SiGithub} from "react-icons/si";
import { FaCircle } from "react-icons/fa";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Kutniti Website: Visualizing the perception each country has of India",
    github: "https://github.com/KshitizSachan/kutniti-frontend",
    demo: "https://kutniti.watch/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lesson Link: A mordern all in one learning management system",
    github: "https://github.com/KshitizSachan/Lesson-Link-codebase",
    demo: "https://lessonlink.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dream Home: DBMS mini project on property dealings software",
    github: "https://github.com/KshitizSachan/DreamHome",
    demo: "https://github.com/KshitizSachan/DreamHome",
  },
  {
    id: 4,
    image: IMG4,
    title: "ScholarChat: A website for scholars to collaborate on using orc ids",
    github: "https://github.com/KshitizSachan/ScholarChat_v2",
    demo: "https://scholarchat.org/",
  },
  {
    id: 5,
    image: IMG5,
    title: "College Website: New college website for IIIT Dharwad approved by the authorities",
    github: "https://github.com/KshitizSachan/College-Website",
    demo: "https://github.com/KshitizSachan/College-Website",
  },
  {
    id: 6,
    image: IMG6,
    title: "BlocSoc: Website for the blockchain clubs at IIIT Dharwad",
    github: "https://github.com/BlocSoc/Club-website",
    demo: "https://github.com/BlocSoc/Club-website",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                <div className="flex items-center">
                  <SiGithub className=" mr-2 flex "/>
                  Github
                </div>
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                <div className="flex items-center">
                  <FaCircle className="text-red-500 mr-2 w-3 flex "/>
                  Live Demo
                </div>
                  
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
