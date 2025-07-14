import React from 'react'

const Keyboard = (prop) => {
  return (
    <div>
      <button className='btn'> {prop.letter} </button>
    </div>
  )
}

export default Keyboard