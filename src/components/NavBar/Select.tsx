import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';

import styles from './Navbar.module.scss';

const Select: React.FC = () => {
  const [selectState, setSelectState] = useState<boolean>(false);

  const selectClick: MouseEventHandler<HTMLDivElement> = (e) => {
    setSelectState(!selectState);
  };


  return (
    <>
      <div>
        <div className={styles.select} onClick={selectClick}>
          <div>오늘</div>
        </div>
        {selectState && (
          <div className={styles.optionWrapper}>
            <div className={styles.selectOption}>
              <ul>
                <li className={styles.active}>오늘</li>
                <li>이번 주</li>
                <li>이번 달</li>
                <li>올해</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
