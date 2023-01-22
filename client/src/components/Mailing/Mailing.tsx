import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React, { useState } from 'react';
import style from './Mailing.module.scss';

export const Mailing: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handeChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>SIGN UP TO THE SHOP. MAILING LIST</h3>
        <p className={style.subtitle}>
          Sign up for exclusive early sale access and tailored new arrivals
        </p>
      </div>
      <div className={style.emailContainer}>
        <h4 className={style.emailTitle}>email address</h4>
        <div className={style.inputContainer}>
          <input
            value={inputValue}
            onChange={handeChangeInput}
            type={'email'}
            placeholder="example@example.com"
            className={style.input}
          />
          <button className={`${style.btn} ${!inputValue ? style.disabled : ''}`} disabled>
            SIGN IN
          </button>
        </div>
        <div className={style.social}>
          <a target={'_blank'} href="http://instagram.com">
            <Instagram className={style.icon} />
          </a>
          <a target={'_blank'} href="http://twitter.com">
            <Twitter className={style.icon} />
          </a>
          <a target={'_blank'} href="http://facebook.com">
            <Facebook className={style.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};
