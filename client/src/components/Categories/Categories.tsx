import React from 'react';
import style from './Categories.module.scss';
import { categories } from '../../data';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const Categories: React.FC = () => {
  return (
    <div className={style.container}>
      {categories.map((category, index) => (
        <CategoryItem {...category} key={index} />
      ))}
    </div>
  );
};
