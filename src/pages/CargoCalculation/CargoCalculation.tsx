import styles from "./CargoCalculation.module.scss";
import shipment from "../../query/shipments.json";
import { useEffect, useState } from "react";

export const CargoCalculation = () => {
  const [cargo, setCargo] = useState("");
  const [bays, setBays] = useState(0);

  useEffect(() => {
    const toNumbers = cargo.split(",").map(Number);
    const sum = toNumbers.reduce((partialSum, a) => partialSum + a, 0);

    return setBays(Math.ceil(sum / 10));
  }, [cargo]);

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.name}>{shipment[0].name}</h2>
        <p className={styles.email}>{shipment[0].email}</p>
        <div className={styles.cargo}>
          <p className={styles.inputTitle}>cargo boxes</p>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div>
          <p className={styles.required}>Number of required cargo bays</p>{" "}
          <p className={styles.bays}>{bays}</p>
        </div>
      </div>
    </article>
  );
};
