import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { Typewriter } from 'typewriting-react';

import ME from "../../assets/me.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kshitiz Sachan</h1>
        <Typewriter cursorClassName='cursor' words={['Fullstack Web Developer', 'Cyber Security Enthusiast']} />
        {/* <h5 className="text-light">Fullstack Developer</h5> */}
        <CTA />
        <HeaderSocials />
        <div className="me">
        <div style={{ width: '300px', overflow: 'hidden' }}>
      <img
        src={ME}
        alt="me"
        style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          objectFit: 'cover',
        }}
      />
    </div>
          {/* <img src={ME} alt="me" /> */}
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
