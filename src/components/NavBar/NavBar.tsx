import shipment from "../../query/shipments.json";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const menuNames = shipment.map((item) => {
    return (
      <li className={styles.listItems} key={item.id}>
        <a className={styles.link} href={item.route}>
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <>
      <nav className={styles.menu}>
        <h4 className={styles.title}>shipment list</h4>
        <ul className={styles.list}>{menuNames}</ul>
      </nav>
    </>
  );
};
