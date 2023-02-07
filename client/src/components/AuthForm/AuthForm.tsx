import { CloseOutlined } from '@material-ui/icons';
import React from 'react';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  return (
    <div className={style.container}>
      <button className={style.close}>
        <CloseOutlined />
      </button>
      <form>
        <div className={style.firstDiv}>
          <h1 className={style.title}>Log in or Register</h1>
          <p className={style.subtitle}>Please enter your email address to continue:</p>
        </div>

        <div>
          <div>
            <label htmlFor="email">Email Address</label>
            <div>
              <input name="email" type="email" id="email" data-test="LoginForm__email" value="" />
            </div>
          </div>
          <p data-test="LoginForm__ErrorMessage" data-testid="LoginForm__ErrorMessage__email"></p>
        </div>

        <div>
          <button value="Continue" type="submit" data-test="LoginForm__SubmitButton" disabled>
            <div>Continue</div>
          </button>
        </div>
      </form>
    </div>
  );
};
