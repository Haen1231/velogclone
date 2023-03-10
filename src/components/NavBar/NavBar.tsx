import React from 'react';

import styles from './Navbar.module.scss';
import Select from './Select';

const NavBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <a href="/">트렌딩</a>
        <a href="/recent">최신</a>
        <Select />
      </div>
    </div>
  );
};
export default NavBar;
