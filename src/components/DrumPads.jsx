
import DrumPad from "./DrumPad"

import closedHat from '../sounds/closed-hat.wav'
import flam from '../sounds/flam.wav'
import kick from '../sounds/kick.wav'
import openHat from '../sounds/open-hat.wav'
import pdHat from '../sounds/pd-hat.wav'
import rim from '../sounds/rim.wav'
import sdst from '../sounds/sdst.wav'
import snr from '../sounds/snr.wav'
import snroff from '../sounds/snroff.wav'

const DrumPads = ({setDisplay}) => {

  const drumBank = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'closed-hat',
      url: closedHat
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'flam',
      url: flam
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'kick',
      url: kick
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'open-hat',
      url: openHat
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'pd-hat',
      url: pdHat
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'rim',
      url: rim
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'sdst',
      url: sdst
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'snr',
      url: snr
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'snroff',
      url: snroff
    },
  ]
  
  const makeDrumPads = drumBank.map((padObj, i, bankArr) => 
    <DrumPad 
      key={bankArr[i].id}
      bankArr={bankArr}
      index={i}
      setDisplay={setDisplay}
    />
  )  

  return (
    <div>
      {makeDrumPads}
    </div>
  )
}

export default DrumPads
