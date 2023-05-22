import {projects_data} from "services/projects_data";

import './project.css';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <h2 className="heading">Latest <span>Project</span></h2>
            
            <div className="projects-container">
                {projects_data.map(project => {
                    return (
                        <div className="project-box">
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
};

export default Projects;