import React, { useState, useEffect } from 'react';
import style from './Slider.module.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import salePic1 from '../../assets/1.jpg';
import salePic2 from '../../assets/2.jpg';
import salePic3 from '../../assets/3.jpg';

export const Slider = () => {
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
        <ArrowBackIosOutlined />
      </div>
      <div className={style.wrapper} style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        <div className={style.slide}>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${salePic1})`,
            }}
          >
            <div className={style.infoContainer}>
              <div className={style.info}>
                <h1 className={style.title}>WINTER SALE</h1>
                <p className={style.subtitle}>Up to 70% Off.</p>
              </div>
              <button className={style.btn}>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className={style.slide}>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${salePic2})`,
            }}
          >
            <div className={style.infoContainer}>
              <div className={style.info}>
                <h1 className={style.title}>WINTER SALE</h1>
                <p className={style.subtitle}>Up to 70% Off.</p>
              </div>
              <button className={style.btn}>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className={style.slide}>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${salePic3})`,
            }}
          >
            <div className={style.infoContainer}>
              <div className={style.info}>
                <h1 className={style.title}>WINTER SALE</h1>
                <p className={style.subtitle}>Up to 70% Off.</p>
              </div>
              <button className={style.btn}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.arrow} ${style.right}`} onClick={(): void => changeSlide('right')}>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};
