import React, { useState } from 'react';

import opendpresent from '../../assets/openedpresent.png';
import present from '../../assets/present.png';

import styles from './Dialog.module.scss';

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const Dialog: React.FC<Props> = ({ isShow, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth();
  const day: number = today.getDay();

  const onClick = () => {
    setIsOpen((prev) => !prev);
    alert('오늘도 고생하셨어요😊');
  };

  return (
    <dialog open={isShow} className={styles.dialogWrapper}>
      <header>Dialog</header>
      <body>
        <span> 🥳오늘의 선물이 도착했어요🥳 </span>
        <div onClick={onClick} className={styles.imgDiv}>
          <img
            src={isOpen ? opendpresent : present}
            alt="present"
            width="200px"
            height="200px"
          />
        </div>
        <span>선물을 눌러 오늘의 선물을 받아보세요</span>
        {isOpen && (
          <div className={styles.giftDiv}>
            <span> {`${year}.${month}.${day}`}의 선물</span>
            <span> 😊 고생의 말 😊</span>
          </div>
        )}
      </body>
      <footer>
        <button onClick={onClose}> 닫기</button>
      </footer>
    </dialog>
  );
};

export default Dialog;
