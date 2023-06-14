import React from 'react'


interface props{
    children : string;
    color: string;
    onclick: () => void;
}
const button = ({children,color, onclick} : props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>{children}</button>
  )
}

export default button