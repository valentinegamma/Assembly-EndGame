import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Languages from './Components/Languages'
import { clsx } from 'clsx'
import  data  from './Components/Data'



const App = () => {

  const randomWord = Math.floor(Math.random()*7)
  
  const [word, setword ]= useState(data[randomWord])
  const  [guess, setGuess] = useState([])
  
  console.log(word)

  const wrongGuessCount = guess.filter(letter => !word.toUpperCase().includes(letter)).length;


  const isGameLost = wrongGuessCount === 8;
  // Game is won if all unique letters in the word have been guessed
  const uniqueLetters = [...new Set(word.toUpperCase().split(''))];
  const isGameWon = uniqueLetters.every(letter => guess.includes(letter));
  const isGameOver = isGameLost || isGameWon;

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
  function newGame() {
    setword(data[randomWord])
    // handleGuess()
    setGuess([])
    

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
          disabled={isGuessed || isGameOver}
        >
          {upperLetter}
        </button>
      </div>
    );
  });

  const guessWord = word.split('').map((letter, index) => {
    const upperCase = letter.toUpperCase();
    const isGuessed = guess.includes(upperCase);
    return (
      <section className='word' key={index+1}>
        {!isGameOver ? <div>{isGuessed ? upperCase : ''} </div> : ''}
      </section>
    );
  });

  return (
    <div className='container'>
      <Header
        guess = {wrongGuessCount}
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
      {isGameOver === true && 
      <button 
        onClick={() =>newGame()}
        className='newgame'
      >
         New Game
      </button>}
    </div>
  )
}

export default App