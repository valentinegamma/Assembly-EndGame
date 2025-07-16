import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Languages from './Components/Languages'
import { clsx } from 'clsx';



const App = () => {

  
  const [word, setword ]= useState('react')
  const  [guess, setGuess] = useState([])

  const wrongGuessCount = guess.filter(letter => !word.toUpperCase().includes(letter)).length;

  const isGameLost = wrongGuessCount === 8
  const isGameWon = guess.filter(letter => word.toUpperCase().includes(letter)).length == word.split('').length
  const isGameOver = isGameLost || isGameWon

  console.log(isGameLost, "gamelost")
  console.log(isGameWon, "gamewon")
  console.log(isGameOver, "gameover")
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
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
      <Header
        won = {isGameWon}
        lost = {isGameLost}
        over = {isGameOver}
      />
      <Languages lost={wrongGuessCount} />
      <div className="letter">
      {guessWord}
      </div>
      <div  className='keyboard'>
        {keyboard}
      </div>
      {/* {isGameWon ===true && <button className='newgame'> New Game</button>} */}
    </div>
  )
}

export default App