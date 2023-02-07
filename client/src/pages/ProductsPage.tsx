import React from 'react';
import { ItemsBlock } from '../components/ItemsBlock/ItemsBlock';
import { Title } from '../components/Title/Title';

export const ProductsPage = () => {
  return (
    <div className="wrapper">
      <Title />
      <ItemsBlock />
    </div>
  );
};
