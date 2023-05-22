import {skills} from "services/skills";
import { v4 as uuid } from 'uuid';

import skillsImg from 'images/skills-img.svg';

import './skills.css';

const Skills = () => {
    const icons = [<i className='bx bxl-html5'></i>, <i className='bx bxl-css3'></i>,
        <i className='bx bxl-javascript'></i>, <i className='bx bxl-react'></i>, <i className='bx bxl-redux'></i>,
        <i className='bx bxl-typescript'></i>, <i className='bx bxl-git'></i>, <i className='bx bxl-tailwind-css'></i>,
        <i className='bx bxl-tailwind-css'></i>, <i className='bx bx-book-heart'></i>,
        <i className='bx bx-book-open'></i>, <i className='bx bx-book-bookmark'></i>];

    return (
        <section className='skills'>
            <h2 className="heading">My <span>Skills</span></h2>

            <div className="skills-content">
                <div className="skills-img">
                    <img src={skillsImg} alt="skills-img"/>
                </div>

                <div className="my-skills">
                    {skills.map((skill, index) => {
                        return (
                            <div className="skill" key={uuid()}>
                                <p>{skill} {icons[index]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Skills;