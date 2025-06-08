import React from 'react'

const ActiveUnderline = ({active}) => {
  return (
    <div className={`h-[3px] rounded-2xl bg-amber-600  ${active ? "block" : "hidden"} mx-0.5 transition-transform `}>
      
    </div>
  )
}

export default ActiveUnderline
