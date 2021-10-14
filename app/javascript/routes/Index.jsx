import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Project from "../components/Project";
import NewProject from '../components/NewProject';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/project/:id" exact component={Project}/>
            <Route path="/project" exact component={NewProject}/>
        </Switch>
    </Router>
);