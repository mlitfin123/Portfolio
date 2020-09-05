import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProjectNav from './ProjectNav';
import CSharpList from './C#List';
import GamesList from './GamesList';
import JsList from './JsList';
import PythonList from './PythonList';
import ReactList from './ReactList';
import UnityList from './UnityList';
import WebList from './WebList';
import AllList from './AllList';

const ProjectList = () => {

    return (
        <main>
            <Router>
            <ProjectNav />
            <Switch />
            <Route exact path="/portfolio/All" component={AllList} />
            <Route exact path="/portfolio/Csharp" component={CSharpList} />
            <Route exact path="/portfolio/Games" component={GamesList} />
            <Route exact path="/portfolio/Js" component={JsList} />
            <Route exact path="/portfolio/Python" component={PythonList} />
            <Route exact path="/portfolio/React" component={ReactList} />
            <Route exact path="/portfolio/Unity" component={UnityList} />
            <Route exact path="/portfolio/Web" component={WebList} />
            </Router>
        </main>
    );
}

export default ProjectList;