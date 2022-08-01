import React from 'react'
import './Button.css'
type propType={
onClick:()=>void,
size:"large" | "small"
text:string
}
const Button = ({onClick, size, text}:propType) => {
  return (
    <div className={`button-main ${size==='large'?'large':'small'}`} onClick={onClick}>
        {text}
    </div>
  )
}

export default Button
