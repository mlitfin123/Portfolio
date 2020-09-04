import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header>   
            <div id="banner">
            <h1>Mark Litfin</h1>
            <h3>Full Stack Web Developer</h3>
            <div className="resume-download">
                <label><a href="mailto:marklitfin1@gmail.com">marklitfin1@gmail.com</a></label>&nbsp; &bull; &nbsp;
                <label><a href="https://github.com/mlitfin123">GitHub</a></label>&nbsp; &bull; &nbsp;
                <label><a href="https://www.linkedin.com/in/mark-litfin-b132bb67/">LinkedIn</a></label>&nbsp; &bull; &nbsp;
            </div>
            <Nav />
        </div>
    </header>
    );
}

export default Header;