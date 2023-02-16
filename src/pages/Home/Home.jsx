import React from "react";
import "./styles.scss"
import { AnimateLetters } from "../../components";

const Home = () => {
  let paragragh1 = "Web developer".split('');
  let paragragh2 = "My passion is building ethical software that makes the world a better place. I support open source and believe the digital age.".split('');
  let paragragh3 = "Welcome to my site !".split('');
  return (
    <div className="pb-8 ">
      {/* <p className="max-w-[600px] text-[16px] pt-4 font-semibold">
        <AnimateLetters strArr={paragragh3}/>
      </p> */}
      <h1 className="text-[80px] leading-[80px] font-bold animate__slideInDown">
        Hi! I'm <span className="typing gradient-textf"></span>
      </h1>
      <h3 className="text-[50px]  text-paragragh">
        <AnimateLetters strArr={paragragh1}/>
      </h3>
      <p className="text-paragragh max-w-[600px] text-[20px]">
        <AnimateLetters strArr={paragragh2}/>
      </p><p className="text-paragragh max-w-[600px] text-[20px]">
      </p>
    
      
    </div>
  );
};

export default Home;
