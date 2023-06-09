import { Navbar, ScrollBackTop } from './components';
import { Home, About, Project, Contact, Footer } from './sections';
import './styles/index.scss';

function App() {
    return (
        <>
            <ScrollBackTop />
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
                <div className="wrapper">
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
