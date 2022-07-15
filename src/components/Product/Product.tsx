import React from "react";
import './Product.scss'
import '../../assets/images/itemsImage/default.png'
import {Price} from "../Price/Price";
import {InputNumber} from "../../UI/Number/InputNumber";
import {Button} from "../../UI/Button/Button";

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
return(
   <div className={'Product'}>
       <div className={'img'}><img src={require('../../assets/images/itemsImage/default.png')} alt={props.name}/></div>
       <div className={'productProperty'}>
           <Price price={props.price}/>
           <div className={'str'}>{props.description}</div>
           <div className={'str'}>На складе: {props.count} шт.</div>


       </div>

       {props.count>0?
           <div className={'makeOrder'}>
               <InputNumber max={props.count}/>
               <Button>В корзину</Button>
           </div>: <div>Товара нет в наличии</div>}





   </div>

)
}

export default Product