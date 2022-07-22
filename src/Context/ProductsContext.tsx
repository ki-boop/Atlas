import React, {useContext, useEffect, useState} from "react";
import {tempList} from "./StartProducts";
import LocalizedStrings from "react-localization";
interface Product {
    id:number,
    count:number,
    img:string[],
    strings: any
}

const ProductsContext = React.createContext([{}] as Array<Product>)
const AddProductsContext = React.createContext((product:Product)=>{})
const RemoveProductsContext = React.createContext((id:Number)=>{})
const ChangeProductsContext = React.createContext((product:Product)=>{})

export const useProducts = () =>{
    return useContext(ProductsContext)
}
export const useAddProducts = () =>{
    return useContext(AddProductsContext)
}
export const useRemoveProducts = () =>{
    return useContext(RemoveProductsContext)
}
export const useChangeProducts = () =>{
    return useContext(ChangeProductsContext)
}

export const ProductsProvider = ({children}:any)=>{
    const [products, setProducts] = useState(tempList)


    const addProduct = (product:Product) =>{
        let list = [...products]
        list.push(product)
        list[list.length-1].strings = new LocalizedStrings({
            ru:{
                type:product.strings.ru.type,
                name:product.strings.ru.name,
                description:product.strings.ru.description,
                price:product.strings.ru.price,
            },
            ar:{
                type:product.strings.ar.type,
                name:product.strings.ar.name,
                description:product.strings.ar.description,
                price:product.strings.ar.price,
            }
        })
        console.log('list',list)



        setProducts(list)
    }
    const removeProduct = (id:Number) =>{
        let list = [...products]
        products.map((prd, index)=>{
            if(prd.id===id) list.splice(index,1)
        })
        setProducts(list)
    }

    const changeProduct = (product:Product)=>{
        let list = [...products]
        products.map((prd,index)=>{
            if(prd.id===product.id) {list[index]=product}
        })

        setProducts(list)
    }



        return(
            <ProductsContext.Provider value={products}>
                <AddProductsContext.Provider value={addProduct}>
                    <RemoveProductsContext.Provider value={removeProduct}>
                        <ChangeProductsContext.Provider value={changeProduct}>
                            {children}
                        </ChangeProductsContext.Provider>
                    </RemoveProductsContext.Provider>
                </AddProductsContext.Provider>
            </ProductsContext.Provider>

        )
    }

