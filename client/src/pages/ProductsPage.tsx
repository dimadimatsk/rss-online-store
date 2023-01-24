import React from 'react';
import { ItemsBlock } from '../components/ItemsBlock/ItemsBlock';
import { Title } from '../components/Title/Title';

export const ItemsPage = () => {
  return (
    <div className="container">
      <Title />
      <ItemsBlock />
    </div>
  );
};
