import React from "react";
import './Input.scss'

function isInvalid ({valid, touched, shouldValidate}:any){
    return !valid && shouldValidate && touched
}

export const Input=(props:any)=>{
    const inputType = props.type || 'text'
    const cls = ['Input']
    const htmlFor =`${inputType}-${12}`
    if(isInvalid(props)) cls.push('invalid');
    return(
        <div className={cls.join(' ')}>

            <input className={props.value.length>0?'focused':''}
                id={htmlFor}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor={htmlFor}>{props.label}</label>
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }

        </div>
    )
}