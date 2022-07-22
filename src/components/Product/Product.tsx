import React, {useEffect, useState} from "react";
import './Product.scss'
import '../../assets/images/itemsImage/default.png'
import {Price} from "../Price/Price";
import {InputNumber} from "../../UI/Number/InputNumber";
import {Button} from "../../UI/Button/Button";
import LocalizedStrings from "react-localization";
import {useAddToCart, useCart} from "../../Context/UserContext/CartContext";
import {useCountItem, useSetCountItem} from "../../Context/UserContext/CountItemContext";
import {useChangeProducts, useProducts} from "../../Context/ProductsContext";
import {Image} from "../../UI/Image/Image";

interface ProductProps{
    id:number,
    type:string,
    name:string,
    count:number,
    description:string,
    price:number,
    img:string
}
const Product = (props:ProductProps )=>{
    const initState =1;
    const cart = useCart();
    const product = useProducts()
    const changeProduct = useChangeProducts()
    const addToCartContext = useAddToCart()
    const countItems = useCountItem()
    const setCountItems = useSetCountItem();

    let strings = new LocalizedStrings({
        ru:{
            warehouse:'На складе',
            counter:'шт',
            basket:'В корзину',
            endMessage:'Товар временно закончился'
        },
        ar:{
            warehouse:'في المخزن',
            counter:'الكمبيوتر',
            basket:'اضف الى السلة',
            endMessage:'المنتج هو مؤقتا من المخزون'
        }
    })

    const addToCart = () =>{
        changeProduct({
            id:props.id,
            count:props.count-countItems,
            img:[props.img],
            strings: new LocalizedStrings({
                ru:{type:props.type,
                    name:props.name,
                    description:props.description,
                    price:props.price},
                ar:{type:props.type,
                    name:props.name,
                    description:props.description,
                    price:props.price}

            })
        })
        addToCartContext({
            id:props.id,
            count: countItems,
            img:[props.img],
            strings: new LocalizedStrings({
                ru:{type:props.type,
                    name:props.name,
                    description:props.description,
                    price:props.price},
                ar:{type:props.type,
                    name:props.name,
                    description:props.description,
                    price:props.price}

            })
        })
        setCountItems(1)
        return 0

    }

return(
   <div className={'Product'}>
       <div className={'img'}><Image name={props.img} alt={props.name}/></div>
       <div className={'productProperty'}>
           <Price price={props.price}/>
           <div className={'str'}>{props.description}</div>
           <div className={'str'}>{strings.warehouse}: {props.count}{strings.counter}.</div>
       </div>

       {props.count>0?
           <div className={'makeOrder'}>
               <InputNumber id={props.id} img={props.img} type={props.type} price={props.price} description={props.description}
               name={props.name} count={props.count}  initCount={0}/>
               <Button onClick={addToCart}>{strings.basket}</Button>
           </div>: <div className={'endMessage'}>{strings.endMessage}</div>}
   </div>

)
}

export default Product