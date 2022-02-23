import logo from "../../assets/icons/Logo.svg";
import { SearchBox } from "../SearchBox/SearchBox";
import styles from "./Header.module.scss";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt='Logo' />
      <SearchBox />
    </header>
  );
};
