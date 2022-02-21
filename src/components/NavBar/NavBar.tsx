import shipment from "../../query/shipments.json";
import styles from "./NavBar.module.scss";
import burger from "../../assets/icons/Burger.svg";
import cancel from "../../assets/icons/Cancel.svg";
import { FunctionComponent, useState } from "react";

export const NavBar: FunctionComponent = () => {
  const [showNav, setShowNav] = useState(false);

  const path = window.location.pathname;
  const menuNames = shipment.map((item) => {
    return (
      <li className={styles.listItems} key={item.id}>
        <a
          className={item.route === path ? styles.activeLink : styles.link}
          href={item.route}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <nav className={!showNav ? styles.menu : styles.mobileMenu}>
        <h4 className={styles.title}>shipment list</h4>
        <ul className={styles.list}>{menuNames}</ul>
      </nav>
      <button
        className={styles.burger}
        onClick={() => {
          showNav ? setShowNav(false) : setShowNav(true);
        }}
      >
        {!showNav ? (
          <img className={styles.burgerIcon} src={burger} alt="burger" />
        ) : (
          <img className={styles.cancelIcon} src={cancel} alt="cancel" />
        )}
      </button>
    </>
  );
};
