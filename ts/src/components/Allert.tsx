//rafce

import React, { ReactNode } from 'react'
interface structure
{
  // children with reactNode type because in App.tsx we write string and <span></span>
  children : ReactNode;
}


const Allert = ({children} : structure) => {
  return (
    <div className="alert alert-primary" onClick={()=> console.log(children)}>{children}</div>
  )
}

export default Allert