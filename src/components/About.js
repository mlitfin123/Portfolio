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