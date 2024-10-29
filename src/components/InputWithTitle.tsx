import React from 'react'

const InputWithTitle = ({header, children}: any) => {
  return (
    <div className='w-full mt-3'>
        <div>{header}</div>
        <div>
            {children}
        </div>
    </div>
  )
} 

export default InputWithTitle