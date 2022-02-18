import logo from "../../assets/icons/Logo.svg";
import { SearchBox } from "../SearchBox/SearchBox";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <SearchBox />
    </header>
  );
};
