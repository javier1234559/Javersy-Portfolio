import React from "react";
import "./styles.scss";

const About = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col">
      <div className="bg-gradient max-w-[600px] p-[2px] rounded-lg ">
        <div className="bg-slate p-10 rounded-lg ">
          <h1 className="text-[25px] ">Hi, my name is Nhat</h1>
          <p className="text-paragragh leading-[28px]">
            I'm a web developer and self-taught software engineer based in Viet
            Nam. I began programming on GitHub in 2021 where I discovered the
            fantastic network of collaboration and creativity that is the open
            source community.
          </p>
        </div>
      </div>
      <div className="lg:ml-8 lg:block flex-col flex justify-center items-center max-w-[600px]">
        <p className="text-paragragh max-w-[600px] py-8 text-[20px] font-semibold ">
          Programming Languages and Tools that I had known
        </p>
        <div className="flex skills">
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.w3schools.com/cs/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="java"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
        </div>
        <p className="text-paragragh max-w-[600px] mb-4 text-[16px] font-semibold ">
          Frontend Development
        </p>
        <div className="flex skills">
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />
          </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />
          </a>
          <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.styled-components.com/atom.png"
              alt="bootstrap"
              width="40"
              height="40"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="sass"
              width="40"
              height="40"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
        </div>
        <p className="text-paragragh max-w-[600px] mb-4 text-[16px] font-semibold ">
          Backend Development
        </p>
        <div className="flex skills ">
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://flask.palletsprojects.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
              alt="flask"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
