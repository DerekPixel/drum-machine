import React, { useState, useEffect } from 'react'


const DrumPad = ({bankArr, index, setDisplay}) => {

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key.toUpperCase().charCodeAt(0) === bankArr[index].keyCode) {
        playSound();
      }
    })
  })

  const playSound = () => {
    const sound = document.getElementById(bankArr[index].keyTrigger);
    sound.currentTime = 0;
    sound.play();
    setDisplay(bankArr[index].id)
  }

  return (
    <button
      className='drum-pad'
      id={bankArr[index].id}
      onClick={playSound}
    >
      {bankArr[index].keyTrigger} 
      <audio 
      className='clip'
      id={bankArr[index].keyTrigger} 
      src={bankArr[index].url}
      >
      
      </audio>
    </button>
  )
}

export default DrumPad
