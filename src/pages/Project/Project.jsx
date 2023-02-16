import {FiArrowUpRight} from "react-icons/fi"
import {projects} from "./constains";
import "./styles.scss"

const Project = () => {
  return (
    <div className="mt-10 flex flex-col lg:items-start  justify-center mb-[10rem]">
      <h1 className="text-[50px] mb-10 animate__slideInDown ">Project</h1>
      <div className="flex gap-10 flex-wrap">
        <div className="bg-slate rounded-xl p-2 shadow-custom animate__zoomIn">
          <img
            src={projects.image}
            alt={projects.description}
            className="object-fit w-[100%] h-[150px] rounded-lg"
          />
          <div className="flex items-center p-2 justify-center ">
            <div className="">
              <p className="text-[12px] text-marine ">{projects.name}</p>
              <h2 className="text-[15px] mt-2 whitespace-nowrap">{projects.description}<FiArrowUpRight className="inline"/></h2>
            </div>
            <div className=" bg-marine rounded-full flex items-center justify-center cursor-pointer w-[80px] text-[10px] h-[25px] text-[#000] ml-10 font-semibold">{projects.time}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
