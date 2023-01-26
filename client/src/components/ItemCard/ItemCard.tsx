import React from 'react';
import style from './ItemCard.module.scss';

export const ItemCard = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img
          alt="Soulland 2022 Logo Tee - White"
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_300/prodmedia/media/catalog/product/3/0/30-11-2022_TC_22129-1063_m1_1.jpg"
        />
      </div>
      <span className={style.name}>Soulland 2022 Logo Tee</span>
      <span className={style.color}>White</span>
      <div className={style.priceContainer}>
        <span className={style.price}>RUB9,025</span>
      </div>
    </div>
  );
};
