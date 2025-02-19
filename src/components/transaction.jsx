import React from 'react'

const Transaction = ({text, amount}) => {
  return (
    <>
    <div className="transaction">
        <span>{text}</span>
        <sapn>${amount}</sapn>
    </div>
    </>
  )
}

export default Transaction