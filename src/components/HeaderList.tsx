import React from 'react'

const HeaderList = ({header, children}: any) => {
  return (
    <div className='w-[100%] mb-9'>
        <div className='header w-[100%] pl-6'>{header}</div>
        <div className='list w-[100%] mt-3'>
            {children}
        </div>
    </div>
  )
}

export default HeaderList