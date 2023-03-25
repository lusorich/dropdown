import { useSelectedItems } from '../../../app/contexts/SelectedItemsContext';
import { MockDataItem } from 'src/shared/mockData';

import { ReactComponent as CheckboxUnactive } from '../../../app/assets/svg/checkbox_unactive.svg';
import { ReactComponent as CheckboxActive } from '../../../app/assets/svg/checkbox_active.svg';
import style from './DropdownListItem.module.scss';

interface IDropdownListItem {
  item: MockDataItem;
}

export const DropdownListItem: React.FC<IDropdownListItem> = ({ item }) => {
  const [selectedItems, _, handleSelectItem] = useSelectedItems();

  return (
    <li className={style.item} key={item.id} onClick={handleSelectItem(item)}>
      <div className={style.itemWrapper}>
        <img src={item.imgSrc} className={style.icon} />
        <p className={style.text}>{item.label}</p>
      </div>
      <button className={style.checkbox}>
        {selectedItems.find(selectedItem => selectedItem.id === item.id) ? (
          <CheckboxActive />
        ) : (
          <CheckboxUnactive />
        )}
      </button>
    </li>
  );
};
