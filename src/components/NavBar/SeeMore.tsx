import React, { MouseEventHandler, useState } from 'react';

import seeMoreIMG from '../../Img/more.png';

import styles from './SeeMore.module.scss';

type SeeMoreOption = 'notice' | 'tag' | 'service' | 'slack';

const SEEMORE_MAPPER: Record<SeeMoreOption, string> = {
  notice: '공지사항',
  tag: '태그 목록',
  service: '서비스 목록',
  slack: 'Slack',
} as const;
const SeeMore: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={handleDropdown}>
        <img src={seeMoreIMG} alt="seeMoreIMG" width="15px" height="15px" />
      </div>

      {isOpen && (
        <div className={styles.optionWrapper}>
          <ul>
            {Object.keys(SEEMORE_MAPPER).map((item) => (
              <li key={item}>{SEEMORE_MAPPER[item as SeeMoreOption]}</li>
            ))}
          </ul>
          <div className={styles.contact}>
            <h5>문의</h5>
            <div>haen1231@velog.io</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeMore;
