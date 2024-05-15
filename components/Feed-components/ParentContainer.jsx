import React from 'react'
import Sidebar from './Sidebar'
import NavContainer from './NavContainer'

const ParentContainer = () => {
  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar/>
      <NavContainer />
    </div>
  )
}

export default ParentContainer