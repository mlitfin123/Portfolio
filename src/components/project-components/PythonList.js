import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectData from '../../data/projects.json';

const PythonList = () => {

    const [projectState, setProjectState] = useState([]);

    useEffect(() => {
    setProjectState(projectData[0].Python);
    }, []);

    return (
    <section id="project_porfolio" className="content_section">
        <h3>Python Applications</h3>
        <div className="category">
            <div className="row">
                {
                    projectState.map(project => (
                        <Project 
                            key={project.id}
                            id={project.id}
                            description={project.description}
                            projectImg={project.projectImg}
                            software={project.software}
                            technologies={project.technologies}
                            title={project.title}
                            liveSite={project.liveSite}
                            gitRepo={project.gitRepo}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default PythonList;