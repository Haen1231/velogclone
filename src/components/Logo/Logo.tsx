import React from 'react';

import style from './Logo.module.scss';

const logo: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <a href="/" className={style.contents}>
        velog
      </a>
    </div>
  );
};

export default logo;
