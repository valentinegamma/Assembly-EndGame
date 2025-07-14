import React from 'react'

const Word = (props) => {
  return (
    <section className='word'>
      <div>
        {props.letter}
      </div>
    </section>
  )
}

export default Word