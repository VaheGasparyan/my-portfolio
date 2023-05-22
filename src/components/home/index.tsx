import {forwardRef} from "react";

import homeImg from 'images/programmer-person.svg';
import './home.css';

const Home = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className='home' id='home'>
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Vahe Gasparyan</h1>
                <h3>And I'm a <span>Frontend Developer</span></h3>
                <p>Hello everyone, I am a frontend developer, I love my profession very much and it can be said that I have created a world inside myself, and I live in the world of those codes. I mostly spend my free time either studying new technologies, playing computer games or playing soccer, it's one of my favorite sports.</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/vahegasparyan/"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/VaheGasparyan"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-gmail'></i></a>
                    <a href="#"><i className='bx bxs-phone'></i></a>
                </div>
                <a href="#" className='btn'>Download CV</a>
            </div>

            <div className="home-img">
                <img src={homeImg} alt="home-img"/>
            </div>
        </section>
    )
});

export default Home;