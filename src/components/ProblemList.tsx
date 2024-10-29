import React from 'react'
import { Link } from 'react-router-dom'

const ProblemList = ({title, link, color}: any) => {
  return (
      <Link to={link} className={`w-[100%] p-[1rem] bg-[${color}] flex justify-between items-center mb-2  rounded-md`}>
        <div>{title}</div>
    </Link>
  )
}

export default ProblemList