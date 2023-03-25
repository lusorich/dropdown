import { useSelectedItems } from '../../app/contexts/SelectedItemsContext';
import { MockDataItem, MockDataList } from '../mockData';

import { ReactComponent as Close } from '../../app/assets/svg/close.svg';
import style from './Tags.module.scss';

interface ITags {
  data: MockDataList;
}

export const Tags: React.FC<ITags> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useSelectedItems();

  const handleClose =
    (item: MockDataItem): (() => void) =>
    () => {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem.id !== item.id)
      );
    };

  return (
    <>
      {data.map(item => (
        <div key={item.id} className={style.tag}>
          <span className={style.label}>{item.label}</span>
          <button className={style.btn} onClick={handleClose(item)}>
            <Close />
          </button>
        </div>
      ))}
    </>
  );
};
