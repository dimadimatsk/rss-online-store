import React from 'react';
import style from './ButtonFilter.module.scss';

export const ButtonFilter: React.FC = () => {
  return (
    <div className={style.container}>
      <h3>Size</h3>
      <div className={style.filterContainer}>
        <div className={style.sizesContainer}>
          <div className={style.sizeBody}>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
            <div className={style.size}>
              <span>XXX-Small</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
