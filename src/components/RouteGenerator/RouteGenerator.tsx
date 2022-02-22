import shipment from '../../query/shipments.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CargoCalculation } from '../../pages/CargoCalculation';
import React from 'react';

export const RoutesGenerator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {shipment.map((route) => {
          return (
            <Route
              path=':id'
              key={route.id}
              element={<CargoCalculation shipment={shipment} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
