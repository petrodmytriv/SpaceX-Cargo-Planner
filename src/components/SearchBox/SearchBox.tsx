import search from "../../assets/icons/Search.svg";
import styles from "./SearchBox.module.scss";

export const SearchBox = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} type="search" placeholder="Search" />
      <img className={styles.searchIcon} src={search} alt="search" />
    </div>
  );
};
