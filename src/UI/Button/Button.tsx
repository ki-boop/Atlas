import React, {DetailedReactHTMLElement} from "react";
import './Button.scss'
interface Button{
    children: string
}
export  const Button = (props:Button) =>{

    let cls = ['btn']
    return(
        <button className={'Button'}>{props.children}</button>
    )
}
