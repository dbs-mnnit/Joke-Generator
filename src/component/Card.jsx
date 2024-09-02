import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='card'>
      {props.joke}
    </div>
  )
}

export default Card
