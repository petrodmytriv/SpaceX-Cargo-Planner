import React from "react";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/Header/Header";
import { RoutesGenerator } from "./components/RouteGenerator/RouteGenerator";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <RoutesGenerator />
      </div>
    </div>
  );
}

export default App;
