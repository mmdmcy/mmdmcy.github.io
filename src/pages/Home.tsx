import React from 'react';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
    </>
  );
};