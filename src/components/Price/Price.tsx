import React from "react";
import './Price.scss'
interface Price {
    price: Number
}
export const Price = (props:Price)=>{
    return(
        <div className={'Price'} >
            {+props.price} ₽
        </div>
    )

}

