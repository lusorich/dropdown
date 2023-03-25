import { DropdownListItem } from '../DropdownListItem/DropdownListItem';
import { MockDataList } from 'src/shared/mockData';

import style from './DropdownList.module.scss';

interface IDropdownList {
  data: MockDataList;
}

export const DropdownList: React.FC<IDropdownList> = ({ data }) => {
  return (
    <ul className={style.list}>
      {data.length ? (
        data.map(item => <DropdownListItem item={item} key={item.id} />)
      ) : (
        <p className={style.notFound}>Не найдено</p>
      )}
    </ul>
  );
};
