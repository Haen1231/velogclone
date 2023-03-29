import React, { MouseEventHandler, useState } from 'react';

import moonIMG from '../../assets/moon.png';
import searchIMG from '../../assets/search.png';
import sunIMG from '../../assets/sun.png';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [sunON, setSunOn] = useState(true);

  const onClickSun: MouseEventHandler<HTMLDivElement> = () => {
    setSunOn((prev) => !prev);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Logo />
        </div>
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <img
              src={sunON ? sunIMG : moonIMG}
              alt="sun_IMG"
              width="24px"
              height="24px"
              onClick={onClickSun}
            />
          </button>
          <a className={styles.iconButton}>
            <img src={searchIMG} alt="search_IMG" width="20px" height="20px" />
          </a>
          <button className={styles.btn_login}>로그인</button>
        </div>
      </div>
    </>
  );
};

export default Header;
