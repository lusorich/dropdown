import { useState } from 'react';
import cn from 'classnames';

import { DropdownList } from './DropdownList/DropdownList';
import { SearchInput } from '../SearchInput/SearchInput';
import { MockDataList } from '../mockData';

import style from './Dropdown.module.scss';

interface IDropdown {
  isOpen: boolean;
  data: MockDataList;
}

export const Dropdown: React.FC<IDropdown> = ({ isOpen, data }) => {
  const [filteredData, setFilteredData] = useState(data);

  if (!data || !data.length) {
    return (
      <div
        className={cn(style.wrapper, {
          [style.open]: isOpen,
        })}>
        Нет данных
      </div>
    );
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter(item => {
          return item.label.includes(e.target.value);
        })
      );
    }
  };

  return (
    <div
      className={cn(style.wrapper, {
        [style.open]: isOpen,
        'visually-hidden': !isOpen,
      })}>
      <SearchInput onChange={handleSearch} />
      <DropdownList data={filteredData} />
    </div>
  );
};
