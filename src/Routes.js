import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import AboutMe from './pages/AboutMe/AboutMe.js';
import ProjectsExperience from './pages/ProjectsExperience/ProjectsExperience.js';
import ContactMe from './pages/ContactMe/ContactMe.js';

export default function Routes() {
  const allRoutes = [
    {
      Component: AboutMe,
      path: '/AboutMe',
    },
    {
      Component: ProjectsExperience,
      path: '/Projects&Experience',
    },
    {
      Component: ContactMe,
      path: '/ContactMe',
    },
  ];

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {allRoutes.map(({ path, Component }, index) => {
        return (
          <Route key={index} exact path={path} component={Component} />
        );
      })}
    </Switch>
  );
}
