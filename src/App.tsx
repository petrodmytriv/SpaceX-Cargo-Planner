import React from 'react';
import './App.scss';
import { Header, NavBar, RoutesGenerator } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <NavBar />
        <RoutesGenerator />
      </div>
    </div>
  );
}

export default App;
