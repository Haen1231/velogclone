import React, { memo, MouseEventHandler, useCallback, useState } from 'react';

import cx from 'clsx';

import dropdownIMG from '../../assets/sort-down.png';

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
        className={cx(
          { [styles.isSelected]: isSelected },
          styles.selectOption_li,
        )}
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

  const handleDropdown: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickItem = useCallback(
    (item: SelectOption) => () => {
      setSelectedOption(item);
      setIsOpen(false);
    },
    [],
  );

  return (
    <div>
      <div className={styles.select} onClick={handleDropdown}>
          {SELECT_MAPPER[selectedOption]}
          <img src={dropdownIMG} alt='dropdown_IMG' width='1rem' height='1rem'/>
      </div>
      {isOpen && (
        <div className={styles.selectOptionWrapper}>
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
