import React from 'react'
import './App.css'
import Header from './Components/Header'
import Languages from './Components/Languages'
import Word from './Components/Word'
import Keyboard from './Components/Keyboard'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const word = ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T']

const keyboard = alphabet.map(letter =>
  <Keyboard 
    letter = {letter}
  />
)

const guessWord = word.map(word =>
  <Word
    letter ={word}
  />
)

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Languages />
      <div className="letter">
      {guessWord}
      </div>
      <div  className='keyboard'>
        {keyboard}
      </div>
    </div>
  )
}

export default App