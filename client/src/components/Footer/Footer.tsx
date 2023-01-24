import { MailOutline, Phone, Room } from '@material-ui/icons';
import React from 'react';
import style from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h3 className={style.logo}>SHOP.</h3>
        <div className={style.contacts}>
          <h3 className={style.title}>Contacts</h3>
          <a className={style.contactItem}>
            <Room style={{ marginRight: '5px' }} /> 99 Peachfield Road, Chacewater, UK
          </a>
          <a href="tel:+8 800 555 35 35" className={style.contactItem}>
            <Phone style={{ marginRight: '5px' }} /> +8 800 555 35 35
          </a>
          <a
            href="mailto:contact@example.com"
            className={style.contactItem}
            style={{ marginBottom: '0px' }}
          >
            <MailOutline style={{ marginRight: '5px' }} />
            contact@example.com
          </a>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.paymentContainer}>
          <div className={style.paymentItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10">
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#1A1F71" transform="translate(-44 -961)">
                  <g>
                    <g>
                      <g transform="translate(0 787)">
                        <g transform="translate(44 171)">
                          <g>
                            <g>
                              <g fillRule="nonzero" transform="translate(.6 3.2)">
                                <path d="M10.941.175L7.167 9.452H4.682L2.854 2.1a1.01 1.01 0 00-.553-.82A9.525 9.525 0 000 .484v-.27h3.945c.537 0 .994.4 1.079.943l.986 5.385L8.43.23 10.94.175zm9.64 6.247c0-2.45-3.288-2.585-3.262-3.675 0-.337.316-.687.987-.781a4.277 4.277 0 012.288.417l.408-1.966A6.08 6.08 0 0018.819 0c-2.302 0-3.946 1.266-3.946 3.07 0 1.346 1.158 2.087 2.039 2.53.88.445 1.21.741 1.21 1.159 0 .62-.724.902-1.394.902a4.75 4.75 0 01-2.394-.593l-.447 2.034c.837.337 1.73.506 2.63.498 2.446 0 4.038-1.239 4.05-3.178h.014zm6.062 3.03H28.8L26.92.175h-1.973a1.066 1.066 0 00-.986.687l-3.499 8.59h2.446l.487-1.347h2.985l.263 1.347zm-2.63-3.286l1.223-3.487.75 3.46-1.973.027zM14.23.175l-1.92 9.277h-2.288L11.94.175h2.288z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className={style.paymentItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12">
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(-98 -960)">
                  <g>
                    <g>
                      <g transform="translate(0 787)">
                        <g transform="translate(44 171)">
                          <g transform="translate(54)">
                            <g>
                              <g fillRule="nonzero" transform="translate(0 1.6)">
                                <path
                                  fill="#F79E1B"
                                  d="M19.881 6.4c-.002 2.415-1.456 4.577-3.651 5.43-2.196.855-4.676.222-6.23-1.588 1.884-2.19 1.884-5.482 0-7.672C11.552.762 14.03.13 16.224.98c2.195.85 3.65 3.007 3.657 5.42z"
                                ></path>
                                <path
                                  fill="#FF5F00"
                                  d="M11.415 6.4A5.91 5.91 0 0110 10.242C8.116 8.052 8.116 4.76 10 2.57a5.91 5.91 0 011.415 3.83z"
                                ></path>
                                <path
                                  fill="#EB001B"
                                  d="M8.585 6.4A5.91 5.91 0 0010 10.242c-1.552 1.817-4.035 2.456-6.235 1.602-2.2-.853-3.656-3.019-3.656-5.438 0-2.419 1.456-4.585 3.656-5.438C5.965.115 8.448.753 10 2.57A5.91 5.91 0 008.585 6.4z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className={style.paymentItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="10" viewBox="0 0 34 10">
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(-194 -961)">
                  <g>
                    <g>
                      <g transform="translate(0 787)">
                        <g transform="translate(44 171)">
                          <g transform="translate(150)">
                            <g>
                              <g fillRule="nonzero">
                                <path
                                  fill="#253B80"
                                  d="M6.038 1.3A2.31 2.31 0 004.144.611H1.572a.369.369 0 00-.351.325L.155 7.8a.24.24 0 00.056.183c.044.05.105.077.17.077h1.254a.366.366 0 00.339-.26l.288-1.872a.344.344 0 01.339-.325h.815a2.597 2.597 0 002.016-.64 2.794 2.794 0 00.932-1.96A2.1 2.1 0 006.038 1.3zM4.445 3.107c-.138.975-.853.975-1.53.975h-.39l.264-1.807a.23.23 0 01.213-.208h.176c.464 0 .903 0 1.129.273.156.22.207.503.138.767zM11.896 3.068H10.64a.24.24 0 00-.226.182v.364l-.087-.143a1.733 1.733 0 00-1.455-.546c-1.419.034-2.599 1.14-2.773 2.6a2.511 2.511 0 00.465 1.989c.397.456.976.696 1.567.65a2.318 2.318 0 001.719-.741V7.8a.24.24 0 00.057.17c.04.046.096.074.156.077h1.117a.355.355 0 00.35-.312l.666-4.433a.225.225 0 00-.083-.21.207.207 0 00-.218-.024zM8.772 6.825a1.022 1.022 0 01-.828-.338 1.164 1.164 0 01-.188-.91c.07-.736.667-1.297 1.38-1.3.313-.016.616.112.828.351.2.254.28.589.213.91-.072.749-.692 1.311-1.417 1.287h.012zM18.493 3.068H17.24a.36.36 0 00-.301.169l-1.718 2.6-.728-2.6a.366.366 0 00-.351-.273h-1.255a.211.211 0 00-.176.095.228.228 0 00-.024.204l1.367 4.199-1.254 1.898a.228.228 0 00-.017.232c.037.074.111.12.192.12h1.255a.36.36 0 00.3-.157l4.14-6.24a.22.22 0 00-.176-.247z"
                                  transform="translate(.2 3)"
                                ></path>
                                <path
                                  fill="#179BD7"
                                  d="M24.502 1.3a2.322 2.322 0 00-1.894-.689h-2.584a.357.357 0 00-.339.325L18.619 7.8a.24.24 0 00.056.183c.044.05.105.077.17.077h1.33a.255.255 0 00.238-.234l.3-1.963a.369.369 0 01.352-.325h.815a2.597 2.597 0 002.015-.64 2.794 2.794 0 00.933-1.96 2.154 2.154 0 00-.326-1.638zm-1.593 1.833c-.138.975-.853.975-1.53.975h-.39l.264-1.807a.216.216 0 01.226-.195h.175c.464 0 .903 0 1.13.273.14.213.186.478.125.728v.026zM30.36 3.068h-1.255a.227.227 0 00-.226.182v.364l-.087-.143a1.733 1.733 0 00-1.456-.546c-1.418.034-2.598 1.14-2.772 2.6a2.511 2.511 0 00.465 1.989c.397.456.976.696 1.567.65a2.318 2.318 0 001.719-.741V7.8a.226.226 0 00.053.173c.04.048.099.074.16.074h1.116a.355.355 0 00.352-.312l.602-4.407a.226.226 0 00-.055-.193.209.209 0 00-.184-.067zm-3.124 3.757a1.01 1.01 0 01-.828-.338 1.164 1.164 0 01-.188-.91c.065-.739.664-1.303 1.38-1.3.312-.016.616.112.828.351.194.257.272.589.213.91-.072.744-.684 1.304-1.405 1.287zM33.232.572h-1.254c-.11 0-.2.083-.214.195L30.761 7.8a.227.227 0 00.047.182.21.21 0 00.166.078h1.066a.368.368 0 00.352-.312L33.445.819a.226.226 0 00-.053-.173.21.21 0 00-.16-.074z"
                                  transform="translate(.2 3)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={style.info}>
          <p className={style.text}>
            Copyright ©{' '}
            <a target="_blank" href="https://github.com/dimadimatsk">
              dimareectsk
            </a>{' '}
            2023 | All Rights Reserved
          </p>
          <p className={style.text}>
            Company registration number: 123456789 | VAT number: GB 123456789
          </p>
        </div>
      </div>
    </div>
  );
};
