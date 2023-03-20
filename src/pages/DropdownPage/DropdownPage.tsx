import React from 'react';

import Dropdown from '../../components/Dropdown/Dropdown';

import styles from './DropdownPage.module.scss';

const numberArr = [1, 2, 3];
const stringArr = ['string1', 'string2', 'string3'];
const objectArr = [
  {
    id: 1,
    name: 'haen',
    label: 'object1',
    value: '[object1]: haen',
  },
  {
    id: 2,
    name: 'pang',
    label: 'object2',
    value: '[object2]: pang',
  },
];

const DropdownPage: React.FC = () => {
  console.log('numberArr', typeof numberArr);
  console.log('stringArr', typeof stringArr);
  console.log('objectArr', typeof objectArr);
  console.log(Object.keys(objectArr[0]));

  return (
    <div className={styles.wrapper}>
      <main>
        <span>2주차 과제</span>
        <div className={styles.contents}>
          <div className={styles.item}>
            <span> numberArr </span>
            <Dropdown
              items={numberArr}
              selectedItem={3}
              valueKey={''}
              onClick={undefined}
            />
          </div>
          <div className={styles.item}>
            <span> stringArr </span>
            <Dropdown
              items={stringArr}
              selectedItem={undefined}
              valueKey={''}
              onClick={undefined}
            />
          </div>
          <div className={styles.item}>
            <span> objectArr </span>
            <Dropdown
              items={objectArr}
              selectedItem={2}
              valueKey={'value'}
              onClick={undefined}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DropdownPage;
