import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Mailing } from '../components/Mailing/Mailing';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../components/Products/Products';
import { Slider } from '../components/Slider/Slider';

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Mailing />
    </>
  );
};
