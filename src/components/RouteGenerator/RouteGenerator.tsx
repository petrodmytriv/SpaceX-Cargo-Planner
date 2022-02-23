import shipments from "../../query/shipments.json";
import { Route, Routes } from "react-router-dom";
import { CargoCalculation } from "../../pages/CargoCalculation";
import React from "react";
import { Shipment } from "../../constants/interface";
import { toKebabCase } from "../../utils";

export const RoutesGenerator = () => {
  return (
    <Routes>
      {shipments.map((shipment: Shipment) => {
        return (
          <Route
            path={toKebabCase(shipment.name)}
            key={shipment.id}
            element={<CargoCalculation {...shipment} />}
          />
        );
      })}
    </Routes>
  );
};
