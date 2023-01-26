import React from 'react';
import style from './SortBar.module.scss';

export const SortBar: React.FC = () => {
  return (
    <div className={style.sort}>
      <div className={style.label}>
        <span>Featured</span>
        <svg width="10px" height="6px" viewBox="0 0 10 6">
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              id="PLP/Interaction_Bar/BP3"
              transform="translate(-121.000000, -8.000000)"
              fill="#1A1A1A"
            >
              <g id="Icons/Arrow/Down" transform="translate(121.000000, 8.000000)">
                <path
                  d="M8.98305778,0.214828616 L4.90102653,4.5676932 L0.838526532,0.234359866 C0.676724359,0.0617708812 0.405646767,0.0530264428 0.233057782,0.214828616 L0.213526532,0.234359866 C0.0377720967,0.421831263 0.0377720967,0.713555134 0.213526532,0.901026532 L4.90102653,5.90102653 L9.58852653,0.901026532 C9.76428097,0.713555134 9.76428097,0.421831263 9.58852653,0.234359866 C9.42672436,0.0617708812 9.15564677,0.0530264428 8.98305778,0.214828616 Z"
                  id="Icons/Arrow/Right"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <div className={style.popup}>
          <div></div>
          <ul>
            <li className={style.active}>Featured</li>
            <li>Price (Low)</li>
            <li>Price (High)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
