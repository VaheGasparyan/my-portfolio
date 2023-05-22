import {forwardRef} from "react";

import {projects_data} from "services/projects_data";
import { v4 as uuid } from 'uuid';

import './project.css';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section ref={ref} className='projects' id='projects'>
            <h2 className="heading">Latest <span>Project</span></h2>

            <div className="projects-container">
                {projects_data.map(project => {
                    return (
                        <div className="project-box" key={uuid()}>
                            <img src={project.imgSrc} alt="project-img"/>
                            <div className="project-layer">
                                <h4>{project.name}</h4>
                                <p>{project.tools}</p>
                                <a href="#"><i className='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
});

export default Projects;