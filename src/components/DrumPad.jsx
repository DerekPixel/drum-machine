import React, { useState, useEffect } from 'react'

const DrumPad = ({bankArr, index, setDisplay}) => {

  var audio = new Audio('A.mp3');
  audio.crossOrigin = 'anonymous';
  // audio.src = 'A.mp3';

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key.toUpperCase().charCodeAt(0) === bankArr[index].keyCode) {
        playSound();
      }
    })
  })

  const playSound = () => {
    audio.currentTime = 0;
    return audio.play();
    // const sound = document.getElementById(bankArr[index].keyTrigger);
    // sound.currentTime = 0;
    // sound.play();
    // setDisplay(bankArr[index].id)
  }

  return (
    <button
      className='drum-pad'
      id={bankArr[index].id}
      onClick={() => {
        playSound().then(() => {
          console.log('success');
        }).catch(error => {
          console.log('nope');
          console.log(error);
        })
      }}
    >
      {bankArr[index].keyTrigger} 
      <audio 
      className='clip'
      id={bankArr[index].keyTrigger} 
      src={bankArr[index].url}>
      
      </audio>
    </button>
  )
}

export default DrumPad
