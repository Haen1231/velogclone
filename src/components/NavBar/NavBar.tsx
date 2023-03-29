import React, { useEffect, useState } from 'react';

import cx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import clockIMG from '../../assets/clock.png';
import grayClockIMG from '../../assets/clock_gray.png';
import grayTrendingIMG from '../../assets/gray_trending.png';
import trendingIMG from '../../assets/trending.png';


import styles from './Navbar.module.scss';
import SeeMore from './SeeMore';
import Select from './Select';

const NavBar: React.FC = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <div className={styles.nav}>
          <a href="/" className={cx({ [styles.nav_selected]: isHome })}>
            <img
              src={isHome ? trendingIMG : grayTrendingIMG}
              alt={'Trending_IMG'}
              width="24px"
              height="24px"
            />
            트랜딩
          </a>
          <a href="/recent" className={cx({ [styles.nav_selected]: !isHome })}>
            <img
              src={isHome ? grayClockIMG : clockIMG}
              alt={'Clock_IMG'}
              width="20px"
              height="20px"
            />
            최신
          </a>
          {isHome && <Select />}
          <Link to="/dropdown" className={styles.dropdown}>
            2주차 과제
          </Link>

          <Link to="/modal" className={styles.dropdown}>
            3주차 과제
          </Link>
        </div>
        <SeeMore />
      </div>
    </div>
  );
};
export default NavBar;
