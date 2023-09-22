import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options flex justify-around">
          <article className="contact__option w-1/4">
            <div className="flex justify-center">
              <MdOutlineEmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5 className="text-sm">21bcs057@iiitdwd.ac.in</h5>
            <a
              href="mailto:21bcs057@iiitdwd.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option w-1/4">
            <div className="flex justify-center">
              <SiLinkedin className="contact__option-icon" />
            </div>
            <h4>Linkedin</h4>
            <h5 className="text-sm">Kshitiz Sachan</h5>
            <a
              href="https://www.linkedin.com/in/kshitiz-sachan-662295228/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option w-1/4">
            <div className="flex justify-center">
              <MdOutlineEmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5 className="text-sm">kshitizsachan422@gmail.com</h5>
            <a
              href="mailto:kshitizsachan422@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
