import { useCallback, useState } from 'react';
import cn from 'classnames';

import { Dropdown } from '../Dropdown/Dropdown';
import { useSelectedItems } from '../../app/contexts/SelectedItemsContext';
import { Tags } from '../Tags/Tags';
import { defaultData } from '../mockData';

import { useOutsideClick } from '../hooks/useOutsideClick';
import { ReactComponent as TriangleIcon } from '../../app/assets/svg/triangle.svg';
import style from './MultipleSelect.module.scss';

export const MultipleSelect = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems] = useSelectedItems();

  const ref = useOutsideClick(
    useCallback(() => setIsDropdownOpen(false), [setIsDropdownOpen])
  );

  return (
    <div className={style.wrapper} ref={ref}>
      {!selectedItems.length && (
        <p className={style.defaultText}>Выберите значения из списка</p>
      )}
      <div className={style.tags}>
        <Tags data={selectedItems} />
      </div>
      <button
        className={style.btn}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <TriangleIcon className={cn({ [style.iconDown]: isDropdownOpen })} />
      </button>
      <Dropdown isOpen={isDropdownOpen} data={defaultData} />
    </div>
  );
};
