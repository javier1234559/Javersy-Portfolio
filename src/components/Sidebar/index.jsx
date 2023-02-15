import React from "react";
import "./styles.scss";
import { FiGithub, FiLinkedin, FiPenTool } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="md:block hidden contact-sidebar">
      <a href="https://github.com/javier1234559">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/minh-nh%E1%BA%ADt-nguy%E1%BB%85n-044535242/">
        <FiLinkedin />
      </a>
      <a href="https://javier1234559.blogspot.com/">
        <FiPenTool />
      </a>
    </div>
  );
};

export default SideBar;
