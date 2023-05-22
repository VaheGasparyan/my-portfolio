import {useEffect, useRef} from "react";

import {checkScrollOffset} from "../utils/checkScrollOffset";

import Header from "components/header";
import Home from "components/home";
import About from "components/about";
import Skills from "components/skills";
import Projects from "components/projects";
import Footer from "components/footer";

const Main = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        checkScrollOffset(homeRef.current!, aboutRef.current!, skillsRef.current!, projectsRef.current!);
    }, [])

    return (
        <div className='main'>
            <Header />
            <Home ref={homeRef} />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Footer />
        </div>
    )
};

export default Main;