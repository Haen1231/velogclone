import React, {
  memo,
  MouseEventHandler,
  useCallback,
  useState,
} from 'react';

import styles from './Dropdown.module.scss';

interface Props {
  items: Array<string | number | ObjectItem>;
  selectedItem?: number | string;

  valueKey: ObjectKeys | '';

  onClick: MouseEventHandler<HTMLLIElement> | undefined;
}

interface ObjectItem {
  [key: string]: any;

  id: number;
  name: string;
  label: string;
  value: string | number;
}

type ObjectKeys = 'id' | 'name' | 'label' | 'value';

const DropdownItem: React.FC<ObjectItem> = memo(({ onClickItem, value }) => {
  return <li onClick={onClickItem}>{value}</li>;
});

//ObjectItem interface인지 체크
function interfaceOfObjectItem(obj: any): obj is ObjectItem {
  if (typeof obj === 'number' || typeof obj === 'string') {
    return false;
  } else {
    return 'id' in obj && 'name' in obj && 'label' in obj && 'value' in obj;
  }
}


const Dropdown: React.FC<Props> = ({ items, selectedItem, valueKey,onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    string | number | undefined | ObjectItem
  >(selectedItem);

  const getSelectedItem = useCallback((selectedOption: any) => {
    const item = items.filter(
        (item) => interfaceOfObjectItem(item) && item.id === selectedOption,
    );
    console.log('onclick item',item);
    return item.length !== 0 ? (item[0] as ObjectItem)[valueKey] : null;
  },[items, valueKey]);

  const [selectedObjectOption,setSelectedObjectOption] = useState(getSelectedItem(selectedOption));

  if (!selectedOption) {
    setSelectedOption(items[0]);
  }

  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };



  const onClickItem = useCallback(
    (item: ObjectItem | number | string) => () => {
      setSelectedOption(item);
      setIsOpen(false);
      console.log('onclick', item);
      interfaceOfObjectItem(item) ? setSelectedObjectOption(item[valueKey]) : null
    },
    [valueKey],
  );



  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdown} onClick={onClickOpen}>
        <>
          {interfaceOfObjectItem(items[0])
            ? selectedObjectOption
            : selectedOption}
        </>
      </div>

      {isOpen && (
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownContents}>
            <ul>
              {items?.map((item) => {
                if (interfaceOfObjectItem(item)) {
                  return (
                    <DropdownItem
                      key={item.id}
                      value={item[valueKey]}
                      id={item.id}
                      label={item.label}
                      name={item.name}
                      onClickItem={onClick?onClick:onClickItem(item)}
                    />
                  );
                } else {
                  return (
                    <li key={item} onClick={onClick?onClick:onClickItem(item)}>
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
