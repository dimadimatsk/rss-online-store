import { Badge } from '@material-ui/core';
import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import style from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const categories = ['clothing', 'footwear', 'accessories', 'lifestyle', 'gifts', 'sale'];
  const [isShowedForm, setIsShowedForm] = useState(true);
  const handleClick = () => {
    setIsShowedForm(!isShowedForm);
  };

  return (
    <div className={style.container}>
      {isShowedForm && <AuthForm />}
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.item} onClick={handleClick}>
            <PersonOutlineOutlined />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.logo}>SHOP</h1>
        </div>
        <div className={style.right}>
          <div className={style.item}>
            <SearchOutlined />
          </div>
          <div className={style.item}>
            <FavoriteBorderOutlined />
          </div>
          <div className={`${style.item} ${style.last}`}>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
      <div className={style.catsContainer}>
        {categories.map((category, index) => (
          <span key={index} className={style.category}>
            <a className={style.link} href="#">
              {category}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};
