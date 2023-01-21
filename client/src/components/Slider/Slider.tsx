import React, { useState, useEffect } from 'react';
import style from './Slider.module.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { Slide } from '../Slide/Slide';
import { slides } from '../../data';

export const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => changeSlide('right'), 5000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [slideIndex]);

  const changeSlide = (direction: string): void => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={style.container}>
      <div className={`${style.arrow} ${style.left}`} onClick={(): void => changeSlide('left')}>
        <ArrowBackIosOutlined style={{ color: 'white' }} />
      </div>
      <div className={style.wrapper} style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {slides.map((slide, index) =>
          <Slide key={index} {...slide} />
        )}
      </div>
      <div className={`${style.arrow} ${style.right}`} onClick={(): void => changeSlide('right')}>
        <ArrowForwardIosOutlined style={{ color: 'white' }} />
      </div>
    </div>
  );
};
