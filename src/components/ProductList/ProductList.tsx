import React, {useEffect, useState} from "react";
import Product from "../Product/Product";
import './ProductList.scss'
import LocalizedStrings from "react-localization";
import {ProductsProvider, useAddProducts, useProducts} from "../../Context/ProductsContext";
interface Product {
    id:number,
    count:number,
    img:string[],
    strings: Object
}
export const ProductList = () =>{

    const products = useProducts()

    const sortListProducts = ()=>{
        let tempState = products
        return tempState.sort((a, b) => b.count - a.count)
    }

        return(

            <div className={'ProductList'}>


                {sortListProducts().map((product, index) => {
                    return(<Product id={product.id}
                                    type={product.strings.type}
                                    name={product.strings.name}
                                    count={product.count}
                                    description={product.strings.description}
                                    price={product.strings.price}
                                    img={product.img[0]}
                                    key={index}/>);
                    }
                )}


            </div>
            )
}




