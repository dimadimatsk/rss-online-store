import { Badge } from '@material-ui/core';
import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { FC, useState } from 'react';
import style from './Navbar.module.scss';

export const Navbar: FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const categories = ['clothing', 'footwear', 'accessories', 'lifestyle', 'gifts', 'sale'];

  const handleMouseEnter = () => {
    setHovered(true);
    console.log('q');
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log('lv');
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          {/* <div className={style.searchContainer}>
            <input className={style.input} />
            <SearchOutlined style={{ opacity: 0.5, fontSize: '16px' }} />
          </div> */}
          <div className={style.item}>
            <PersonOutlineOutlined />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.logo}>SHOP.</h1>
        </div>
        <div className={style.right}>
          <div className={style.item}>
            <SearchOutlined />
          </div>
          <div className={style.item}>
            <FavoriteBorderOutlined />
          </div>
          <div className={style.item}>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
      <div className={style.catsContainer}>
        {categories.map((category, index) => (
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={index}
            className={style.category}
          >
            <a className={style.link} href="#">
              {category}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};
