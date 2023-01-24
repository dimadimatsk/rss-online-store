import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Footer } from '../components/Footer/Footer';
import { Mailing } from '../components/Mailing/Mailing';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../components/Products/Products';
import { Slider } from '../components/Slider/Slider';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Mailing />
      <Footer />
    </div>
  );
};
