import React, {useEffect} from "react";
import './CartItem.scss'
import {Image} from "../../UI/Image/Image";
import {Price} from "../Price/Price";
import {Button} from "../../UI/Button/Button";
import {useCart, useChangeCart, useDeleteFromCart} from "../../Context/UserContext/CartContext";
import {useChangeProducts, useProducts} from "../../Context/ProductsContext";
import LocalizedStrings from "react-localization";

interface cartItem{
    id: number,
    count: number,
    img:string[],
    strings:any
}
let strings = new LocalizedStrings({

    ru:{
        delete:'Удалить'
    },
    ar:{
        delete:'حذف'
    }
})
export const CartItem = (props:cartItem)=>{
    const deleteFromCart = useDeleteFromCart()
    const changeProduct = useChangeProducts()
    const ProductData = useProducts()
    const changeCart = useChangeCart()

    const getPrevCount = ()=>{
        let res = -1;
        ProductData.map((value ,index)=> {
            if(value.id === props.id) {
                res = ProductData[index].count
            }
            console.log(props.count)
        })
        return res
    }
    const deleteItem = () =>{
        deleteFromCart(props.id)
        changeProduct({
            id:props.id,
            count: getPrevCount()+props.count,
            img:props.img,
            strings:{
                type:props.strings.type,
                name:props.strings.name,
                description:props.strings.description,
                price:props.strings.price
            }
        })
        return 0;
    }


    return (
        <div className={'CartItem'}>
            <div className={'col'}><Image name={props.img[0]} alt={props.strings.name}/></div>
            <div className={'col'}>{props.count}</div>
            <div className={'col'}>{props.strings.name}</div>
            <div className={'col'}><Price price={props.strings.price}/></div>
            <div className={'col'}>{props.strings.type}</div>
            <div className={'col'}><Button onClick={deleteItem}>{strings.delete}</Button></div>
        </div>
    )
}