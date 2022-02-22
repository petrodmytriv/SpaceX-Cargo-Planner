import searchIcon from '../../assets/icons/Search.svg';
import styles from './SearchBox.module.scss';
import shipment from '../../query/shipments.json';
import { FunctionComponent, KeyboardEventHandler, useState } from 'react';

export const SearchBox: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchDropdown = shipment
    .filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 3)
    .map((filtered) => (
      <li key={filtered.id} className={styles.searchList}>
        <a className={styles.searchLink} href={filtered.id}>
          {filtered.name}
        </a>
      </li>
    ));

  const onEnterPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      window.location.pathname = searchDropdown[0].props.children.props.href;
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type='search'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        onKeyPress={onEnterPress}
        tabIndex={0}
      />
      <img className={styles.searchIcon} src={searchIcon} alt='search' />
      {isFocused ? <div className={styles.dropdown}>{searchDropdown}</div> : ''}
    </div>
  );
};
