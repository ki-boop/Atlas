import React, {useState} from "react";
import './ImputNumber.scss'
import useLongPress from "../../OwnHooks/useLongPress";

interface InputNumber{
    max:number
}

export const InputNumber = (props:InputNumber) =>{
    const [countItem, setCountItem] = useState(1)


    const minButton= () =>{
        if(countItem-1>0)
        setCountItem(prevState => prevState -1)
    }
    const plusButton =()=>{
        if(countItem+1<=props.max)
        setCountItem(prevState => prevState+1)
    }
    const maxLongPress = useLongPress(minButton,200)
    const minLongPress = useLongPress(plusButton,200)

    return(
        <React.Fragment>
            <div className={'InputNumber'}>
                <button className={'btn btn-min'} type={'button'}  {...maxLongPress} onClick={minButton}>-</button>
                <input className={'inputCountItems'} type={"text"} value={countItem} readOnly/>
                <button className={'btn btn-plus'} type={'button'} {...minLongPress} onClick={plusButton}>+</button>
            </div>
         {countItem===props.max?<div>Этого товара больше нет на складе</div>: null}
        </React.Fragment>


    )
}