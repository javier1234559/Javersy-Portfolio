import { Routes ,Route } from "react-router-dom";
import { Navbar, SideBar } from "./components";
import { Home, About, Project } from "./pages";

function App() {
  return (
    <div className="themes">
      <Navbar />
      <div className="flex w-[100%]  min-h-[100vh]  items-center">
        <div className="flex-1">
          <SideBar />
        </div>
        <div className="flex-10 h-[100%] flex  items-center ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
