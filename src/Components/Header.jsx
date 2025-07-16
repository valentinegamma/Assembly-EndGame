import React from 'react'

const Header = (props) => {
  return (
    <div className='header-container'>
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
      </p>
      {(!props.won && !props.lost) && <div className='msg-container msg-container-empty'> </div>}
      {props.won && <div className='msg-container msg-container-won'><span className='msg-disp'> Game Won </span></div>}
      {props.lost && <div className='msg-container msg-container-lost'><span className='msg-disp'> Game Lost, you better start learning assembly </span></div>}
        
   </div>
  )
}

export default Header

