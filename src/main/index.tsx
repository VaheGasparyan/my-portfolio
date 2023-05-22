import Header from "components/header";
import Home from "components/home";
import About from "components/about";
import Skills from "components/skills";

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Home />
            <About />
            <Skills />
        </div>
    )
};

export default Main;