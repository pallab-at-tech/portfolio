import React from 'react'

const TickMark = () => {
  return (
    <div className="tickmark-container">
      <svg className="checkmark" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" />
        <polyline className="checkmark__check" points="15 27 24 35 38 19" />
      </svg>
    </div>
  )
}

export default TickMark

