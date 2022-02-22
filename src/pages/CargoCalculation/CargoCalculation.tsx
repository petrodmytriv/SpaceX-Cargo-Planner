import styles from "./CargoCalculation.module.scss";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const CargoCalculation = ({ shipment }: any) => {
  const [cargo, setCargo] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setCargo(data.boxes);
  }, []);

  const data = useMemo(
    () => shipment.find((route: any) => route.id === id),
    [shipment, id]
  );

  const bays: number = useMemo(() => {
    const toNumbers = cargo.split(",").map(Number);
    const sum = toNumbers.reduce((prev, curr) => prev + curr, 0);
    return Math.ceil(sum / 10);
  }, [cargo]);

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.name}>{data?.name}</h2>
        <p className={styles.email}>{data?.email}</p>
        <div className={styles.cargo}>
          <p className={styles.inputTitle}>cargo boxes</p>
          <input
            className={styles.input}
            type="text"
            value={cargo}
            onChange={(e) => {
              setCargo(e.target.value);
            }}
          />
        </div>
        <div className={styles.requiredBlock}>
          <p className={styles.required}>Number of required cargo bays</p>
          <p className={styles.bays}>
            {bays ? bays : "Please enter a valid number"}
          </p>
        </div>
      </div>
    </article>
  );
};
