import React from 'react';

const About = () => {
    return (
    <main>
        <section className="content_section">
            <section className="column">

            <div className="row">
                <div className="col-lg-6">
                
                    <div className="column-content bio">
                    <h1>About</h1>
                    <p>
                        Professional full-stack developer who has recently graduated with a certificate in full-stack web development from the University of Miami. This certificate program has provided me with newly developed skills in web development including HTML, CSS, Javascript, Jquery, React, etc. I am known for my attention to detail and problem solving abilities which I have been able to develop through my extensive quality assurance and exercise science backgrounds. I have worked on multiple successful teams following the scrum and agile methodologies to develop a variety of innovative applications which has changed how the military does healthcare. Passionate about coming up with new ideas and developing meaningful applications that can provide use or entertainment for their users.
                    </p>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="column-content">
                        <img src={process.env.PUBLIC_URL + "/images/Mark_Litfin.jpg"} className="img-fluid" alt="Mark was Here" />
                    </div>
                    </div>
            </div>
            </section>
        </section>
    </main>
    );
}

export default About;