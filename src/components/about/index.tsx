import {forwardRef} from "react";

import aboutImg from 'images/about-us.svg';
import './about.css';

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className='about' id='about'>
            <div className="about-img">
                <img src={aboutImg} alt="about-img"/>
            </div>

            <div className="about-content">
                <h2 className='heading'>About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>I studied at the energy college of Abovyan in the programming department for three years. After graduation, I started studying javascript on my own. I participated in the Introduction to javascript course conducted by the Armenian Code Academy, which lasted two months. After which I attended a six-month Bootcamp at ACA. After successful completion I was certified by ACA</p>
                <a href="#" className='btn'>Read More</a>
            </div>
        </section>
    )
});

export default About;