import React from 'react'
import "../App.css";

const Cell = ({number}) => {
  return (
    <div className='cell'>{number}</div>
  )
}

export default Cell