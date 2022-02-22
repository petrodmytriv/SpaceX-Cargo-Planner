import shipment from '../../query/shipments.json';
import styles from './NavBar.module.scss';
import burger from '../../assets/icons/Burger.svg';
import cancel from '../../assets/icons/Cancel.svg';
import { FunctionComponent, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../styles/animation.scss';
import { useParams } from 'react-router-dom';

export const NavBar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { id } = useParams();

  const menuNames = shipment.map((item) => {
    return (
      <li className={styles.listItems} key={item.id}>
        <a
          className={'/' + item.id === id ? styles.activeLink : styles.link}
          href={item.id}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <CSSTransition
        in={showMenu}
        timeout={400}
        classNames='menu'
        onEnter={() => setShowMenu(true)}
        onExited={() => setShowMenu(false)}
      >
        <nav className={!showMenu ? styles.menu : styles.mobileMenu}>
          <h4 className={styles.title}>shipment list</h4>
          <ul className={styles.list}>{menuNames}</ul>
        </nav>
      </CSSTransition>
      <CSSTransition
        in={showMenu}
        timeout={400}
        classNames='burger'
        onEnter={() => setShowMenu(true)}
        onExited={() => setShowMenu(false)}
      >
        <button
          className={styles.burger}
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          {!showMenu ? (
            <img className={styles.burgerIcon} src={burger} alt='burger' />
          ) : (
            <img className={styles.cancelIcon} src={cancel} alt='cancel' />
          )}
        </button>
      </CSSTransition>
    </>
  );
};
