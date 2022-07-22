import React from "react";
import './Button.scss'
interface Button{
    children: any,
    onClick: any
}
export  const Button = (props:Button) =>{

    let cls = ['btn']
    return(
        <button onClick={props.onClick} className={'Button'}>{props.children}</button>
    )
}
