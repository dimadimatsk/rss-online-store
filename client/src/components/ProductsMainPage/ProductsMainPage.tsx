import React from 'react';
import { products } from '../../data';
import { ProductItem } from '../ProductMainPage/ProductMainPage';
import style from './ProductsMainPage.module.scss';

export const Products: React.FC = () => {
  return (
    <>
      <h2 className={style.title}>New arrivals</h2>
      <div className={style.container}>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </>
  );
};
