import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG5 from "../../assets/portfolio5.PNG";
import IMG6 from "../../assets/portfolio6.PNG";
import {SiGithub} from "react-icons/si";
import { FaCircle } from "react-icons/fa";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "AlmaMatter: Alumni Networking website, IIIT Dharwad.",
    github: "https://github.com/KshitizSachan/alumni-network-iiitdwd",
    demo: "https://almamatter.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Kutniti Website: Visualizing the perception each country has of India",
    github: "https://github.com/KshitizSachan/kutniti-frontend",
    demo: "https://kutniti.watch",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lesson Link: A mordern all in one learning management system",
    github: "https://github.com/KshitizSachan/Lesson-Link-codebase",
    demo: "https://lessonlink.netlify.app/",
  },
  {
    id: 4,
    image: IMG5,
    title: "College Website: College website for IIIT Dharwad.",
    github: "https://github.com/KshitizSachan/College-Website",
    demo: "https://www.iiitdwd.ac.in",
  },
  {
    id: 5,
    image: IMG6,
    title: "BlocSoc: College Club Website for the blockchain club at IIIT Dharwad",
    github: "https://github.com/BlocSoc/Club-website",
    demo: "https://club-blocsoc-iiitdwd.netlify.app",
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
