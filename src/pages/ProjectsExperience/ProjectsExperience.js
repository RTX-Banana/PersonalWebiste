import React from 'react';
import Projects from '../../components/ProjectsExperience/Projects.js';
import Experience from '../../components/ProjectsExperience/Experience.js';
import Events from '../../components/ProjectsExperience/Events.js';

export default function ProjectsExperience() {
  return (
    <div>
      <Projects />
      <hr />
      <Experience />
      <hr />
      <Events />
    </div>
  );
}
