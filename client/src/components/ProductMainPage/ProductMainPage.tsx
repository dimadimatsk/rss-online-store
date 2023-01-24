import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { IProduct } from '../../types';
import style from './ProductItem.module.scss';

export const ProductItem: React.FC<IProduct> = (props) => {
  return (
    <div className={style.container}>
        <img className={style.img} src={props.img} alt="" />
        <div className={style.info}>
          <div className={style.iconContainer}>
            <ShoppingCartOutlined />
          </div>
          <div className={style.iconContainer}>
            <FavoriteBorderOutlined />
          </div>
          <div className={style.iconContainer}>
            <SearchOutlined />
          </div>
        </div>
    </div>
  );
};
