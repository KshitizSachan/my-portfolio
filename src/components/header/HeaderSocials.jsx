import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";
import {SiLeetcode} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kshitiz-sachan-662295228/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/KshitizSachan" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/kshitiz_sachan/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
