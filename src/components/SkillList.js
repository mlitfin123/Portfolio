import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import Skill from './Skill';

function Skills() {

    const [programmingState, setProgrammingState] = useState([]);
    const [designState, setDesignState] = useState([]);
    const [toolsState, setToolsState] = useState([]);

    useEffect(() => {
        setProgrammingState(skillsData[0].programming);
        setDesignState(skillsData[1].design);
        setToolsState(skillsData[2].tools);
    }, []);

return (
    <main>
        <section className="content_section">
                <div className="column">
                    <div className="column-content">
                        <h1>Skills</h1>
                        <p>
                            Here is the list of skills Mark Litfin has used for his projects in the past.
                            The list is categorized by the following technology types: Programming languages, 
                            Design Software, and Additional Tools.
                        </p>
                        <h3>Programming Languages</h3>
                        <div className="row">
                            {
                                programmingState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                        <h3>Design Software</h3>
                        <div className="row">
                            {
                                designState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                        <h3>Additional Tools</h3>
                        <div className="row">
                            {
                                toolsState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Skills;