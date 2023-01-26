import React from 'react';
import { CheckFilter } from '../CheckFilter/CheckFilter';
import style from './FilterSide.module.scss';

export const FiltersSide = () => {
  return (
    <div className={style.container}>
      <CheckFilter />
    </div>
  );
};
