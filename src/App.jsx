import { Navbar } from './components';
import { Home, About, Project } from './sections';
import './styles/index.scss';

function App() {
    return (
        <>
            <div className="blobgradientblur1" />
            <div className="blobgradientblur2" />
            <div className="themes">
                <div className="wrapper">
                    <Navbar />
                </div>
                <div className="wrapper">
                    <Home />
                </div>
                <About />
                <div className="wrapper">
                    <Project />
                </div>
                {/* <Contact />  */}
            </div>
        </>
    );
}

export default App;
