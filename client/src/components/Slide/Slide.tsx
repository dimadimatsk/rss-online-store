import React from 'react';
import style from './Slide.module.scss';
import { ISlide } from '../../types/data';

export const Slide: React.FC<ISlide> = (props) => {
  return (
    <div className={style.slide}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url(${require(`../../assets/${props.img}.jpg`)})`,
        }}
      >
        <div className={style.infoContainer}>
          <div className={style.info}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.subtitle}>{props.subtitle}</p>
          </div>
          <button className={style.btn}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};
