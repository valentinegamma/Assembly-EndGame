import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Languages from './Components/Languages'
import { clsx } from 'clsx';



const App = () => {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const [word, setword ]= useState('elephant')
  const  [guess, setGuess] = useState([])
  console.log(guess)
  
  function handleGuess(letter) {
    setGuess(prev => 
      prev.includes(letter.toUpperCase()) ? prev :
      [...prev, letter.toUpperCase()]
    )
  }

  const keyboard = alphabet.split('').map(letter => {
    const upperLetter = letter.toUpperCase();
    const isGuessed = guess.includes(upperLetter);
    const inWord = word.toUpperCase().includes(upperLetter);
    let btnClass = 'btn';
    if (isGuessed) {
      btnClass += inWord ? ' green' : ' red';
    }
    return (
      <div>
        <button 
          key={upperLetter}
          onClick={() => handleGuess(letter)}
          className={btnClass}
          disabled={isGuessed}
        >
          {upperLetter}
        </button>
      </div>
    );
  });

  const guessWord = word.split('').map(letter => {
    const upperCase = letter.toUpperCase();
    const isGuessed = guess.includes(upperCase);
    return (
      <section className='word' key={upperCase}>
        <div>
          {isGuessed ? upperCase : ''}
        </div>
      </section>
    );
  });

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
      <button className='newgame'> New Game</button>
    </div>
  )
}

export default App