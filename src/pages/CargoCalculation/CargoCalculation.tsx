import styles from "./CargoCalculation.module.scss";
import shipment from "../../query/shipments.json";
import { useEffect, useState } from "react";

export const CargoCalculation = () => {
  let data: any;
  const [cargo, setCargo] = useState("");
  const [bays, setBays] = useState(0);

  useEffect(() => {
    const toNumbers = cargo.split(",").map(Number);
    const sum = toNumbers.reduce((partialSum, a) => partialSum + a, 0);

    return setBays(Math.ceil(sum / 10));
  }, [cargo]);

  useEffect(() => {
    setCargo(data.boxes);
  }, []);

  const path = window.location.pathname;

  const checkPath = () => {
    switch (path) {
      case "/amazon":
        return (data = shipment[0]);
      case "/american_express":
        return (data = shipment[1]);
      case "/airbnb":
        return (data = shipment[2]);
      case "/apple":
        return (data = shipment[3]);
    }
  };
  checkPath();
  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.name}>{data.name}</h2>
        <p className={styles.email}>{data.email}</p>
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
