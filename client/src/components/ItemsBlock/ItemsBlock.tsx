import React from 'react';
import { FiltersSide } from '../FiltersSide/FiltersSide';
import { ItemsSide } from '../ItemsSide/ItemsSide';
import style from './ItemsBlock.module.scss';

export const ItemsBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <FiltersSide />
      <ItemsSide />
    </div>
  );
};
