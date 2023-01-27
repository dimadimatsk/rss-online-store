import React from 'react';
import { CheckFilter } from '../CheckFilter/CheckFilter';
import style from './FilterSide.module.scss';

export const FiltersSide: React.FC = () => {
  return (
    <div className={style.container}>
      <CheckFilter />
      <CheckFilter />
    </div>
  );
};
