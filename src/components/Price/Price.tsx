import React, {useEffect} from "react";
import './Price.scss'
import LocalizedStrings from "react-localization";
interface Price {
    price: Number
}


let strings = new LocalizedStrings({
    ru:{
        currency:'₽'
    },
    ar:{
        currency:'د.إ'
    }
})



export const Price = (props:Price)=>{

    return(
        <div className={'Price'} >
            {+props.price} {strings.currency}
        </div>
    )

}

