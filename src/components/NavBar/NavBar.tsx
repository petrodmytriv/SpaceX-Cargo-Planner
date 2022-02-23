import shipment from "../../query/shipments.json";
import styles from "./NavBar.module.scss";
import burger from "../../assets/icons/Burger.svg";
import cancel from "../../assets/icons/Cancel.svg";
import { FunctionComponent, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/animation.scss";
import { useLocation } from "react-router-dom";
import { toKebabCase } from "../../utils";

export const NavBar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { pathname } = useLocation();

  const menuNames = shipment.map((item) => {
    return (
      <li className={styles["list-items"]} key={item.id}>
        <a
          className={
            "/" + toKebabCase(item.name) === pathname
              ? styles["active-link"]
              : styles.link
          }
          href={toKebabCase(item.name)}
        >
          {item.name}
        </a>
      </li>
    );
  });

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={menuRef}
        in={showMenu}
        timeout={400}
        classNames='menu'
        onEnter={() => setShowMenu(true)}
        onExited={() => setShowMenu(false)}
      >
        <nav
          ref={menuRef}
          className={!showMenu ? styles.menu : styles["mobile-menu"]}
        >
          <h4 className={styles.title}>shipment list</h4>
          <ul className={styles.list}>{menuNames}</ul>
        </nav>
      </CSSTransition>
      <CSSTransition
        nodeRef={burgerRef}
        in={showMenu}
        timeout={400}
        classNames='burger'
        onEnter={() => setShowMenu(true)}
        onExited={() => setShowMenu(false)}
      >
        <button
          ref={burgerRef}
          className={styles.burger}
          onClick={() => {
            setShowMenu(!showMenu);
            if (!showMenu) {
              document.body.classList.add("hidden");
            } else {
              document.body.classList.remove("hidden");
            }
          }}
        >
          {!showMenu ? (
            <img src={burger} alt='burger' />
          ) : (
            <img src={cancel} alt='cancel' />
          )}
        </button>
      </CSSTransition>
    </>
  );
};
