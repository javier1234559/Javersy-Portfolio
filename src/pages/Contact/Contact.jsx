import { FiGithub, FiLinkedin } from "react-icons/fi";
import {BiEnvelope } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Form } from "../../components";
import "./styles.scss"
import { AnimateLetters } from "../../components";

const Contact = () => {
  const paragragh1 = "Just say hi".split('');
  const paragragh2 = "I'm always open to discuss your project and talk about new things.".split('');

  return (
    <div className="flex w-[100%] pr-20 flex-col lg:flex-row justify-center items-center lg:gap-0 gap-8 ">
      <div className="flex-1 flex-col flex  p-4 ">
        <div className="text-[35px] font-bold gap-[1.2px] flex">
        <AnimateLetters strArr={paragragh1} className=""/>
        </div>
        <p className="text-paragragh max-w-[400px] my-12 text-[20px]">
          <AnimateLetters strArr={paragragh2}/>
        </p>
        <div className="flex font-light w-[100%] animate__fadeIn ">
          <div>
            <p className="pb-2">Mail me at</p>
            <h3><BiEnvelope className="inline mr-2"/>nhat1234559@gmail.com</h3>
          </div>
          <div className="pl-10">
            <p className="pb-2">Follow me</p>
            <div className="flex gap-4">
              <a href="https://github.com/javier1234559">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/minh-nh%E1%BA%ADt-nguy%E1%BB%85n-044535242/">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/nhat1234559/">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCufdGX-RkAs1wKPpco6HNYA">
                <FaYoutube />
              </a>
              <a href="https://mobile.twitter.com/NhatNgu39098355">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  animate__fadeInBottomRight">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
