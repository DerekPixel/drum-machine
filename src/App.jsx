import './App.css';
import React, { useState } from 'react'
import Display from './components/Display';
import DrumPads from './components/DrumPads';

function App() {

  var [displayText, setDisplayText] = useState('');

  return (
    <div className="App">
      <DrumPads setDisplay={(id) => setDisplayText(displayText = id)} />
      <Display text={displayText} />
    </div>
  );
}

export default App;
