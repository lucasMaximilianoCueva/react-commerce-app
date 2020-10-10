import React from 'react';
import './App.css';
import Img from './components/Img';
import Title from './components/Title';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title />
        <Link />
      </header>
    </div>
  );
}

export default App;
