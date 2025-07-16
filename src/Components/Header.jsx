import React from 'react'

const Header = (props) => {
  return (
    <div className='header-container'>
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>

      {(!props.won && !props.lost) && <div className=' msg-container'>
        {props.guess === 1 && <span>Farewell HTML</span>}
        {props.guess === 2 && <span>Adios CSS</span>}
        {props.guess === 3 && <span>R.I.P Javascript</span>}
        {props.guess === 4 && <span>We'll miss you React</span>}
        {props.guess === 5 && <span>Oh no, not Typescript</span>}
        {props.guess === 6 && <span>Node-js bites the dust</span>}
        {props.guess === 7 && <span>Gone but not forgotten Python</span>}
        {props.guess === 8 && <span>The end of Ruby</span>}
        </div>}
      {props.won && (
        <div className='msg-container msg-container-won'>
          <span className='msg-disp'>
            🎉 You Win <br /> Well done 🎉
          </span>
        </div>
      )}
      {props.lost && (
        <div className='msg-container msg-container-lost'>
          <span className='msg-disp'>
            Game Lost <br /> you better start learning assembly
          </span>
        </div>
      )}
    </div>
  )
}

export default Header

