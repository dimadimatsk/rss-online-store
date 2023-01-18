import { Badge } from '@material-ui/core';
import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { FC } from 'react';
import style from './Navbar.module.scss';

export const Navbar: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <span>EN</span>
          <div className={style.searchContainer}>
            <input className={style.input} />
            <SearchOutlined style={{ opacity: 0.5, fontSize: '16px' }} />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.logo}>SHOP</h1>
        </div>
        <div className={style.right}>
          <div className={style.item}>
            <FavoriteBorderOutlined />
          </div>
          <div className={style.item}>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          <div className={style.item}>
            <PersonOutlineOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
