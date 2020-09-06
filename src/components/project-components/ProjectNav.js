import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const ProjectNav = () => {

    let location = useLocation();

    const [activePage, setActivePage] = useState('');
    
    useEffect(() => {
        
        switch (location.pathname) {
            case '/portfolio':
                setActivePage('all');
            break;
            case '/portfolio/csharp':
                setActivePage('csharp');
            break;
            case '/portfolio/games':
                setActivePage('games');
            break;
            case '/portfolio/js':
                setActivePage('js');
            break;
            case '/portfolio/python':
                setActivePage('python');
            break;
            case '/portfolio/react':
                setActivePage('react');
            break;
            case '/portfolio/unity':
                setActivePage('unity');
            break;
            case '/portfolio/web':
                setActivePage('web');
            break;
            default: 
                setActivePage('all');
            break;
    }
}, [location.pathname]);

return (
    <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link onClick={() => setActivePage('all')} className={activePage === 'all' ? 'nav-link active' : 'nav-link'} to="/portfolio">All</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('csharp')} className={activePage === 'csharp' ? 'nav-link active' : 'nav-link'} to="/portfolio/csharp">C#</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('js')} className={activePage === 'js' ? 'nav-link active' : 'nav-link'} to="/portfolio/js">Javascript</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('python')} className={activePage === 'python' ? 'nav-link active' : 'nav-link'} to="/portfolio/python">Python</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('react')} className={activePage === 'react' ? 'nav-link active' : 'nav-link'} to="/portfolio/react">React</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('web')} className={activePage === 'web' ? 'nav-link active' : 'nav-link'} to="/portfolio/web">Web App</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('games')} className={activePage === 'games' ? 'nav-link active' : 'nav-link'} to="/portfolio/games">Games</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('unity')} className={activePage === 'unity' ? 'nav-link active' : 'nav-link'} to="/portfolio/unity">Unity Game Engine</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default ProjectNav;