import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen'>
      {children}
    </div>
  )
}

export default layout
