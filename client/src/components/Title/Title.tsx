import { ArrowForward, ArrowForwardIos } from '@material-ui/icons';
import React from 'react';
import { arrow } from '../Slider/Slider.module.scss';
import style from './Title.module.scss';

export const Title = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <ol className={style.linkContainer}>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <svg className={style.arrow} viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="PLP/BP3" transform="translate(-215.000000, -122.000000)" fill="currentColor">
                  <g id="PLP/Header/Breadcrumb/BP3" transform="translate(32.000000, 118.000000)">
                    <g id="Chevron" transform="translate(183.000000, 4.000000)">
                      <path
                        d="M0.5,4.82842712 L5,4.82842712 L5,4.82842712 L5,5.82842712 L0.5,5.82842712 C0.223857625,5.82842712 3.38176876e-17,5.6045695 0,5.32842712 C-3.38176876e-17,5.05228475 0.223857625,4.82842712 0.5,4.82842712 Z"
                        id="Rectangle"
                        transform="translate(2.500000, 5.328427) rotate(-45.000000) translate(-2.500000, -5.328427) "
                      ></path>
                      <path
                        d="M0.5,2 L5,2 L5,2 L5,3 L0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 C-3.38176876e-17,2.22385763 0.223857625,2 0.5,2 Z"
                        id="Rectangle-Copy-2"
                        transform="translate(2.500000, 2.500000) rotate(-315.000000) translate(-2.500000, -2.500000) "
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <a href="#">
              <span>Clothing</span>
            </a>
          </li>
        </ol>
        <h1 className={style.title}>clothing</h1>
      </div>
    </div>
  );
};
