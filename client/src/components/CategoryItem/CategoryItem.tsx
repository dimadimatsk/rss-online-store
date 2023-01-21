import React from 'react';
import { ICategory } from '../../types';
import style from './CategoryItem.module.scss';

export const CategoryItem: React.FC<ICategory> = (props) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.img} alt="" />
      <div className={style.info}>
        <h1 className={style.title}>{props.title}</h1>
        <button className={style.btn}>SHOP NOW</button>
      </div>
    </div>
  );
};
