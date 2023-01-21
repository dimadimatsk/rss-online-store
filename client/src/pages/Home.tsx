import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Slider } from '../components/Slider/Slider';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
};
