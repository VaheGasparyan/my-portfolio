import Header from "components/header";
import Home from "components/home";
import About from "components/about";
import Skills from "components/skills";
import Projects from "components/projects";

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
        </div>
    )
};

export default Main;