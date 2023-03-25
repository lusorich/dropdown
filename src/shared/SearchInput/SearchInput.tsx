import { ReactComponent as SearchIcon } from '../../app/assets/svg/search.svg';
import style from './SearchInput.module.scss';

interface ISearchInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
  return (
    <>
      <div className={style.search}>
        <div className={style.inputIcon}>
          <SearchIcon />
        </div>
        <input
          onChange={onChange}
          placeholder="Поиск"
          className={style.input}
        />
      </div>
    </>
  );
};
