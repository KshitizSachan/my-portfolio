import React from "react";
import "./footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Kshitiz Sachan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kshitiz-sachan-662295228/" target="blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/KshitizSachan" target="blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/kshitizsachan77" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;KshitizSachan .All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
