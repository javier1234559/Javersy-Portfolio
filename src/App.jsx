import { Routes ,Route } from "react-router-dom";
import { Navbar, SideBar } from "./components";
import { Home, About, Project , Contact} from "./pages";
import 'animate.css';

function App() {
  return (
    <div className="themes">
      <Navbar />
      <div className="flex w-[100%]  min-h-[100vh]  items-center">
        <div className="flex-1">
          <SideBar />
        </div>
        <div className="flex-10 h-[100%] flex  items-center wrapper">
          <Routes>
            <Route path="/Javersy-Portfolio/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
