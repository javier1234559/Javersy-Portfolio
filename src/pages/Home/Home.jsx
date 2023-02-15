import React from "react";
import "./styles.scss"

const Home = () => {
  return (
    <div className="pb-8 ">
      <h1 className="text-[80px] leading-[80px] font-bold">
        Hi! I'm <span className="gradient-text">Nhat</span>
      </h1>
      <h3 className="text-[50px]  text-paragragh">Web developer</h3>
      <p className="text-paragragh max-w-[600px] text-[20px]">
        My passion is building ethical software that makes the world a better
        place. I support open source and believe the digital age.
      </p>
      <p className="max-w-[600px] text-[30px] pt-4 font-semibold">
        Welcome to my site !
      </p>
      
    </div>
  );
};

export default Home;
