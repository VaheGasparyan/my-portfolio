import {forwardRef} from "react";
import { clickToCopyPhoneNumber, clickToCopyGmailAddress } from "utils/clickToCopy";

import homeImg from 'images/programmer-person.svg';
import CV from 'pdf/Vahe-Gasparyan-CV.pdf';

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
                    <a href="https://www.linkedin.com/in/vahegasparyan/" target='_blank'><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/VaheGasparyan" target='_blank'><i className='bx bxl-github'></i></a>
                    <a href="#" className='gmail' onClick={clickToCopyGmailAddress}><i className='bx bxl-gmail'></i><span className='gmail_span'>Click to copy</span></a>
                    <a href="#" className='git' onClick={clickToCopyPhoneNumber}><i className='bx bxs-phone'></i><span className='git_span'>Click to copy</span></a>
                </div>
                <a href={CV} download='Vahe-Gasparyan-CV.pdf' className='btn'>Download CV</a>
            </div>

            <div className="home-img">
                <img src={homeImg} alt="home-img"/>
            </div>
        </section>
    )
});

export default Home;