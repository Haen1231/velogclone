import React, { memo, MouseEventHandler, useCallback, useState } from 'react';

import cx from 'clsx';

import styles from './Navbar.module.scss';

type SelectOption = 'today' | 'week' | 'month' | 'year';

const SELECT_MAPPER: Record<SelectOption, string> = {
  today: '오늘',
  week: '이번 주',
  month: '이번 달',
  year: '올해',
} as const;

interface SelectItemProps {
  isSelected: boolean;
  value: string;
  onClickItem: MouseEventHandler<HTMLLIElement>;
}

const SelectItem: React.FC<SelectItemProps> = memo(
  ({ isSelected, onClickItem, value }) => {
    return (
      <li
        className={cx({ [styles.isSelected]: isSelected })}
        onClick={onClickItem}
      >
        {value}
      </li>
    );
  },
);

const Select: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>('today');
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen((prev) => !prev);
  };

  const onClickItem = useCallback(
    (item: SelectOption) => () => {
      setSelectedOption(item);
      setIsOpen(false);
    },
    [],
  );

  // react ( state 덩어리 ) set(state + 1) set(state+1) set(state+1)
  // set ~~~ set ~~~ set ~~~
  // virtual stack frame FIBER
  // 1. render phase => 바뀐게 있나 객체에다가 ( Linked List ) 바꿔놔요 Virtual Dom
  // 2. commit phase => 동기적으로

  // 트리 두개
  // Work In Process tree ( setState 뭐시기 => Flushed 업데이트 )
  // Flushed tree ( html dom 상태 )

  return (
    <div className={styles.wrapper}>
      <div className={styles.select} onClick={handleDropdown}>
        <div>{SELECT_MAPPER[selectedOption]}</div>
      </div>
      {isOpen && (
        <div className={styles.optionWrapper}>
          <div className={styles.selectOption}>
            <ul>
              {Object.keys(SELECT_MAPPER).map((item) => (
                <SelectItem
                  key={item}
                  value={SELECT_MAPPER[item as SelectOption]}
                  isSelected={item === selectedOption}
                  onClickItem={onClickItem(item as SelectOption)}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
