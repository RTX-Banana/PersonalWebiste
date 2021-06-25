import React from 'react';
import About from '../../components/AboutMe/About.js';
import SkillsTechnologies from '../../components/AboutMe/SkillsTechnologies.js';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div>
      <About />
      <hr />
      <SkillsTechnologies />
    </div>
  );
}
