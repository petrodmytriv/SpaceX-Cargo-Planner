import searchIcon from "../../assets/icons/Search.svg";
import styles from "./SearchBox.module.scss";
import shipment from "../../query/shipments.json";
import {
  FunctionComponent,
  KeyboardEventHandler,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toKebabCase } from "../../utils";

export const SearchBox: FunctionComponent = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  const searchDropdown = useMemo(() => {
    return shipment
      .filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 3)
      .map((filtered) => (
        <li key={filtered.id} className={styles["search-list"]}>
          <a
            className={styles["search-link"]}
            href={toKebabCase(filtered.name)}
          >
            {filtered.name}
          </a>
        </li>
      ));
  }, [search]);

  const dropdownFirstMatchResult = () => {
    if (searchDropdown[0].props.children.props.href) {
      return searchDropdown[0].props.children.props.href;
    } else {
      return;
    }
  };

  const onEnterPress: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      setIsFocused(false);
      navigate(dropdownFirstMatchResult());
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
      <img className={styles["search-icon"]} src={searchIcon} alt='search' />
      {isFocused ? (
        <div className={styles.dropdown}>{searchDropdown}</div>
      ) : null}
    </div>
  );
};
