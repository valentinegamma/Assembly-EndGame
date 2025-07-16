import React from 'react'

const Languages = (props) => {
  return (
    <div className='lang-container'>
      <span className={props.lost >= 1 ? 'html lost': 'html'}>html</span>
      <span className={props.lost >= 2 ? 'css lost': 'css'}>CSS</span>
      <span className={props.lost >= 3 ? 'javascript lost': 'javascript'}>Javascipt</span>
      <span className={props.lost >= 4 ? 'react lost': 'react'}>React</span>
      <span className={props.lost >= 5 ? 'typescript lost': 'typescript'}>Typescript</span>
      <span className={props.lost >= 6 ? 'node-js lost': 'node-js'}>Node.js</span>
      <span className={props.lost >= 7 ? 'python lost': 'python'}>Python</span>
      <span className={props.lost >= 8 ? 'ruby lost': 'ruby'}>Ruby</span>
      <span className={props.lost >= 9 ? 'assembly lost': 'assembly'}>Assembly</span>
    </div>
  )
}

export default Languages