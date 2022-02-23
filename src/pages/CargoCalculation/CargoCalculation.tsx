import styles from "./CargoCalculation.module.scss";
import { useCallback, useMemo, useState } from "react";
import { Shipment } from "../../constants/interface";

export const CargoCalculation = (shipment: Shipment) => {
  const [cargo, setCargo] = useState(shipment.boxes);

  const bays: number = useMemo(() => {
    const toNumbers = cargo.split(",").map(Number);
    const sum = toNumbers.reduce(
      (prev: number, curr: number) => prev + curr,
      0
    );
    return Math.ceil(sum / 10);
  }, [cargo]);

  const calculateCargo = useCallback((e) => {
    setCargo(e.target.value);
  }, []);

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.name}>{shipment?.name}</h2>
        <p className={styles.email}>{shipment?.email}</p>
        <div className={styles.cargo}>
          <p className={styles["input-title"]}>cargo boxes</p>
          <input
            className={styles.input}
            type='text'
            value={cargo}
            onChange={(e) => {
              calculateCargo(e);
            }}
            tabIndex={1}
          />
        </div>
        <div className={styles["required-block"]}>
          <p className={styles.required}>Number of required cargo bays</p>
          <p className={styles.bays}>{bays ?? "Please enter a valid number"}</p>
        </div>
      </div>
    </article>
  );
};
