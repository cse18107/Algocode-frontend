import React from 'react'

const Chip = ({text, color, border}: any) => {
  return (
    <div className={`p-[0.5rem] bg-[${color}] text-nowrap pl-5 pr-5  btn btn-ghost  m-[0.8rem]`}>{text}</div>
  )
}

export default Chip