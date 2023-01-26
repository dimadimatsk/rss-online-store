import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';

import { SortBar } from '../SortBar/SortBar';
import style from './ItemsSide.module.scss';

export const ItemsSide: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <p className={style.count}>124234 products</p>
        <SortBar />
      </div>
      <div className={style.itemsContainer}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};
