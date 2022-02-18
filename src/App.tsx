import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { CargoCalculation } from "./pages/CargoCalculation/CargoCalculation";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <CargoCalculation />
      </div>
    </div>
  );
}

export default App;
