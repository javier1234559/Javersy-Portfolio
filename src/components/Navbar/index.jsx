import React from "react";
import { reacticon } from "../../assets";
import {BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[70px] ">
      <div className="wrapper flex w-[100%] ">
        <div className="flex flex-1 cursor-pointer ">
          <img
            src={reacticon}
            alt="loco"
            className="w-[60px] h-[50px] rounded-full "
          />
          <div className="pl-6 mt-4 ">
            <h2 className="text-[24px] font-semibold leading-4">Javiersy</h2>
            {/* <p className="text-[16px] ">Javersy</p> */}
          </div>
        </div>
        <div className="flex-[3] flex justify-center items-center">
          <ul className="flex-1 flex justify-center items-center bg-[#1616163b] text-paragragh rounded-full max-w-[300px] py-3 shadow-custom">
            <li ><Link to="/" className="px-6 cursor-pointer">Home</Link></li>
            <li><Link to="/about" className="px-6 cursor-pointer">About</Link></li>
            <li ><Link to="/project" className="px-6 cursor-pointer">Project</Link></li>
            <li ><Link to="/blog" className="px-6 cursor-pointer">Blog</Link></li>
          </ul>
        </div>
        <div className="cursor-pointer flex-1 flex bg-[#fff] justify-center items-center rounded-full py-2 leading-8 text-[#000] max-w-[150px]">
          <p className="pr-4 font-semibold">Contact</p> 
          <BiEnvelope />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
