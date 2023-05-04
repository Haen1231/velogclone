import React, { useState } from 'react';

import PresentModal from '../../components/Modal/PresentModal/PresentModal';


import styles from './ModalPage.module.scss';


const ModalPage: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <h3>Modal Page</h3>
      </header>
      <div className={styles.contents}>
        <span>아래의 버튼을 눌러 modal을 확인해보세요</span>
        <button onClick={onClick}> 핸의 모달 보러가기</button>
      </div>
      <PresentModal isShow={isShow} onClose={onClick} />
    </div>
  );
};

export default ModalPage;
