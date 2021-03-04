import './App.css';
import React, { useState } from 'react'
import Display from './components/Display';
import DrumPads from './components/DrumPads';

function App() {

  const [displayText, setDisplayText] = useState('');

  return (
    <div className="App">
      <h1 className='header' >Drum Machine</h1>
      <DrumPads setDisplay={(id) => setDisplayText(id)} />
      <Display text={displayText} />
      <div className='footer' >
        <p className='footer-item'>Made by Derek Price</p>
        <a className='footer-item' href="https://github.com/DerekPixel/drum-machine">GitHub</a>
      </div>
    </div>
  );
}

export default App;
