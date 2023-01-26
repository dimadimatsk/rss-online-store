import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Footer } from '../components/Footer/Footer';
import { Mailing } from '../components/Mailing/Mailing';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../components/ProductsMainPage/ProductsMainPage';
import { Slider } from '../components/Slider/Slider';

export const Main: React.FC = () => {
  return (
    <>
      <Slider />
      <div className="wrapper">
        <Products />
        <Categories />
      </div>
    </>
  );
};
